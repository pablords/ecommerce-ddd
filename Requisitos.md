
# Eccomerce

## Products Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| price           | `number` |
| categoryId      | `uuidv4` |
| name            | `string` |
| description     | `string` |
| createdAt        | `Date`   |

- deve criar e editar um produto

## Categories Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| productId       | `uuidv4` |
| name            | `string` |
| description     | `string` |
| createdAt        | `Date`   |

- deve criar e editar uma categoria


## Address Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| number          | `number` |
| district        | `string` |
| complement      | `string` |
| city            | `string` |
| uf              | `string` |
| country         | `string` |
| zipCode         | `number` |
| createdAt        | `Date`   |

- deve criar e editar um endereço

## Client Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| addressId       | `uuidv4` |
| name            | `string` |
| document        | `string` |
| age             | `Date`   |
| createdAt        | `Date`   |

- deve criar e editar um cliente

## Shippings Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| addressId       | `uuidv4` |
| cost            | `number` |
| description     | `string` |
| createdAt       | `Date`   |

- deve criar e editar um envio

## Orders Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| items           | `uuidv4[]`|
| paymentId       | `uuidv4` |
| shippingId      | `uuidv4` |
| description     | `string` |
| createdAt        | `Date`   |

- deve criar e editar um pedido


## Items Domain

| Atributo        | Tipo     |
| --------------- | -------- |
| id              | `uuidv4` |
| orderId         | `uuidv4` |
| productId       | `uuidv4` |
| amount          | `number` |
| createdAt       | `Date`   |

- deve criar e editar um item