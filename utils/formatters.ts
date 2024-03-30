export function formatCurrency(amountInCents: number, withDecimals = true) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  const amount = formatter.format(amountInCents / 100)
  return withDecimals ? amount : amount.split('.')[0]
}
