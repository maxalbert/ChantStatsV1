PYTEST_CMD ?= pipenv run pytest
PYTEST_OPTIONS ?= -svx

all: test

test: acceptance-tests

acceptance-tests:
	$(PYTEST_CMD) $(PYTEST_OPTIONS) tests/acceptance_tests/

.PHONY: all test acceptance_tests
