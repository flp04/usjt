## PROGRAMAÇÃO ORIENTADA A OBJETOS
Orientação a objetos é um paradigma de programação baseado no conceito de objetos que contém atributos e métodos.



**Paradigma de programação**
Um paradigma de programação é o conjunto de caracteristicas que definem como a linguagem de programação funciona e resolve os problemas. São frequentemente diferenciados pelo que as técnicas permitem ou proíbem, com o intuito de construir um código legível e organizado, afim de aumentar a produtividade do desenvolvedor.

**Programação imperativa**

**Progrmação declarativa**

**Programação estruturada**

**Programação Procedural**
É um paradigma de programação que se baseia em procedimentos que são executados em sequência.

**Vantagens**
As principais vantagens da POO é a divisão de responsabilidades entre os objetos, possibilitando encapsular as lógicas de negócio e permitindo o reaproveitamento do código.

**Quatro Pilares**
*Abstração*
Refere-se ao princípio de considerar na modelagem do (dos dados?) software apenas as características essênciais que serão utilizadas para a resolução do problema em relação aos objetos do mundo real.
Por exemplo, um algoritmo para verificar se uma pessoa é ou não maior de idade, ainda que a pessoa tenha varios atributos, poderíamos considerar somente a idade desta pessoa para solucionarmos a questão.

public class Main
{
    public static class Pessoa {
        int idade;
        
        public boolean maiorIdade() {
            return this.idade >= 18 ? true : false;
        } 
    }
	public static void main(String[] args) {
	    Pessoa joao = new Pessoa();
	    joao.idade = 18;
	    Pessoa maria = new Pessoa();
	    maria.idade = 17;
		System.out.println(joao.maiorIdade());
		System.out.println(maria.maiorIdade());
	}
}

*Encapsulamento*
A ação de ocultar atributos e métodos de um objeto comum em uma única classe. Permitindo acesso aos dados através de uma interface pública, protegendo os detalhes de implementação. Desta forma, além de promover segurança e modularidade, também proporciona a possibilidade de reutilização de código e garante numa manutenção futura a possibilidade de alterar a regra de negócio apenas onde ela estiver encapsulada ao invés de todo o sistema onde ela for aplicada.



*Herança*
Possibilita a organização de uma hierarquia entre classes, onde um objeto filho herde caracteristicas comuns de um objeto pai, promovendo novamente a reutilização de código.
*Polimorfismo*
Permite que objetos com métodos de mesmo nome implemente-os de formas diferentes, aumentando a flexibilidade do código.

**Classes, Objetos. Métodos, Atributos**
A palavra classe vem da taxonomia da biologia, onde todos os seres vivos de uma mesma classe tem uma série de atributos e métodos em comum, mas não são iguais, variando os valores de seus atributos e como realizam seus métodos. Atributos se referem a suas caracteristicas e métodos a seus comportamentos. Em POO cada entidade é um objeto com atributos e métodos específicos, atribuidos conforme a classe à qual pertencem.

*Classes*
*Objetos*
*Atributos*

*Métodos*

**Exemplos**

**Construtores**

**Referência de Instância: this, self**


**Relacionamento entre Objetos**
*Agregação*
*Associação*
*Composição*

**Boas práticas**