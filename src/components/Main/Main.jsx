import './Main.css'

function Main() {
  return (
    <main id="inicio">
      <h2>Descubra o universo</h2>

      <p>
        Nesta página você vai encontrar curiosidades sobre o universo,
        planetas e alguns dos fenômenos fascinantes do espaço.
      </p>

      <section id="planetas" aria-labelledby="titulo-planetas">
        <h2 id="titulo-planetas">Conheça um pouco mais</h2>

        <article>
          <img
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80"
            alt="Ilustração do planeta Terra vista do espaço"
            loading="lazy"
          />

          <h3>Planetas</h3>

          <p>
            Existem muitos planetas no universo, cada um com características únicas.
          </p>
        </article>

        <article>
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
            alt="Céu noturno com estrelas e uma galáxia"
            loading="lazy"
          />

          <h3>Estrelas</h3>

          <p>
            As estrelas são enormes esferas de gás que produzem luz e calor.
          </p>
        </article>

        <article id="curiosidades">
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
            alt="Via Láctea observada no céu durante a noite"
            loading="lazy"
          />

          <h3>Curiosidades</h3>

          <p>
            O universo é tão grande que ainda existem muitos mistérios para descobrir.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Main