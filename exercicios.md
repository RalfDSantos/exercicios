1 - Escreva uma função que recebe 2 parâmetros: ```num1``` e ```num2``` e retorna a soma entre esses dois números.

Por exemplo:

```
soma(3, 4);
> 7
```

#

2 - Escreva uma função que recebe 2 parâmetros: ```dividendo``` e ```divisor``` e retorna o resultado inteiro da divisão.

Por exemplo:

```
divisao(7, 2);
> 3
```

#

3 - Escreva uma função que recebe 2 parâmetros: ```minuendo``` e ```subtraendo``` e retorna o resultado da subtração.<br>
* Caso algum parâmetro não seja fornecido, retornar ```"Impossível realizar a operação"```.

Por exemplo:

```
subtracao(5, 4);
> 1

subtracao(6);
> Impossível realizar a operação

subtracao();
> Impossível realizar a operação
```

#

4 - Escreva uma função que recebe 2 parâmetros: ```multiplicando``` e ```multiplicador``` e retorna o resultado inteiro da multiplicação.<br>
* Caso algum parâmetro não seja fornecido, retornar ```"Impossível realizar a operação"```.
* Se um ou ambos os parametros fornecidos não forem do tipo ```number```, retornar ```"A Operação é efetuada somente com valores do tipo number"```.

Por exemplo:

```
multiplicacao(3, 3);
> 9

multiplicacao(6);
> A Operação é efetuada somente com valores do tipo number

multiplicacao();
> A Operação é efetuada somente com valores do tipo number

multiplicacao(3, 3);
> 9

multiplicacao(6, null);
> A Operação é efetuada somente com valores do tipo number

multiplicacao("2", 5);
> A Operação é efetuada somente com valores do tipo number
```

#

5 - 'Escreva uma função que recebe 3 parâmetros: ```produto1```, ```operacao``` e ```produto2``` e retorna o resultado da operação desejada<br>
* Caso algum parâmetro não seja fornecido, retornar ```"Impossível realizar a operação"```.
* Se o parâmetro ```operacao``` for diferente das 4 operações existentes na matemática, retornar ```"Operador desconhecido. Use +, -, x ou ÷"```.

Por exemplo:

```
multiplicacao(3, 3);
> 9

multiplicacao(6);
> A Operação é efetuada somente com valores do tipo number

multiplicacao();
> A Operação é efetuada somente com valores do tipo number

multiplicacao(3, 3);
> 9

multiplicacao(6, null);
> A Operação é efetuada somente com valores do tipo number

multiplicacao("2", 5);
> A Operação é efetuada somente com valores do tipo number```'