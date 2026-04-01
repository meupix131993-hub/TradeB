import React from 'react'
import { isAuthenticated } from '../utils/auth'

type PrivateRouteProps = {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  if (!isAuthenticated()) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)',
          color: '#fff',
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 420,
            width: '100%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Acesso negado</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
            Você precisa fazer login para acessar esta área.
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
