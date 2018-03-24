import music21


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
    return music21.converter.parse(filename)
