graph = JanusGraphFactory.open("/opt/janusgraph/conf/janusgraph-berkeleyje-lucene-server.properties")

// Open a management transaction
mgmt = graph.openManagement()

// Index on tagId
if (!mgmt.containsPropertyKey('tagId')) {
    tagId = mgmt.makePropertyKey('tagId').dataType(String.class).make()
} else {
    tagId = mgmt.getPropertyKey('tagId')
}

if (!mgmt.containsGraphIndex('tagIdIndex')) {
    mgmt.buildIndex('tagIdIndex', Vertex.class)
        .addKey(tagId)
        .buildCompositeIndex()
}

// Composite index on Content label and contentId
if (!mgmt.containsVertexLabel('Content')) {
    contentLabel = mgmt.makeVertexLabel('Content').make()
} else {
    contentLabel = mgmt.getVertexLabel('Content')
}

if (!mgmt.containsPropertyKey('contentId')) {
    contentId = mgmt.makePropertyKey('contentId').dataType(String.class).make()
} else {
    contentId = mgmt.getPropertyKey('contentId')
}

if (!mgmt.containsGraphIndex('contentIdIndex')) {
    mgmt.buildIndex('contentIdIndex', Vertex.class)
        .addKey(contentId)                // Index the 'contentId' property
        .indexOnly(contentLabel)          // Restrict to vertices with the 'Content' label
        .buildCompositeIndex()
}

// 3. Commit the transaction to make the changes permanent
mgmt.commit()