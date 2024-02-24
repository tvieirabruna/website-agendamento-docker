FROM mysql:5.7

COPY schema.sql /docker-entrypoint-initdb.d/

# Allow empty password for MySQL root user
ENV MYSQL_ALLOW_EMPTY_PASSWORD=true

EXPOSE 3306

VOLUME ["/backup/"]