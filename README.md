# Clone Sigaa

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Objetivos
- Demonstrar o uso do Framework Angular e tecnologias web na criação de um clone da interface do [Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA)](https://sigaa.ufopa.edu.br/sigaa/verTelaLogin.do);
- Integrar a interface do usuário com a [API](https://aws.amazon.com/pt/what-is/api/) onde serão gerenciados os dados e gerados os [endpoints](https://www.dio.me/articles/o-que-sao-endpoints-e-rotas-de-uma-api) para serem consumidos.

### Observações
- A versão atual do projeto está utilizano o [JSON server](https://www.npmjs.com/package/json-server) para que as funcionalidades do mesmo sejam testadas enquanto não há disponibilidade da versão final da [API](https://aws.amazon.com/pt/what-is/api/)

## Executar projeto
1. Instalar dependências -> `npm install`
2. Rodar interface -> `ng serve`
3. Rodar JSON server (Dados mokados) -> `json-server --watch db.json`
