// Get a free access key at https://web3forms.com (takes 10 seconds, no account needed)
// then paste it below to start receiving form submissions by email.
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export async function submitForm(data) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...data }),
  })

  const result = await res.json()
  if (!result.success) {
    throw new Error(result.message || 'Something went wrong. Please try again.')
  }
  return result
}
