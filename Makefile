# The ChantStats deployment server needs to be defined by the user
CHANTSTATS_DEPLOYMENT_SERVER ?=

# User to be used for the initial provisioning of the deployment server
# (this needs to be a user with sudo rights)
CHANTSTATS_PROVISIONING_USER ?= root

ANSIBLE_CMD ?= pipenv run ansible-playbook

all:

provision:
	$(ANSIBLE_CMD) $(ANSIBLE_OPTIONS) -i $(CHANTSTATS_DEPLOYMENT_SERVER), --user $(CHANTSTATS_PROVISIONING_USER) deployment/provision.yml

deploy:
	$(ANSIBLE_CMD) $(ANSIBLE_OPTIONS) -i $(CHANTSTATS_DEPLOYMENT_SERVER), --user $(CHANTSTATS_PROVISIONING_USER) deployment/deploy.yml

provision-and-deploy:
	$(ANSIBLE_CMD) $(ANSIBLE_OPTIONS) -i $(CHANTSTATS_DEPLOYMENT_SERVER), --user $(CHANTSTATS_PROVISIONING_USER) deployment/provision_and_deploy.yml

.PHONY: all provision deploy provision-and-deploy
