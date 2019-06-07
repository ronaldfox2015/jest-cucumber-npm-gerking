.DEFAULT_GOAL			:= help

## GENERAL ##
OWNER 							= jest-cucumber
SERVICE_NAME 				= npm-gerking
VERSION         		= v1
PROVIDER						= ronaldgcr
DOCKER_NETWORK			= --network api_reserva 
## DEV ##
TAG_DEV							= 0.0.1
TAG_MYSQL 					= mysql
MYSQL_USER					= root
MYSQL_ROOT_PASSWORD	= 1234
USER_ID  						= $(shell id -u)
GROUP_ID 						= $(shell id -g)

## DEPLOY ##
ENV 								= dev
BUILD_NUMBER 				= 000001
BUILD_TIMESTAMP 		= 20181005
DEPLOY_REGION 			= eu-west-1
ACCOUNT_ID					= 929226109038
DESIRED_COUNT 			= 1
MIN_SCALING					= 1
MAX_SCALING					= 2
MEMORY_SIZE 				= 512
CONTAINER_PORT 			= 80
INFRA_BUCKET 				= infraestructura.dev

## RESULT_VARS ##
PROJECT_NAME			    = $(OWNER)-$(ENV)-$(SERVICE_NAME)
IMAGE_DEPLOY			    = $(PROVIDER)/$(PROJECT_NAME):$(TAG_DEV)

## VARIABLES FOR LOCAL BALANCER, 'SPRING CONFIG OR ENV VARS' ##
VIRTUAL_HOST				= $(PROJECT_NAME)/$(VERSION)

## DEFAULT ##
NETWORD					    ?= orbis-training-$(PROJECT_NAME)
PATH_CORE					?= $(PWD)/core

build: ## construccion de la imagen: make build
	docker build -f docker/dev/Dockerfile -t $(IMAGE_DEPLOY) docker/dev/;

install: ## install de paquetes
	make tast EXECUTE="install";
	sudo chmod -R 777 app/*;

tast: ## installar: make tast EXECUTE=install
	docker run -it -v "$(PWD)/app:/app" -w "/app" $(IMAGE_DEPLOY) npm $(EXECUTE)

start: ## Test project
	docker run -it -p 3000:3000 --name jest-cucumber-dev-npm-gerking  -v "$(PWD)/app:/app" -w "/app"  $(IMAGE_DEPLOY) npm start

up: ## inicialiar mysql y applicacion
	@IMAGE_DEPLOY_TEST=$(IMAGE_DEPLOY) \
	PROJECT_NAME=$(PROJECT_NAME) \
	VIRTUAL_HOST=$(VIRTUAL_HOST) \
	docker-compose -p $(PROJECT_NAME) up

test: ## Test project
	docker run -it -p 3000:3000 --name $(PROJECT_NAME)  -v "$(PWD)/app:/app" -w "/app"  $(IMAGE_DEPLOY) npm test

ssh: ## inicializar proyecto: make login
	docker run -it -p 3000:3000 --name $(PROJECT_NAME)  -v "$(PWD)/app:/app" -w "/app"  $(IMAGE_DEPLOY) bash

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
