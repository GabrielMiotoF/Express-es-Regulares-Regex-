Validação do Nome:

/^[A-Za-zÀ-ú\s]{1,100}$/ Essa expressão regular valida o campo de nome do formulário.

^: especifica que o padrão procurado deve estar no início da string.

[A-Za-zÀ-ú\s]: Define um conjunto de caracteres permitidos. Permitindo letras maiúsculas e minúsculas (de A a Z e de a a z), caracteres acentuados e espaços.

{1,100}:Especifica que o nome deve ter entre 1 e 100 caracteres.
$:  indica que a correspondência deve terminar no final da linha.

Funcionamento: Isso garante que o campo de nome contenha apenas letras e espaços, e que tenha entre 1 e 100 caracteres de comprimento.

Validação do Email:
Expressão Regular: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ Esta expressão regular valida o campo de email do formulário.

^: especifica que o padrão procurado deve estar no início da string.

[^\s@]+: Corresponde a um ou mais caracteres que não são espaços em branco ou "@", representando o nome de usuário.

[^\s@]+: Corresponde a um ou mais caracteres que não são espaços em branco ou "@", representando o nome do domínio (ex gmail).

[^\s@]+: Corresponde a um ou mais caracteres que não são espaços em branco ou "@", representando a extensão do domínio.

$:  indica que a correspondência deve terminar no final da linha.

Funcionamento: Isso valida se o campo de email contém um endereço de email válido, com um formato típico de "usuario@dominio.com".

Validação do Telefone:

Expressão Regular: ^\(\d{2}\) \d{4,5}-\d{4}$ Esta expressão regular valida o campo de telefone do formulário.

^: especifica que o padrão procurado deve estar no início da string.

\(\d{2}\): Corresponde a dois números entre parênteses, composto por dois dígitos numéricos.

\d{4,5}: Corresponde a um bloco de 4 ou 5 dígitos numéricos, representando a parte inicial do número do telefone.

-: Corresponde ao hífen que separa o número do telefone.

\d{4}: Corresponde a um bloco de 4 dígitos numéricos, representando os últimos dígitos do número do telefone.

$:  indica que a correspondência deve terminar no final da linha.

Funcionamento: Isso valida se o campo de telefone segue o formato típico brasileiro, como "(99) 99999-9999" ou "(99) 9999-9999".
