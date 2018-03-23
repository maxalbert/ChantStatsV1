import os
from selenium import webdriver
from selenium.common.exceptions import SessionNotCreatedException

PORT = os.environ.get('CHANTSTATS_PORT', 5000)


class TestSmokeTest:

    def setup_class(self):
        try:
            self.browser = webdriver.Firefox()
        except:
            self.browser = webdriver.Chrome()

    def teardown_class(self):
        self.browser.quit()

    def test_smoke_test(self):
        self.browser.get('http://localhost:{port}'.format(port=PORT))
        assert "ChantStats" in self.browser.title
