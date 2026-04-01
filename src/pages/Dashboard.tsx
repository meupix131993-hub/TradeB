import React from 'react'
import { logout } from '../utils/auth'

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)',
        color: '#fff',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: 40,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 28,
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#94a3b8',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 1.2,
              }}
            >
              Painel administrativo
            </p>

            <h1
              style={{
                margin: '8px 0 0',
                fontSize: 40,
                fontWeight: 800,
              }}
            >
              Dashboard TradeB
            </h1>
          </div>

          <button
            onClick={logout}
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: '#fff',
              padding: '12px 18px',
              borderRadius: 12,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(239,68,68,0.20)',
            }}
          >
            Sair
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 18,
          }}
        >
          <Card title="Usuário" value="Administrador" />
          <Card title="API" value="Conectada" />
          <Card title="Ambiente" value="Produção" />
          <Card title="Status" value="Online" />
        </div>
      </div>
    </div>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#94a3b8',
          marginBottom: 10,
          fontSize: 14,
        }}
      >
        {title}
      </p>

      <h3
        style={{
          margin: 0,
          fontSize: 26,
          fontWeight: 800,
        }}
      >
        {value}
      </h3>
    </div>
  )
}
