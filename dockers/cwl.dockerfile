FROM webgme/cwl:latest
ARG udcpoption=default
ENV LEAP_CLI=/usr/app/src/common/

COPY ./config/config.cwl.${udcpoption}.js /usr/app/config/config.default.js