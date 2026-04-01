import React, { useEffect, useState } from 'react'
import { API_URL } from './config'

type HealthResponse = {
  status: string
}

export default function App() {
  const [apiStatus, setApiStatus] = useState('carregando...')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadHealth() {
      try {
        const response = await fetch(`${API_URL}/health`)
        const data: HealthResponse = await response.json()
        setApiStatus(data.status)
      } catch (error) {
        setApiStatus('erro ao conectar')
      } finally {
        setLoading(false)
      }
    }

    loadHealth()
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)',
        color: '#f8fafc',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: 40,
      }}
    >
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>TradeB</h1>
      <p style={{ fontSize: 18, color: '#cbd5e1', marginBottom: 32 }}>
        Frontend online com backend conectado
      </p>

      <div
        style={{
          maxWidth: 500,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: 24,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Status da API</h2>

        <p style={{ fontSize: 18 }}>
          {loading ? 'Verificando conexão...' : `Backend: ${apiStatus}`}
        </p>

        <p style={{ color: '#94a3b8', marginBottom: 0 }}>
          URL: {API_URL}
        </p>
      </div>
    </div>
  )
}
