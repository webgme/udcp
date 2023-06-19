# webgme-udcp
This repository is a collection of other tools that together buids up the semi-auto deployable Unified Data and Compute Platform.

## Getting started
The default deployment of tools is going to be docker-compose style and contains at least the taxonomy and workflow studios with a 
minimal frontend to welcome users.

## Docker-compose base build
You need to do the following preparation tasks to be able to successfully 
buid the cluster of images:
- check the local_shares directory
  - make sure you generate and copy valid ssh key files into the keys directory
  - make sure that the db directory is empty of db files
- The following environment variables have to be set in the hosting system:
  - UDCP_OPTION - string shows which config file to use for containers
  - UDCP_NAME - the udcp server name to use for (for example webgme.org)
  - UDCP_PORT - the port where the system will listen

