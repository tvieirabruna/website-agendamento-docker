<img src="https://github.com/tvieirabruna/docker-project/blob/main/readme-website.gif" alt="Alt Text" width="1200">

# :globe_with_meridians: Website de agendamento - HTML | CSS | Javascript | Node | MySQL | Docker
Website de marcação de aulas dos alunos da academia de Kung Fu Garra de Águia Lily Lau Brasil.

### ⚙️ Ajustes e melhorias
O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:
- [ ] Desabilitar a autenticação no MySQL por senha vazia para uma segurança mais robusta;
- [ ] Conta de usuário para cada aluno;
- [ ] Possibilidade de reagendamento e exclusão das aulas;
- [ ] Disparo de e-mail para o instrutor a cada alteração feita na aula por um aluno.

## 💻 Pré-requisitos
- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop/)
  
Este repositório contém os arquivos necessários para fazer o deploy do NGINX, Node e MySQL utilizando o [Docker](https://www.docker.com/products/docker-desktop/). Com o [Git](https://git-scm.com/downloads) já instalado, clone o repositório no caminho onde deseja instalar o projeto. Para isso, rode o seguinte comando:

```
git clone https://github.com/tvieirabruna/website-agendamento-docker
```

Abra sua IDE de preferência (exemplos: Visual Studio Code, Eclipse, IntelliJ) e, no terminal, mude o caminho para o mesmo endereço do projeto. Com o [Docker](https://www.docker.com/products/docker-desktop/) já instalado, rode o seguinte comando:

 ```
 $ docker-compose up
```

## :globe_with_meridians: Usando o Website de Agendamento
Para acessar o Website, abra o seu navegador e, na barra de endereço, digite:

```
localhost:80
```

## :bar_chart: Banco de dados (MySQL)
O banco de dados consiste de duas tabelas, uma nomeada students e outra classes. A tabela students, no momento, armazena apenas o id nome dos alunos, mas pode ser expandida para armazenar a cor da faixa, informações cadastrais, se é um aluno ativo ou inativo, por exemplo. A tabela classes tem como colunas o nome dos alunos e os horários de cada aula. 

## :rocket: Tecnologias usadas
 - Frontend:
     - ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
     - ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
     - ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
    
- Backend:
     - ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
     - ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

- Banco de dados:
     - ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
       
- DevOps:
     - ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
     - ![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
       
## :books: Compartilhamento das imagens no Docker Hub
- Para acessar as imagens utilizadas no projeto, basta acessar o link no [Docker Hub](https://hub.docker.com/repository/docker/tvieirabruna/adatech-project-kungfu-classroom-website/general).

## :scroll: Licença
Este projeto está licenciado sob a licença [MIT](https://github.com/tvieirabruna/website-agendamento-docker/blob/main/LICENSE).
