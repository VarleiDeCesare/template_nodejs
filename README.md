# Template de aplicação NodeJs

- A aplicação pré estabelece alguns requisitos que irá ser necessário para qualquer projeto.
    - Bibliotecas e frameworks necessários no package.json
    - Arquivo de configuração para o banco de dados "ormconfig.json".
    - Arquivo para o container do postgres no arquivo docker-compose.yml.
    - Migrations para usuários.
    - Rota para criação de um usuário.
    - Rota para listagem de usuários, precisando de autenticação JWT.
    - Middleware criado para a verificação de existência da autenticação.

