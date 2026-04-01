import React, { useState } from 'react'

export default function App() {
  const [active, setActive] = useState<'dashboard' | 'devices' | 'settings'>('dashboard')

  return (
    <div style={layout}>
      
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <h2 style={{ marginBottom: 30 }}>TradeB</h2>

        <MenuItem label="Dashboard" active={active === 'dashboard'} onClick={() => setActive('dashboard')} />
        <MenuItem label="Dispositivos" active={active === 'devices'} onClick={() => setActive('devices')} />
        <MenuItem label="Configurações" active={active === 'settings'} onClick={() => setActive('settings')} />
      </aside>

      {/* MAIN */}
      <main style={main}>

        {active === 'dashboard' && <Dashboard />}
        {active === 'devices' && <Devices />}
        {active === 'settings' && <Settings />}

      </main>
    </div>
  )
}

/* ================= COMPONENTES ================= */

function MenuItem({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        ...menuItem,
        background: active ? '#1e293b' : 'transparent',
        color: active ? '#fff' : '#94a3b8'
      }}
    >
      {label}
    </button>
  )
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard 🚀</h1>

      <div style={grid}>
        <Card title="Dispositivos" value="12" />
        <Card title="Online" value="8" />
        <Card title="Comandos" value="23" />
      </div>
    </div>
  )
}

function Devices() {
  return (
    <div>
      <h1>Dispositivos</h1>
      <p>Lista de dispositivos vai aparecer aqui.</p>
    </div>
  )
}

function Settings() {
  return (
    <div>
      <h1>Configurações</h1>
      <p>Ajustes do sistema.</p>
    </div>
  )
}

function Card({ title, value }: any) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p style={{ fontSize: 28 }}>{value}</p>
    </div>
  )
}

/* ================= ESTILOS ================= */

const layout: React.CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  background: '#0f172a',
  color: '#fff',
}

const sidebar: React.CSSProperties = {
  width: 220,
  background: '#020617',
  padding: 20,
  borderRight: '1px solid #1e293b',
}

const main: React.CSSProperties = {
  flex: 1,
  padding: 30,
}

const menuItem: React.CSSProperties = {
  width: '100%',
  padding: 12,
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  borderRadius: 10,
  marginBottom: 10,
  fontWeight: 600,
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: 20,
  marginTop: 20,
}

const card: React.CSSProperties = {
  background: '#020617',
  padding: 20,
  borderRadius: 12,
  border: '1px solid #1e293b',
}