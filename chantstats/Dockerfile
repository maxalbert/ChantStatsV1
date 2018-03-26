FROM node:9.9-alpine

RUN apk add --update bash python3 && \
    ln -s /usr/bin/python3 /usr/local/bin/python && \
    ln -s /usr/bin/pip3 /usr/local/bin/pip

#
# Create pipenv environment
#
COPY Pipfile Pipfile.lock /pkg/
WORKDIR /pkg
RUN pip install pipenv
RUN pipenv install --three

#
# Install chantstats package into pipenv environment
#
COPY MANIFEST.in README.md setup.cfg setup.py versioneer.py /pkg/
COPY chantstats /pkg/chantstats
COPY sample_data /pkg/sample_data

# Build bundle.js
RUN cd /pkg/chantstats/static && \
    npm install && \
    npm run build

#
# Run chantstats app
#
EXPOSE 80
ENTRYPOINT ["pipenv"]
CMD ["run", "gunicorn", "--bind", "0.0.0.0:80", "chantstats:app"]
