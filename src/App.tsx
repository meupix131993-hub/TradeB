import React, { useEffect, useState } from 'react'
import { API_URL } from './config'
import { isAuthenticated } from './utils/auth'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'

type LoginResponse = {
  token?: string
  message?: string
}

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    const savedToken = localStorage.getItem('tradeb_token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setToken('')

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data: LoginResponse = await response.json()

      if (!response.ok) {
        setMessage(data.message || 'Erro ao fazer login')
        return
      }

      const receivedToken = data.token || ''
      localStorage.setItem('tradeb_token', receivedToken)
      setToken(receivedToken)
      setMessage('Login realizado com sucesso')
    } catch (error) {
      setMessage('Não foi possível conectar ao backend')
    } finally {
      setLoading(false)
    }
  }

  if (isAuthenticated() || token) {
    return (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        background:
          'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)',
        color: '#f8fafc',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 460,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            padding: 32,
            boxShadow: '0 20px 60px rgba(0,0,0,0.30)',
          }}
        >
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                margin: 0,
                color: '#94a3b8',
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
              }}
            >
              Plataforma
            </p>

            <h1
              style={{
                margin: '8px 0 10px',
                fontSize: 38,
                fontWeight: 800,
              }}
            >
              TradeB
            </h1>

            <p
              style={{
                margin: 0,
                color: '#cbd5e1',
                lineHeight: 1.6,
              }}
            >
              Entre no sistema para acessar o painel administrativo.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 18 }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 22 }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#fff',
                padding: '14px 18px',
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                boxShadow: '0 10px 25px rgba(59,130,246,0.28)',
              }}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: 18,
                padding: 14,
                borderRadius: 14,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#e2e8f0',
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 14,
  border: '1px solid rgba(255,255,255,0.10)',
  background: 'rgba(255,255,255,0.04)',
  color: '#fff',
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box',
}
