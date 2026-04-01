import React from 'react'

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)',
        color: '#f8fafc',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(8px)',
          background: 'rgba(15, 23, 42, 0.65)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: 1.4,
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: 4,
              }}
            >
              Plataforma
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              TradeB
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <button
              style={primaryButton}
              type="button"
              onClick={() => alert('Área principal em construção')}
            >
              Entrar no sistema
            </button>

            <button
              style={secondaryButton}
              type="button"
              onClick={() => alert('Painel online e funcionando')}
            >
              Ver status
            </button>
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '48px 24px 64px',
        }}
      >
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(34, 197, 94, 0.12)',
                color: '#86efac',
                border: '1px solid rgba(34, 197, 94, 0.24)',
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                }}
              />
              Sistema online
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 58px)',
                lineHeight: 1.05,
                margin: '0 0 18px',
                fontWeight: 900,
              }}
            >
              Interface moderna para seu projeto crescer com cara de empresa
            </h2>

            <p
              style={{
                margin: '0 0 28px',
                fontSize: 18,
                lineHeight: 1.7,
                color: '#cbd5e1',
                maxWidth: 620,
              }}
            >
              Seu deploy está funcionando e agora você já tem uma base visual
              mais limpa, forte e profissional para continuar evoluindo o
              TradeB.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <button
                style={primaryButton}
                type="button"
                onClick={() => alert('Próximo passo: conectar páginas e ações')}
              >
                Continuar projeto
              </button>

              <button
                style={secondaryButton}
                type="button"
                onClick={() => alert('Deploy Vercel ativo com sucesso')}
              >
                Deploy ativo
              </button>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: 24,
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 8,
                marginBottom: 18,
              }}
            >
              <span style={dot('#ef4444')} />
              <span style={dot('#f59e0b')} />
              <span style={dot('#22c55e')} />
            </div>

            <div
              style={{
                background: '#020617',
                borderRadius: 18,
                padding: 20,
                border: '1px solid rgba(255,255,255,0.06)',
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
                Status do projeto
              </p>

              <h3
                style={{
                  margin: '0 0 18px',
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                FUNCIONANDO 🚀
              </h3>

              <div
                style={{
                  display: 'grid',
                  gap: 12,
                }}
              >
                <StatusRow label="Deploy" value="OK" />
                <StatusRow label="Domínio" value="tradeb.vercel.app" />
                <StatusRow label="Ambiente" value="Produção" />
                <StatusRow label="Próximo foco" value="Interface profissional" />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 18,
            marginBottom: 32,
          }}
        >
          <FeatureCard
            title="Visual profissional"
            text="Layout mais limpo, moderno e agradável para começar com boa apresentação."
          />
          <FeatureCard
            title="Base organizada"
            text="Estrutura visual pronta para depois adicionar páginas, login e integração."
          />
          <FeatureCard
            title="Deploy estável"
            text="Projeto online com domínio fixo e pronto para continuar evoluindo."
          />
          <FeatureCard
            title="Próxima etapa"
            text="Podemos transformar essa base em dashboard real com menu, cards e ações."
          />
        </section>

        <section
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            padding: 24,
            boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: 12,
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            Próximos passos
          </h3>

          <p
            style={{
              marginTop: 0,
              marginBottom: 20,
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            Agora que o projeto já está online, a próxima evolução ideal é criar
            uma interface de sistema de verdade, com menu lateral, cards de
            resumo, telas organizadas e botão para abrir e fechar módulos.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <button
              style={primaryButton}
              type="button"
              onClick={() => alert('Próximo passo sugerido: montar dashboard')}
            >
              Criar dashboard
            </button>

            <button
              style={secondaryButton}
              type="button"
              onClick={() => alert('Depois disso: conectar backend')}
            >
              Conectar backend
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 22,
        padding: 20,
        boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: '#cbd5e1',
          lineHeight: 1.6,
          fontSize: 15,
        }}
      >
        {text}
      </p>
    </div>
  )
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
        flexWrap: 'wrap',
      }}
    >
      <span style={{ color: '#94a3b8' }}>{label}</span>
      <strong style={{ color: '#f8fafc' }}>{value}</strong>
    </div>
  )
}

function dot(color: string) {
  return {
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: color,
    display: 'inline-block',
  } as const
}

const primaryButton: React.CSSProperties = {
  border: 'none',
  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
  color: '#fff',
  padding: '14px 20px',
  borderRadius: 14,
  fontSize: 15,
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 10px 25px rgba(59,130,246,0.28)',
}

const secondaryButton: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.04)',
  color: '#f8fafc',
  padding: '14px 20px',
  borderRadius: 14,
  fontSize: 15,
  fontWeight: 700,
  cursor: 'pointer',
}