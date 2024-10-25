#!/bin/bash

# Check if an argument is passed
if [ -z "$1" ]; then
  echo "Error: No argument provided. Please provide one of the following: 'taxonomy', 'cwl', or 'query'."
  exit 1
fi

# Set DOCKER_IMAGE and DOCKER_SERVICE based on the input
case "$1" in
  "taxonomy")
    DOCKER_IMAGE="webgme/taxonomy:latest"
    DOCKER_SERVICE="taxonomy"
    ;;
  "cwl")
    DOCKER_IMAGE="webgme/cwl:latest"
    DOCKER_SERVICE="cwl"
    ;;
  "query")
    DOCKER_IMAGE="git.isis.vanderbilt.edu:5050/meijerop/taxonomy-query:latest"
    DOCKER_SERVICE="taxonomy-query"
    ;;
  *)
    echo "Error: Invalid input. Please provide one of the following: 'taxonomy', 'cwl', or 'query'."
    exit 1
    ;;
esac

# cd /udcp/

# Execute Docker commands
echo "Pulling Docker image: $DOCKER_IMAGE"
docker pull $DOCKER_IMAGE

echo "Starting Docker service: $DOCKER_SERVICE"
docker compose up -d --build $DOCKER_SERVICE