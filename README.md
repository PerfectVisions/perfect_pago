
<div align="center">
  <img src="./images/jupayments.png">
</div>

```js
import PerfectPago from 'perfectpago'
const MercadoPago = new PerfectPago({ accessToken: "your-access-token-here" })

// Pagamentos

MercadoPago.payments.create(options) // criar pagamentos
MercadoPago.payments.get(id) // obter pagamento
MercadoPago.payments.cancel(id) // cancelar pagamento
MercadoPago.payments.refund(id, amount) // reembolsar pagamento
MercadoPago.payments.payment_methods.get() // Obter todos os métodos de pagamentos.

// Clientes
MercadoPago.customers.create(options) // Criar cliente
MercadoPago.customers.get(id) // obter dados do cliente
MercadoPago.customers.fetch(email) // obter dados do cliente por email
MercadoPago.customers.update(id, options) // Atualizar dados do cliente

// Users

MercadoPago.users.create(options) // Criar usuário de testes
MercadoPago.users.stores.create(options) //criar loja
MercadoPago.users.stores.get(user_id) //obter loja de um usuário
MercadoPago.users.stores.update(user_id, options) //atualizar loja
MercadoPago.users.stores.fetch(user_id) //buscar lojas de um usuário
MercadoPago.users.stores.delete(id) //deletar loja por ID

// Oauth 2
MercadoPago.oauth.update(options) // cria e atualiza refresh tokens e tokens para usar OAuth.

// Lojas
MercadoPago.stores.create(options) //criar loja
MercadoPago.stores.get(user_id) //obter loja de um usuário
MercadoPago.stores.update(user_id, options) //atualizar loja
MercadoPago.stores.fetch(user_id) //buscar lojas de um usuário
MercadoPago.stores.delete(id) //deletar loja por ID
```

# Descubra mais em:
<p>
<a href="https://discord.gg/DqaZ58jWsh">
<img src="https://cdn.discordapp.com/attachments/1146741224074645534/1165399106412351508/image.png">
</a>
</p>