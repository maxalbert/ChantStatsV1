FROM python:3.6.4-alpine3.7

RUN apk update && apk add bash

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
RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    cd /pkg/chantstats/chantstats/static && \
    npm install && \
    npm run build

#
# Run chantstats app
#
EXPOSE 80
ENTRYPOINT ["pipenv"]
CMD ["run", "gunicorn", "--bind", "0.0.0.0:80", "chantstats:app"]
