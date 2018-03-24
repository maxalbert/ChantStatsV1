PYTEST_CMD ?= pipenv run pytest
PYTEST_OPTIONS ?= -svx

all: test

test: unit-tests acceptance-tests

unit-tests:
	$(PYTEST_CMD) $(PYTEST_OPTIONS) tests/unit_tests/

acceptance-tests:
	$(PYTEST_CMD) $(PYTEST_OPTIONS) tests/acceptance_tests/

build-docker-image:
	docker build -t maxalbert/chantstats:frontend .

.PHONY: all test unit-tests acceptance_tests build-docker-image
