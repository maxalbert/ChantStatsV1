import music21
import os
from .context import chantstats
from chantstats.io import load_musicxml_file

HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE_DATA_DIR = os.path.join(HERE, '..', '..', 'sample_data')


def test_load_musicxml_file():
    filename = os.path.join(SAMPLE_DATA_DIR, '01_Salus_eterna.xml')
    chant = load_musicxml_file(filename)

    assert isinstance(chant, music21.stream.Stream)
