FROM node

WORKDIR /src

COPY package*.json .

RUN npm install mysql express cors

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]