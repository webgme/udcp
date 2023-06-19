FROM webgme/taxonomy:main
ARG udcpoption=default
COPY ./config/config.taxonomy.${udcpoption}.js /webgme-taxonomy/config/config.default.js
