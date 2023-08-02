# Projeto de Login e Registro com localStorage

Este é um projeto simples que implementa um formulário de login e registro utilizando o recurso de localStorage do navegador. O objetivo é permitir que os usuários se registrem com um nome, email e senha, e depois façam o login usando essas credenciais.

![Logo do Meu Projeto]([https://exemplo.com/images/logo.png](https://i.imgur.com/i3Ib9RF.png))

### Página de Registro

Na página inicial, os usuários têm a opção de clicar no botão "Registrar" para serem redirecionados para a página de registro. Nessa página, eles devem preencher um formulário com as seguintes informações:

- Nome completo
- Email
- Senha

Ao clicar no botão de registro, as informações são armazenadas no localStorage do navegador. Cada novo registro é adicionado a uma lista de usuários cadastrados.

### Página de Login

Na página de login, os usuários podem inserir seu email e senha para fazer o login. Quando o botão de login é clicado, o código JavaScript faz a verificação das credenciais inseridas com as informações armazenadas no localStorage.

Se as credenciais estiverem corretas, uma mensagem de "Login bem-sucedido!" é exibida no console do navegador, juntamente com os dados do usuário válido (nome, email e senha).

Caso as credenciais sejam inválidas ou não existam nos registros, uma mensagem de "Credenciais inválidas. Tente novamente." é exibida.

## Como executar o projeto

Para executar o projeto, basta clonar este repositório e abrir o arquivo "index.html" em um navegador web. Certifique-se de que o navegador suporta a funcionalidade de localStorage.

## Observações

Este é um projeto educacional e não possui implementações avançadas de segurança. O objetivo é demonstrar o uso básico do localStorage para armazenar e recuperar dados no navegador.

Recomenda-se não utilizar este projeto em produção ou para fins de segurança crítica. Para implementações mais robustas de login e registro, é necessário adotar medidas de segurança adicionais, como criptografia das senhas e autenticação do lado do servidor.

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto! Caso tenha sugestões ou correções, abra uma issue ou envie um pull request.

Espero que este projeto seja útil para fins educacionais e para entender o básico de login e registro com localStorage.

Divirta-se!

