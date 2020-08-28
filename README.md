
<h1>Desafio para construção de um sistema de temperaturas. </h1>

## Cenário:
Um comerciante deseja saber em tempo real a temperatura do seu frigorífico onde armazena produtos perecíveis.
Para isso ele necessita de um sistema web onde possa monitorar essa temperatura.

## Requisitos funcionais:

- A interface deve possuir um menu (pode ser lateral ou através do header);  
- A página inicial será acessada por http://localhost e deve mostrar uma mensagem de boas-vindas;  
- As opções do menu serão: temperatura atual, histórico de temperaturas, alarmes;  
- Cada menu deve possuir rotas próprias, ex: http://localhost/temperatura-atual;  
- O menu de temperatura atual, ao ser clicado, deve mostrar a temperatura e uma cor de status para indicar (verde
para ok, amarelo para alerta e vermelho para temperatura arriscada);  
- É necessário colocar um botão de atualizar a temperatura no menu de temperatura atual. Ao ser clicado, ele deve
buscar a nova temperatura;  
- O menu de histórico, ao ser clicado, deve mostrar uma coleção de temperaturas já coletadas, sendo os dados:
temperatura registrada, data (dd/MM/yyyy) que foi registrada a temperatura e o status (ok, alerta, arriscada);  
- O menu de alarmes, ao ser clicado, deve mostrar uma mensagem em vermelho contendo o seguinte: “Alerta de
temperatura! Valor de risco: x” onde x é a temperatura;  
- Os status são os seguintes: entre 20 e 25 graus: alerta, <= 20: ok, >= 25: arriscada  


## Requisitos não funcionais:

- O sistema deve conter três APIs: /temperatura-atual, /temperatura-historico, /temperatura-alarmes;  
- A modelagem do JSON retornado por essas APIs fica a cargo do candidato;  
- A interface do projeto deve ser desenvolvida utilizando ReactJS;
- Os dados do backend devem ser sempre buscados e atualizados ao dar refresh na página atual. Não pode perder a
rota atual (por exemplo, se eu tiver em localhost/temperatura-atual e dar F5, ele não pode voltar para localhost);  
- Os dados do backend devem ser mockados através de alguma ferramenta a escolha do candidato (recomendamos
o uso do Jsonplaceholder https://jsonplaceholder.typicode.com/);  
- Frameworks de UI/UX não são obrigatórios e ficam a escolha do candidato a implementação.  


### Instalando e executando aplicação frontend e backend

<a href='https://github.com/marcomonteirobrito/temperatura-nodejs-reactjs/tree/master/backend' target='_blank'>Backend</a>

<a href='https://github.com/marcomonteirobrito/temperatura-nodejs-reactjs/tree/master/frontend' target='_blank'>Frontend</a>


<h4>Dúvidas entre em contato pelo <a href="https://www.linkedin.com/in/marco-antonio-monteiro-de-brito-541ba0144/" target="_blank">Linkedin</a> </h4>

<h4 align="center"> <em>&lt;/&gt;</em> by <a href="https://github.com/marcomonteirobrito" target="_blank">marcomonteirobrito</a> </h4>