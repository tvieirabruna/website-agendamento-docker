# Use a imagem oficial do Node como a imagem base
FROM node

# Defina o diretório de trabalho como a pasta /src
WORKDIR /src

# Copie todos os arquivos json que iniciam com "package" para dentro do diretório
COPY package*.json .

# Instale as dependências listadas em package.json, assim como o MySQL, o express e o CORS.
RUN npm install mysql express cors

# Copie todos os arquivos da pasta local para o diretório de trabalho.
COPY . .

# Exponha a porta 3000.
EXPOSE 3000

# Inicialize o container com o Node e rode o arquivo server.js.
ENTRYPOINT ["node", "server.js"]