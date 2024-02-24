<img src="https://github.com/tvieirabruna/docker-project/blob/main/readme-website-gif.gif" alt="Alt Text" width="1200">

# Site de agendamento - HTML | CSS | Javascript | Node | MySQL | Docker

## Instalação com Docker-Compose
Este repositório contém os arquivos necessários para fazer o deploy do NGINX, Node e MySQL utilizando o Docker. Caso já tenha o Docker instalado, rode o seguinte comando:

 ```
 $ docker-compose up
```

## Compartilhamento das imagens no Docker Hub
- [Imagen NGINX](https://hub.docker.com/repository/docker/tvieirabruna/nginx-image-kungfu-classroom/general)
- [Imagem Node](https://hub.docker.com/repository/docker/tvieirabruna/kungfu-classroom-node/general)
- [Imagem MySQL](https://hub.docker.com/repository/docker/tvieirabruna/kungfu-classroom-mysql/general)

## Construção de cada imagem
### MySQL
A imagem oficial do MySQL de versão 5.7 é a imagem base. O arquivo de configuração do banco de dados do MySQL nomeado schema.sql é copiado para dentro da pasta de entrypoint /docker-entrypoint-initdb.d/, construindo o banco de dados com a inicialização da imagem. A porta 330 é exposta e a pasta /backup/ é definida como o volume.

### Node
A imagem oficial do Node é a imagem base. O diretório de trabalho é definido como o /src. Os arquivos que se iniciam com package são copiados para dentro de /src. São instaladas as dependências do node, MySQL, Express e CORS. Todos os arquivos restantes são também copiados. A porta 3000 é exposta e o Node e o arquivo server.js são executados ao fazer o deploy do container - entrypoint.
  
### NGINX
A imagem oficial do NGINX é a imagem base. O arquivo de configuração index.html assim como as pastas css, js e images são copiadas para dentro da pasta /usr/share/nginx/html/. A porta 80 é exposta.
  
## Banco de dados (MySQL)
O banco de dados consiste de duas tabelas, uma nomeada students e outra classes. A tabela students, no momento, apenas armazena o nome dos alunos, mas pode ser expandida para armazenar a cor da faixa, informações cadastrais, se é um aluno ativo ou inativo, por exemplo. A tabela classes tem como colunas o nome dos alunos e os horários de cada aula. 


