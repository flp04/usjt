## Teoria da Computação e Compiladores
A Teoria da Computação estuda as capacidades e limitações fundamentais dos computadores.

Um compilador transforma código de entrada (código fonte) em código de saída (interpretador, linguagem de maquina, executavel). Ele possuí um front-end (responsável por verificar os erros através da léxica (todas as palavras tem sentido e seus significados), sintatica (verifica a gramática) e semântica) e o backend (responsável pela otimização e geração do código de saída).
__________

Um compilador geralmente é dividido em duas partes principais:

Front-end: Esta parte do compilador lida com a análise do código fonte e a geração de uma representação intermediária, como uma árvore sintática ou uma forma intermédia. Ela executa as seguintes etapas:

Análise léxica: Identifica e classifica os diferentes tokens presentes no código fonte.
Análise sintática: Verifica a estrutura gramatical do código fonte para garantir que esteja de acordo com a gramática da linguagem.
Análise semântica: Verifica se as construções do código fonte têm significado semântico válido e realiza verificações adicionais para garantir a correção do código.
Back-end: Esta parte do compilador recebe a representação intermediária gerada pelo front-end e a traduz em código de saída eficiente para o hardware alvo. As principais responsabilidades do back-end incluem:

Otimização de código: Identifica e aplica transformações para melhorar o desempenho e/ou reduzir o tamanho do código gerado.
Geração de código: Converte a representação intermediária em código de máquina ou outra forma executável.
Essa divisão em front-end e back-end permite a modularização do processo de compilação, facilitando a implementação e manutenção do compilador. Além disso, a separação de responsabilidades entre as duas partes permite que diferentes back-ends sejam desenvolvidos para gerar código para diferentes arquiteturas de hardware, enquanto o front-end permanece inalterado.


**Algebra Elementar e a Teoria dos Conjuntos**
Conjuntos são coleções de elementos, podendo ser finitos ou infinitos, e não importando a ordem ou repetição de seus elementos. As operações entre conjuntos incluem união (todos os elementos), interseção (elementos presentes em ambos conjuntos), diferença (elementos no primeiro conjunto que não estão no segundo), produto cartesiano (pares ordenados de todos os elementos) e conjunto das partes (todos os subconjuntos possíveis).
Sequência é uma lista ordenada de objetos, onde a repetição e a ordem dos elementos são significativas, podendo ser finita ou infinita.
Uma função estabelece uma relação entre uma entrada e uma saída, garantindo que uma mesma entrada sempre produza a mesma saída. O conjunto de todas as possíveis entradas de uma função é chamado de domínio, e o conjunto de todas as possíveis saídas é chamado de imagem.
Uma relação é um conjunto de pares ordenados, onde o primeiro elemento é o domínio e o segundo elemento é a imagem. Se representarmos uma relação R como (a, b), isso indica que 'a' está relacionado com 'b' em R (aRb). Se a imagem de uma relação for igual ao domínio, ela é chamada de função. As funções podem ter propriedades como reflexividade (todo elemento do conjunto S está relacionado consigo mesmo), transitividade (se 'a' está relacionado com 'b' e 'b' está relacionado com 'c', então 'a' está relacionado com 'c'), simetria (se 'a' está relacionado com 'b', então 'b' está relacionado com 'a') e assimetria (se 'a' está relacionado com 'b', 'b' não está relacionado com 'a' a menos que 'a' seja igual a 'b').

**Linguagens formais**
Alfabeto é um conjunto de simbolos finitos e não vazio (em um automato representa todas as entradas possíveis)
String é uma sequência finita de símbolos de um determinado alfabeto, também conhecido como palavra ou cadeia. |string| representa o tamanho da string e o épsilon (ε) representa a string vazia. Prefixo e Sufixo representam, respectivamente, um grupo de caracteres no início ou no fim da string. Também é possível concatenar uma string (justaposição). A concatenação com uma string vazia é chamada relação identidade.
Linguagem é conjuntos de srings de um alfabeto. Uma linguagem é composta por todas as strings que podem ser geradas a partir de um alfabeto.

**Automatos**
Automato é uma máquina ou engenho composto de mecanismo que lhe imprime determinados movimentos. Na Teoria da Computação é uma máquina abstrata que muda de estado em resposta a uma entrada específica. Consiste em um conjunto finito de estados, um alfabeto de entrada, e uma função de transição que define a mudança de estados em resposta a cada entrada e um conjunto de aceitação que define se a entrada é aceita.