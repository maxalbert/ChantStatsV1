import music21
import os
import pytest
from .context import chantstats
from chantstats.io import load_musicxml_file, load_sample_file

HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE_DATA_DIR = os.path.join(HERE, '..', '..', 'sample_data')


def test_load_musicxml_file():
    """
    Result of loading sample MusicXML file is a music21 stream
    """
    filename = os.path.join(SAMPLE_DATA_DIR, '01_Salus_eterna.xml')
    chant = load_musicxml_file(filename)
    notes = [n.nameWithOctave for n in chant.flat.notes]

    assert isinstance(chant, music21.stream.Stream)
    assert notes[:5] == ['B3', 'D4', 'E4', 'B3', 'G3']


def test_load_sample_file():
    """
    Result of loading sample MusicXML file is a music21 stream
    """
    chant = load_sample_file('01_Salus_eterna.xml')
    notes = [n.nameWithOctave for n in chant.flat.notes]

    assert isinstance(chant, music21.stream.Stream)
    assert notes[:5] == ['B3', 'D4', 'E4', 'B3', 'G3']


def test_load_musixml_file_raises_IOError_if_file_doesn_not_exist():
    with pytest.raises(IOError):
        load_musicxml_file('Foobar.xml')
