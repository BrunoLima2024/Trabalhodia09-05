* * *

Função `dataMaior`
------------------

Esta função valida duas datas e retorna a data que for maior.

Funcionamento:
--------------

Se as datas forem válidas, a função retornará a data que for maior entre as duas.

* * *

Função `intervaloData`
----------------------

Esta função calcula o intervalo de dias entre duas datas.

Funcionamento:
--------------

*   A primeira parte da função verifica se a primeira data é menor que a segunda. Se for verdadeiro, um erro será gerado e será impresso que está incorreto.
*   Se a primeira data for maior, a função começará a comparação de dias.
*   Primeiro, calcula a diferença em milissegundos entre as duas datas.
*   Em seguida, cria uma constante que representa os milissegundos de um único dia.
*   Depois, cria uma variável que dividirá a diferença em milissegundos pela quantidade de milissegundos que um único dia possui.
*   Retorna o intervalo em dias.

* * *

Função `dataAtual`
------------------

Esta função retorna a data atual no formato: hora:minuto - dia/mês/ano.

Funcionamento:
--------------

*   `getHours()`: Obtém as horas atuais e as transforma em string usando `toString()` e formatando com `padStart(2, '0')`.
*   `getMinutes()`: Obtém os minutos atuais e segue a mesma formatação de `getHours`.
*   `getDate()`: Obtém o dia atual e segue a mesma formatação de `getHours`.
*   `getMonth()`: Obtém o mês e adiciona 1 para corrigir a formatação, já que os meses começam em 0.
*   `getFullYear()`: Obtém o ano na formatação correta.
