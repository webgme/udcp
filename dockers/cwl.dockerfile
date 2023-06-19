FROM webgme/cwl:latest
ARG udcpoption=default

COPY ./config/config.cwl.${udcpoption}.js /usr/app/config/config.default.js