PYTEST ?= pytest
PYTEST_OPTIONS ?= -svx


all: test

test: acceptance-tests

acceptance-tests:
	$(PYTEST) $(PYTEST_OPTIONS) tests/acceptance_tests/

.PHONY: all test acceptance_tests
