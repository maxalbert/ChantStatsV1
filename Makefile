# The ChantStats deployment server needs to be defined by the user
CHANTSTATS_DEPLOYMENT_SERVER ?=

# User to be used for the initial provisioning of the deployment server
# (this needs to be a user with sudo rights)
CHANTSTATS_PROVISIONING_USER ?= root

ANSIBLE_CMD ?= pipenv run ansible-playbook
PYTEST_CMD ?= pipenv run pytest
PYTEST_OPTIONS ?= -svx


all: test

test: acceptance-tests

acceptance-tests:
	$(PYTEST_CMD) $(PYTEST_OPTIONS) tests/acceptance_tests/

provision:
	$(ANSIBLE_CMD) $(ANSIBLE_OPTIONS) -i $(CHANTSTATS_DEPLOYMENT_SERVER), --user $(CHANTSTATS_PROVISIONING_USER) deployment/provision.yml

.PHONY: all test acceptance_tests
