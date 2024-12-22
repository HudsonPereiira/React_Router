Códigos desenvolvidos durante as aulas de React Router, na plataforma Udemy, com o professor Matheus Batistti. 
Depois de tudo pronto, precebi que após fazer uma busca no front end, ele não me devolvia os itens com os parâmetros buscados, mas todos os itens do BD.
Refiz o código umas três vezes, sem sucesso.
Então comparei visualmente, todo meu código com o cógigo do professor e vi que estavam exatamente iguais, porém ainda assim, não funcionava.
Po fim, busquei ajuda com amigos desenvolvedores e descobri que o problema estava na versão do json-server. Vez que, minha versão era o 1.0 beta e o servidor só funcina bem com a versão 0.17.0. 
No entanto, por mais que eu tivesse instalado a versão 0.17.0 globalmente, ainda não funcionava. 
Funcionou, apenas quando desinstalei a versão global e instalei locamente, na pasta do projeto, a versão 0.17.0. 

