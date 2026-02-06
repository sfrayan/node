FROM alpine:3.20.3


# Init
RUN apk update && \
    apk add --no-cache nodejs npm curl

# Setup challenge user
RUN addgroup -S challenge && adduser -D -S challenge -G challenge
USER challenge
WORKDIR /app

# Setup challenge
COPY --chown=challenge:challenge ./src .
RUN npm i .

EXPOSE 8080

# Start
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
