Ponto: uma posição no espaço
A exibição acontece conforme a intensidade (RGB)
Quarto byte é o alpha comumente utilizado para transparência
Plano Cartesiano
Figuras geométricas elementares
Visualiação: cópia, transformações, identificar sobreposição
Renderização: 
Representação matricial
Representação vetorial
Estruturas básicas: Pontos, linhas, curvas
Polígonos

Vetor é uma entidade geométrica definida por uma direção e um deslocamento. Diferente dos pontos, não está relacionado com uma posição fixa no espaço. Ele expressa a magnitude ou módulo (tamanho), a direçao (declividade) e o sentido do deslocamento (indicado por uma seta).Pode ser definido por dois pontos, uma origem e uma extremidade

Identificar colisões

Renderização
Primeiro cria a tela (cena) e depois todos os objetos

O quanto queremos entregar de realismo

OpenGL
GL (Graphics Library): primitivas geométricas e gráficas pelo controle de atributos
GLU (Graphics Utility Library): funções para criação de objetos mais complexos
GLUT (GL Utility Toolkit): funções para comunicação com sistema de janelas (eventos)

cada primitiva é formada por agrupamentos de vértices

Modelos + Equações + Algoritmo = Imagem

Viés em performance, buscando usar formas simples para composição e elementos complexos. com 

Três canais de cor (R, G, B)

Pontos -> Poligono -> Malha (mesh)

Low poly, High poly

Três grandes áreas: Computação Gráfica (síntese de imagens) (dados geram imagens), Processamento de Imagens (imagens geram imagens) e Visão Computacional (imagens geram dados)

Para alterar o brilho da imagem multiplica cada elemento de cor pelo valor desejado

Visualização 2D
 -> Modelo (estrutura de dados) -> Visualização 2D -> Imagem 
 -> Instanciamento, Recorte e Mapeamento

Representação: matricial ou vetorial (menor custo de armazenamento)

Dispositivos: quanto a finalidade dispositivos de entrada e saída e quanto ao formato dos dados dispositivos matriciais ou vetoriais

Processamento de IMG: aquisição -> processamento <- armazenamento -> saída 
-> aquisição
-> filtragem e realce
-> restauração
-> compressão
-> processo morfológico
-> segmentação
-> representação e descrição
-> reconhecimento de objetos

Filtros: melhorar a imagem (de vários pontos de vista), através da
-> ampliação do contraste
-> eliminação de padrões periódicos ou aleatórios
-> melhora no foco e acentuação de características

kernel/template/mascara

A imagem monocromática é uma função bidimensional contínua f(x,y), na qual x e y são coordenadas espaciais e o valor de f em qualquer ponto(x,y) é proporcional a intensidade luminosa do ponto

Histograma traduz uma imagem de forma estatistica em relação a intensidade de seus pontos

PCI: melhorar imagens na visão do usuario e criar algoritimos que imitem a visão humana para automatizar processos como classificação, reconhecimento e segmentação de imagens

Amostragem corresponde a escolha de um conjunto de pontos dentro de um espaço real que irão compor as imagens digitais
Quantização corresponde ao processo de atribuição de valores discretos para um sinal cuja amplitude varia entre valores finitos

## COMPUTAÇÃO GRÁFICA
"A computação gráfica é o ramo da ciência da computação que aplica tecnologias computacionais à produção e manipulação de representações visuais." 
"A imagem digital é uma representação visual de uma imagem em uma região discreta, limitada através de um conjunto finito de valores inteiros que representam cada um dos seus pontos. O conteúdo destes pontos, também conhecidos por pixel (picture element), pode ser binário, monocromático ou colorido, conforme a necessidade da representação. Em uma imagem binária cada pixel tem apenas um bit, podendo estar ligado ou desligado. A monocromática contém 1 byte (8 bits), podendo representar 256 (2^8) tons de cinza. Uma imagem colorida é tipicamente representada por 4 bytes por pixel, cada qual usando as cores vermelho, verde e azul (RGB). Um byte quantifica a contribuição de cada um dos três componentes de cor naquele pixel, o quarto byte é utilizado na maioria das vezes para opacidade (transparência), podendo também ser utilizado para outros efeitos e filtros."Uma imagem pode ser unidimensional, bidimensional ou tridimensional."
Neste artigo abordaremos principalmente imagens bidimensionais, seu processo de modelagem geométrica e sintese de Imagens. Ao final falaremos brevemente sobre 3D.

"Também podem ser vetoriais ou matriciais quanto à forma de descrição." A forma mais comum de representar uma imagem é por meio de uma matriz de pixels. Essa representação é conhecida como raster
A computação

**Modelagem Geométrica e Sintese de Imagens**
A modelagem geométrica
Na computação gráfica, é essencial poder movimentar e deformar objetos. Para isso, existem três transformações geométricas primitivas que podem ser combinadas para se obter o comportamento de um objeto: Translação, Escalonamento e111 Rotação.

**Transformações Geométricas**
Translação: move o objeto sem alterar a forma/tamanho
Escala: aumentar/reduzir o tamanho de forma uniforme (proporcional em relação a horizontal e vertical) e não uniforme (permitindo alongamentos e achatamentos)
Rotação: altera a orientação a partir da indicação de um angulo de rotação e um sentido (horário ou anti-horario). O valor do angulo determina o sentido. Se o ponto de rotação do objeto não estiver definido na origem do plano de coordenadas, é feito uma translação levando o objeto para o ponto de origem antes da rotação e após a rotação uma nova translação devolvendo o objeto na sua posição anterior.

Conjunto de equações e operações entre matrizes, com uma matriz que condensa todos os objetos permitindo realizar transformações em todos de uma vez. condensa n vértices de um objeto permitindo a transformação entre eles.

