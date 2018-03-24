PYTEST_CMD ?= pipenv run pytest
PYTEST_OPTIONS ?= -svx

all: test

test: acceptance-tests

acceptance-tests:
	$(PYTEST_CMD) $(PYTEST_OPTIONS) tests/acceptance_tests/

build-docker-image:
	docker build -t maxalbert/chantstats:frontend .

.PHONY: all test acceptance_tests build-docker-image
