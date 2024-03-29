import os
from selenium import webdriver
try:
    import chromedriver_binary
except ImportError:
    # Chrome not installed
    pass

SERVER = os.environ.get('CHANTSTATS_SERVER', '127.0.0.1')
PORT = os.environ.get('CHANTSTATS_PORT', 5000)


class TestWalkingSkeleton:

    def setup_class(self):
        try:
            self.browser = webdriver.Firefox()
        except:
            self.browser = webdriver.Chrome()

    def teardown_class(self):
        self.browser.quit()

    def test_walking_skeleton(self):
        # Load ChantStats main page
        self.browser.get('http://{server}:{port}'.format(server=SERVER, port=PORT))
        page_title = self.browser.title
        page_body = self.browser.find_element_by_tag_name('body').text

        assert "ChantStats" in page_title
        assert "Piece '01_Salus_eterna.xml': 12 measures" in page_body
