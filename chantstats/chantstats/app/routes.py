import music21
import os
from flask import render_template
from . import app
from ..io import load_sample_file

HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE_DATA_DIR = os.path.join(HERE, '..', 'sample_data')


@app.route("/")
def index():
    filename = '01_Salus_eterna.xml'
    s = load_sample_file(filename)
    num_measures = len(s.parts[0].getElementsByClass(music21.stream.Measure))
    return render_template('index.html', filename=os.path.basename(filename), num_measures=num_measures)
