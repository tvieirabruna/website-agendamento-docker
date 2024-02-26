# Use a imagem oficial do MySQL versão 5.7 como a imagem base
FROM mysql:5.7

# Copie o arquivo de configuração da base de dados para dentro da pasta de inicialização da base de dados no Docker
COPY schema.sql /docker-entrypoint-initdb.d/

# Defina as variáveis de ambiente do usuário e senha do MySQL. Nesse caso, permita senhas vazias.
ENV MYSQL_ALLOW_EMPTY_PASSWORD=true

# Exponha a porta 3306
EXPOSE 3306

# Define a pasta backup como o volume do container
VOLUME ["/backup/"]