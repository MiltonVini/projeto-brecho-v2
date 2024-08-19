### Projeto Brechó

# RFs

[x] - Deve ser possível se cadastrar
[] - Deve ser possível se autenticar
[x] - Deve ser possível cadastrar um produto
[] - Deve ser possível atualizar o cadastro de um produto
[] - Dever ser possível excluir um produto
[x] - Deve ser possível marcar um produto como vendido - Verificar melhorias
[] - Deve ser agendar uma entrega
[] - Deve ser possível visualizar todas as entregas
[] - Deve ser possível cadastrar um cliente
[x] - Deve ser possível cadastrar uma sacolinha (Produtos que foram comprados por clientes) - Verificar melhorias
[] - Deve ser possível identificar produtos vendidos

# RNF

[] - O usuário deve ser autenticado por um JWT (Json Web Token)
[] - O usuário apenas tem acesso aos produtos de sua loja
[] - Não deve ser possível criar um produto com a mesma descrição
[] - Não deve ser possível adicionar o mesmo produto em duas sacolas

# RG

[x] - Um produto pode ter estoque único, como pode ser um produto com multiplas unidades
[x] - Um produto cadastrado como estoque multiplo deve ser obrigatório informar um valor de estoque
[] - Um produto adicionado a uma sacolinha precisa ter uma transação de venda
[] - Um produto de estoque único não pode estar em mais de uma sacola

