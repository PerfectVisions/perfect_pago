# Exemplo

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
```

# Descubra mais em:
<p>
<a href="https://discord.gg/DqaZ58jWsh">
<img src="https://cdn.discordapp.com/attachments/1146741224074645534/1165399106412351508/image.png">
</a>
</p>