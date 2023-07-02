FROM webgme/cwl:latest
ARG udcpoption=default
ENV LEAP_CLI=/usr/app/src/common/

COPY ./config/config.cwl.${udcpoption}.js /usr/app/config/config.default.js
COPY ./config/pluginconfig.cwl.${udcpoption}.json /usr/app/src/common/pluginconfig.json
COPY ./config/application.cwl.${udcpoption}.yml /usr/app/OUTPUT/application.yml