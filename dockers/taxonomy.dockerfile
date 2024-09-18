FROM webgme/taxonomy:nightly
ARG udcpoption=default
COPY ./config/config.taxonomy.${udcpoption}.js /webgme-taxonomy/config/config.default.js
