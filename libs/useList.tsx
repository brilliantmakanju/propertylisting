export default async function ListProperty() {
    // const res = await fetch('/api/list', {cache: 'no-store'})
    const resp = await fetch('/api/list', { next: { revalidate:5  } })
    if(!resp.ok) throw new Error('Property is Empty')
    const res = await resp.json()
    return res.listing
  }