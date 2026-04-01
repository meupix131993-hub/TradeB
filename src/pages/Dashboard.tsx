import React, { useState } from 'react'
import { logout } from '../utils/auth'

type ModuleKey = 'overview' | 'users' | 'products' | 'orders' | 'settings'

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('overview')

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0b1220',
        color: '#f8fafc',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: 'flex',
      }}
    >
      <aside
        style={{
          width: 270,
          background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: 1.4,
              color: '#94a3b8',
            }}
          >
            Plataforma
          </p>

          <h1
            style={{
              margin: '8px 0 6px',
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            TradeB
          </h1>

          <p
            style={{
              margin: 0,
              color: '#94a3b8',
              lineHeight: 1.6,
              fontSize: 14,
            }}
          >
            Painel administrativo profissional.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 18,
            padding: 16,
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#94a3b8',
              fontSize: 13,
              marginBottom: 10,
            }}
          >
            Sessão atual
          </p>

          <strong style={{ display: 'block', marginBottom: 6 }}>
            Administrador
          </strong>

          <span style={{ color: '#22c55e', fontSize: 14 }}>● Online</span>
        </div>

        <nav style={{ display: 'grid', gap: 10 }}>
          <SidebarButton
            label="Visão geral"
            active={activeModule === 'overview'}
            onClick={() => setActiveModule('overview')}
          />
          <SidebarButton
            label="Usuários"
            active={activeModule === 'users'}
            onClick={() => setActiveModule('users')}
          />
          <SidebarButton
            label="Produtos"
            active={activeModule === 'products'}
            onClick={() => setActiveModule('products')}
          />
          <SidebarButton
            label="Pedidos"
            active={activeModule === 'orders'}
            onClick={() => setActiveModule('orders')}
          />
          <SidebarButton
            label="Configurações"
            active={activeModule === 'settings'}
            onClick={() => setActiveModule('settings')}
          />
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={logout}
            style={{
              width: '100%',
              border: 'none',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: '#fff',
              padding: '14px 18px',
              borderRadius: 14,
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(239,68,68,0.20)',
            }}
          >
            Sair do sistema
          </button>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          padding: 28,
          background:
            'radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 30%), #0b1220',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 24,
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: 1.4,
                fontSize: 12,
              }}
            >
              Dashboard enterprise
            </p>

            <h2
              style={{
                margin: '8px 0 0',
                fontSize: 34,
                fontWeight: 900,
              }}
            >
              {getModuleTitle(activeModule)}
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <TopBadge label="API online" value="OK" />
            <TopBadge label="Ambiente" value="Produção" />
          </div>
        </header>

        {activeModule === 'overview' && <OverviewModule />}
        {activeModule === 'users' && <UsersModule />}
        {activeModule === 'products' && <ProductsModule />}
        {activeModule === 'orders' && <OrdersModule />}
        {activeModule === 'settings' && <SettingsModule />}
      </main>
    </div>
  )
}

function SidebarButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        border: active
          ? '1px solid rgba(96,165,250,0.35)'
          : '1px solid rgba(255,255,255,0.06)',
        background: active
          ? 'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(124,58,237,0.18))'
          : 'rgba(255,255,255,0.03)',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: 14,
        fontWeight: 700,
        cursor: 'pointer',
        transition: '0.2s ease',
      }}
      type="button"
    >
      {label}
    </button>
  )
}

function TopBadge({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: '12px 14px',
        minWidth: 140,
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#94a3b8',
          fontSize: 12,
          marginBottom: 4,
        }}
      >
        {label}
      </p>
      <strong>{value}</strong>
    </div>
  )
}

function OverviewModule() {
  return (
    <>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 18,
          marginBottom: 24,
        }}
      >
        <StatCard title="Usuários ativos" value="128" subtitle="+12 este mês" />
        <StatCard title="Produtos" value="42" subtitle="catálogo atual" />
        <StatCard title="Pedidos" value="318" subtitle="últimos 30 dias" />
        <StatCard title="Receita" value="R$ 18.420" subtitle="resultado parcial" />
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 20,
        }}
      >
        <Panel
          title="Resumo executivo"
          description="Visão consolidada da operação para acompanhamento diário."
        >
          <div style={{ display: 'grid', gap: 12 }}>
            <InfoRow label="Status geral" value="Operação estável" />
            <InfoRow label="Back-end" value="Conectado" />
            <InfoRow label="Último deploy" value="Produção ativa" />
            <InfoRow label="Próximo passo" value="CRUD com banco de dados" />
          </div>
        </Panel>

        <Panel
          title="Ações rápidas"
          description="Atalhos estratégicos para as próximas entregas."
        >
          <div style={{ display: 'grid', gap: 12 }}>
            <ActionButton text="Abrir módulo de usuários" />
            <ActionButton text="Revisar produtos" />
            <ActionButton text="Acompanhar pedidos" />
            <ActionButton text="Ajustar configurações" />
          </div>
        </Panel>
      </section>
    </>
  )
}

