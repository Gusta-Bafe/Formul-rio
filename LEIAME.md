********************
PROBLEMAS PRINCIPAIS
********************

###  npm express mysql e mysql2 
Primeiro comecei com a instalação das dependencias exenciais, tirando um certo padrão na ordem essa foi a parte mais simples.

### npm install -g nodemon
Confesso que fiquei preocupado quando tive problemas com a instalação do NODEMON.
Ele deu probelmas com algumas restrições de segurança feitas pelo Power Shel, para resolver eu poderia liberar as restrições com o comando:
Set-ExecutionPolicy Unrestricted.
Como não conheço muito sobre a importância dessas liberações resolvi não usar o *nodemon* no projeto, quem sabe não ultilize em um outro projeto futuro.

### Portas
Foi de longe o problema mais chato que tive que passar, e pra falar a vdd nem sei se resolvi da melhor maneira mas no fim funciou. Comecei usando a porta *8080* o erro informava um problema na ultilização dessa porta (Provavelmente alguma aplicação no meu sistema local já estava usando essa porta) depois de muito tempo quebrando a cabeça e pesquisar bastante resolvi o problema simplismente trocando a porta até dar certo. Tentei as portas *3000,3005,3001* Até que a *4000* foi, ainda vou dar uma pesquisada melhor para entender esse erro. Vi que tem um comando linux que permite o delete da operação que está usando essa porta, mas como estou desenvolvendo em ambiente Windows não pude abusar desse recurso.

PS: Depois de muito quebrar cabeça, descobri que ficaram alguns terminais abertos e depois que foram iniciados eles acabam por dar esse erro se eu não terminar o processo deles. Então qualquer porta funciona.

Tive também alguns problemas mais simples de conexão com o BD como eu querer colocar dados em colunas que eu não tinha criado e problemas comuns de conexão. A que foi mais dificil de fazer de longe foi a integração do html com o node.js, primeiro que tiver que fazer o CSS imbutido no cabeçalho, quebrei a a cabeça uma cota para fazer com que o servidor achasse o caminho da folha de estilo vi diversos materiais em video, entrei em diversos sites e documentações. Infelizmente não consegui resolver esse problema e como já fiquei extremamente satisfeito de conectar o banco com o node eu me dei por satisfeito nesse projeto. Muito em breve vou fazer outro com mais experiência e resolverei esses bugs.

