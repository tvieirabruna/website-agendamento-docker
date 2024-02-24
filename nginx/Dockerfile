# Use a imagem oficial do Nginx como a imagem base
FROM nginx:latest

# Copie o arquivo de configuração personalizado para dentro do contêiner
COPY index.html /usr/share/nginx/html/index.html

# Copie a pasta de configuração personalizado do css para dentro do contêiner
COPY css /usr/share/nginx/html/css

# Copie a pasta de javascript para dentro do contêiner
COPY js /usr/share/nginx/html/js

# Copie a pasta de javascript para dentro do contêiner
COPY images /usr/share/nginx/html/images

# Exponha a porta 80 para permitir o acesso ao servidor web
EXPOSE 80