# Use a imagem oficial do Nginx como a imagem base
FROM nginx:latest

# Copie o arquivo de configuração personalizado para dentro do container
COPY index.html /usr/share/nginx/html/index.html

# Copie a pasta de configuração personalizada do CSS para dentro do container
COPY css /usr/share/nginx/html/css

# Copie a pasta de configuração personalizada do JavaScript para dentro do container
COPY js /usr/share/nginx/html/js

# Copie a pasta de imagens para dentro do container
COPY images /usr/share/nginx/html/images

# Exponha a porta 80 para permitir o acesso ao servidor web
EXPOSE 80