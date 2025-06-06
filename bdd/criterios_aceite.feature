Funcionalidade: Transferência de valores entre correntistas

Cenário: Transferência bem-sucedida com saldo suficiente
Dado que o usuário está na tela de "Transferência de valores entre correntistas"
E que o saldo disponível na conta é R$ 200,00
Quando o usuário preenche o campo "Cliente destino" com "João da Silva"
E preenche o campo "Valor" com "R$ 150,00"
E preenche o campo "Data de efetivação" com a data atual (por exemplo, "05/06/2025")
E clica no botão "Transferir"
Então a transferência deve ser processada com sucesso
E o sistema deve exibir uma mensagem de confirmação de transferência (por exemplo, "Transferência realizada com sucesso!")
E o saldo na tela deve ser atualizado para R$ 50,00

Cenário: Tentativa de transferência com saldo insuficiente
Dado que o usuário está na tela de "Transferência de valores entre correntistas"
E que o saldo disponível na conta é R$ 200,00
Quando o usuário preenche o campo "Cliente destino" com "Maria Souza"
E preenche o campo "Valor" com "R$ 250,00"
E preenche o campo "Data de efetivação" com a data atual (por exemplo, "05/06/2025")
E clica no botão "Transferir"
Então a transferência não deve ser processada
E o sistema deve exibir uma mensagem de erro indicando saldo insuficiente (por exemplo, "Saldo insuficiente para realizar a transferência.")
E o saldo na tela deve permanecer R$ 200,00

Cenário: Cancelamento da transferência
Dado que o usuário está na tela de "Transferência de valores entre correntistas"
Quando o usuário preenche o campo "Cliente destino" com "Pedro Santos"
E preenche o campo "Valor" com "R$ 50,00"
E preenche o campo "Data de efetivação" com a data atual (por exemplo, "05/06/2025")
E clica no botão "Cancelar"
Então o sistema deve retornar para a tela anterior (ou tela inicial do aplicativo/site)
E os campos "Cliente destino", "Valor" e "Data de efetivação" devem ser limpos/redefinidos (se o cancelamento for da própria tela de transferência)

Cenário: Tentativa de transferência com campos obrigatórios vazios
Dado que o usuário está na tela de "Transferência de valores entre correntistas"
Quando o usuário deixa o campo "Cliente destino" vazio
E preenche o campo "Valor" com "R$ 100,00"
E preenche o campo "Data de efetivação" com a data atual (por exemplo, "05/06/2025")
E clica no botão "Transferir"
Então a transferência não deve ser processada
E o sistema deve exibir uma mensagem de erro indicando que o campo "Cliente destino" é obrigatório (por exemplo, "Por favor, preencha o campo Cliente destino.")

Cenário: Validação de formato de valor
Dado que o usuário está na tela de "Transferência de valores entre correntistas"
Quando o usuário preenche o campo "Cliente destino" com "Ana Paula"
E preenche o campo "Valor" com "cem reais" (formato inválido)
E preenche o campo "Data de efetivação" com a data atual (por exemplo, "05/06/2025")
E clica no botão "Transferir"
Então a transferência não deve ser processada
E o sistema deve exibir uma mensagem de erro indicando formato de valor inválido (por exemplo, "Por favor, insira um valor numérico válido.")