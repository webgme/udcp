FROM git.isis.vanderbilt.edu:5050/meijerop/taxonomy-query:latest
ARG udcpoption=default
COPY ./config/taxonomy-query.${udcpoption}.txt /taxonomy-query/.env