function UsersModule() {
  return (
    <Panel
      title="Gestão de usuários"
      description="Base inicial para o módulo de usuários do sistema."
    >
      <TableLike
        headers={['Nome', 'E-mail', 'Perfil', 'Status']}
        rows={[
          ['Administrador', 'admin@tradeb.com', 'ADMIN', 'Ativo'],
          ['Ana Costa', 'ana@tradeb.com', 'MANAGER', 'Ativo'],
          ['Carlos Lima', 'carlos@tradeb.com', 'VIEWER', 'Pendente'],
        ]}
      />
    </Panel>
  )
}

function ProductsModule() {
  return (
    <Panel
      title="Catálogo de produtos"
      description="Estrutura preparada para receber produtos reais do backend."
    >
      <TableLike
        headers={['Produto', 'Categoria', 'Preço', 'Status']}
        rows={[
          ['Plano Starter', 'Assinatura', 'R$ 49', 'Ativo'],
          ['Plano Pro', 'Assinatura', 'R$ 99', 'Ativo'],
          ['Licença Enterprise', 'Corporativo', 'Sob consulta', 'Ativo'],
        ]}
      />
    </Panel>
  )
}

function OrdersModule() {
  return (
    <Panel
      title="Pedidos"
      description="Monitoramento dos pedidos mais recentes da plataforma."
    >
      <TableLike
        headers={['Pedido', 'Cliente', 'Valor', 'Situação']}
        rows={[
          ['#1001', 'Ana Costa', 'R$ 99', 'Pago'],
          ['#1002', 'Carlos Lima', 'R$ 49', 'Pendente'],
          ['#1003', 'Empresa XPTO', 'R$ 499', 'Processando'],
        ]}
      />
    </Panel>
  )
}

function SettingsModule() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
      }}
    >
      <Panel
        title="Configurações do sistema"
        description="Parâmetros principais da aplicação."
      >
        <div style={{ display: 'grid', gap: 12 }}>
          <InfoRow label="Nome do sistema" value="TradeB" />
          <InfoRow label="Modo" value="Produção" />
          <InfoRow label="Autenticação" value="JWT" />
          <InfoRow label="Integração" value="Back-end conectado" />
        </div>
      </Panel>

      <Panel
        title="Segurança"
        description="Pontos importantes da sessão atual."
      >
        <div style={{ display: 'grid', gap: 12 }}>
          <InfoRow label="Token local" value="Ativo" />
          <InfoRow label="Usuário atual" value="Administrador" />
          <InfoRow label="Permissão" value="ADMIN" />
          <InfoRow label="Logout" value="Disponível" />
        </div>
      </Panel>
    </section>
  )
}

function Panel({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 8,
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: 0,
          marginBottom: 18,
          color: '#94a3b8',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>

      {children}
    </div>
  )
}

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string
  value: string
  subtitle: string
}) {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 22,
        padding: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.16)',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#94a3b8',
          fontSize: 14,
          marginBottom: 10,
        }}
      >
        {title}
      </p>

      <h3
        style={{
          margin: 0,
          fontSize: 32,
          fontWeight: 900,
          marginBottom: 8,
        }}
      >
        {value}
      </h3>

      <span style={{ color: '#cbd5e1', fontSize: 14 }}>{subtitle}</span>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        flexWrap: 'wrap',
      }}
    >
      <span style={{ color: '#94a3b8' }}>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function ActionButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      style={{
        width: '100%',
        textAlign: 'left',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.04)',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: 14,
        fontWeight: 700,
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  )
}

function TableLike({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div
      style={{
        overflowX: 'auto',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  textAlign: 'left',
                  padding: '12px 10px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: '#94a3b8',
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${index}-${cellIndex}`}
                  style={{
                    padding: '14px 10px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    color: '#f8fafc',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function getModuleTitle(module: ModuleKey) {
  switch (module) {
    case 'overview':
      return 'Visão geral'
    case 'users':
      return 'Usuários'
    case 'products':
      return 'Produtos'
    case 'orders':
      return 'Pedidos'
    case 'settings':
      return 'Configurações'
    default:
      return 'Dashboard'
  }
}
