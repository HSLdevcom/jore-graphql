#!/bin/bash
set -e

ORG=${ORG:-hsldevcom}

read -p "Tag: " TAG

DOCKER_TAG=${TAG:-latest}
DOCKER_IMAGE=${ORG}/jore-graphql:${DOCKER_TAG}

docker build -t $DOCKER_IMAGE .
docker push $DOCKER_IMAGE
