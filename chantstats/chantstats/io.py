import music21
import os

HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE_DATA_DIR = os.path.join(HERE, '..', 'sample_data')


def load_musicxml_file(filename):
    """
    Load MusicXML file and return its representation music21 Stream.

    Parameters
    ----------
    filename: str
        Filename of the MusicXML

    Returns
    -------
    music21.stream.Stream
    """
    if not os.path.exists(filename):
        raise IOError("File does not exist: '{}'".format(filename))
    return music21.converter.parse(filename)


def load_sample_file(filename):
    """
    Load MusicXML file from the 'sample_data' folder.

    Parameters
    ----------
    filename: str
        Filename of the MusicXML file. This should not contain any directory components.

    Returns
    -------
    music21.stream.Stream
    """
    return load_musicxml_file(os.path.join(SAMPLE_DATA_DIR, filename))
