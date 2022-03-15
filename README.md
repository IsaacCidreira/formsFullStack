# Projeto Fullstack Forms

O desafio em questão foi para front, porém quis mostrar meus conhecimentos e tecs dominadas.
Por não saber se a máquina que vai rodar o projeto teria docker ou possuiria o banco de dados que escolheria fiz o backend com dados mockados

# Tecnologias Usadas/Conceitos
1- SOLID, usei alguns conceitos do SOLID
2- Typescript
3- React
4- Node Express
5- Styled-Components
6- Themes

# Como iniciar o projeto ?

1- Precisa abrir as 2 pastas separadamente, instalar as dependências de ambas as pastas dando um yarn ou npm install.

![image](https://user-images.githubusercontent.com/80259818/158294669-9ee161c1-3006-4d6c-9ecb-8d3a4b72d9e9.png)

2- Precisa rodar o backend primeiramente, precisa ser nessa ordem, com o projeto do back aberto em seu terminal digite um yarn dev ou npm run dev

![image](https://user-images.githubusercontent.com/80259818/158294769-acff00e4-1435-4da3-8d36-c301d869b28d.png)

3- Apos o server startado 
![image](https://user-images.githubusercontent.com/80259818/158294837-e6548a8f-78e5-4763-bbca-eafa3972d51b.png)

4- start o front end, abra a outra pasta do projeto, o de front e digite o yarn start ou npm run start

ambos projetos precisaram estar assim em seus terminais, logo que o projeto do front iniciar abrirá no seu navegador sozinho > 

![image](https://user-images.githubusercontent.com/80259818/158294993-2f302fed-00ff-4df1-9764-ff5195168270.png)

# Geral do projeto
Busquei fazer um crud trazendo as tecs e conceitos mais atuais.
A primeira vez que entrar no projeto não haverá nada no banco de dados mockado, ou seja uma tela que fiz para quando não tiver nenhum produto irá aparecer, já nesse primeiro
momento o metodo get nas minhas requisições já está sendo ativado para a verificação:

![image](https://user-images.githubusercontent.com/80259818/158295225-04daa345-8a56-4adb-92ad-7f672112c6f8.png)

Ao clicar em comprar novo produto, será levado ao forms de compra e consequentemente ao metodo post
![image](https://user-images.githubusercontent.com/80259818/158295361-ada6e4d8-6f0d-4699-a864-6a177c5a9476.png)

O botão só ficará habilitado após selecionar as duas opções necessárias.

Após feito o pedido você será levado novamente a home que trará novos dados: 

![image](https://user-images.githubusercontent.com/80259818/158295521-8320df18-c989-439a-a60d-594340e92206.png)

Na home após a post ou quando tiver algo nos dados mockados, os pedidos irão aparecer, caso deseje excluir algum pedido só clicar em deletar que o mesmo será deletado


