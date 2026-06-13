const { createClient } = supabase

const supabaseUrl = 'https://nhhgzvwxtxhzhrlstrqs.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGd6dnd4dHhoemhybHN0cnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTg0NDksImV4cCI6MjA5Njc5NDQ0OX0.o-pqJQdYqEmkDxAMGON3s6VdudDAXajhK74ZiKc7JCg'

const client = createClient(
  supabaseUrl,
  supabaseKey
)

export async function salvarCotacao(valor) {

  const { data, error } = await client
    .from('historico_cotacoes')
    .insert([
      {
        valor: Number(valor)
      }
    ])

  if (error) {
    console.error(error)
    return null
  }

  return data
}

export async function buscarHistorico() {

  const { data, error } = await client
    .from('historico_cotacoes')
    .select('*')
    .order('id', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
}