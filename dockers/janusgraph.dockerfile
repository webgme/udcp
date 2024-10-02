# docker build -t janusgraph-with-indicies -f ./dockers/janusgraph.dockerfile .

FROM janusgraph/janusgraph:latest

COPY ./jvm-11.options /opt/janusgraph/conf/jvm-11.options
COPY ./create_db_indices.groovy /opt/janusgraph/create_db_indices.groovy

RUN cat /opt/janusgraph/conf/janusgraph-berkeleyje-lucene-server.properties
RUN /opt/janusgraph/bin/gremlin.sh -e /opt/janusgraph/create_db_indices.groovy