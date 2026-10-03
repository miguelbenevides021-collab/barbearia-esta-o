const services = [
  { number: "01", name: "Corte clássico", detail: "Tesoura ou máquina, com acabamento preciso e do jeito que combina com você.", price: "a partir de R$ 45" },
  { number: "02", name: "Barba na navalha", detail: "Toalha quente, espuma preparada na hora e contorno feito nos detalhes.", price: "a partir de R$ 35" },
  { number: "03", name: "Corte + barba", detail: "O ritual completo para sair renovado, sem pressa e com tudo alinhado.", price: "a partir de R$ 70" },
];

const gallery = [
  { image: "photo-1503951914875-452162b0f3f1", alt: "Interior acolhedor de uma barbearia tradicional" },
  { image: "photo-1621605815971-fbc98d665033", alt: "Barbeiro trabalhando em um corte masculino" },
  { image: "photo-1512690459411-b9245aed614b", alt: "Detalhes de um corte feito na barbearia" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement"><span className="status-dot" /> Ter–Sáb, 9h às 20h <span className="announcement-divider">·</span> Atendimento com hora marcada</div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Barbearia Estação, início"><span className="brand-mark">E</span><span>ESTAÇÃO<small>BARBEARIA</small></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="#sobre">A barbearia</a><a href="#servicos">Serviços</a><a href="#ambiente">O espaço</a><a href="#contato">Contato</a></nav>
        <a className="header-cta" href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20um%20horário." target="_blank" rel="noreferrer">Agendar horário <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="Barbeiro cuidando de um cliente em uma barbearia" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> BARBEARIA ESTAÇÃO · DESDE 2014</p>
          <h1>Seu corte.<br /><em>Suas regras.</em></h1>
          <p className="hero-description">Cabelo e barba no seu estilo, sem complicação. Chegue para o corte; fique pela conversa.</p>
          <div className="hero-actions"><a className="button button-gold" href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20um%20horário." target="_blank" rel="noreferrer">Reserve seu horário <span>↗</span></a><a className="text-link light-link" href="#servicos">Conheça os serviços <span>↓</span></a></div>
        </div>
        <div className="hero-caption"><span>01 / ESTAÇÃO</span><span>BARBEARIA DE BAIRRO, DO SEU JEITO</span><span>TER–SÁB · 9H–20H</span></div>
        <div className="vertical-note">CORTE BOM. DIA MELHOR.</div>
      </section>

      <div className="ticker" aria-label="Corte, barba, cuidado e boa conversa"><span>CORTE</span><i>✳</i><span>BARBA</span><i>✳</i><span>CUIDADO</span><i>✳</i><span>BOA CONVERSA</span><i>✳</i><span>CORTE</span><i>✳</i><span>BARBA</span></div>

      <section className="intro section-wrap" id="sobre">
        <div className="intro-label"><span className="eyebrow"><span /> MAIS QUE UM CORTE</span><p>Um intervalo bom<br />no meio da correria.</p></div>
        <div className="intro-content"><h2>O ritual é seu.<br /><em>A cadeira é nossa.</em></h2><p>A Estação nasceu de uma ideia simples: todo mundo merece um lugar onde possa se sentir em casa e sair se sentindo bem. Aqui, cada corte começa com uma conversa e termina quando você gosta do que vê no espelho.</p><a className="text-link" href="#contato">Venha conhecer <span>↗</span></a></div>
        <div className="intro-stamp"><strong>10</strong><span>ANOS DE<br />BOA PROSA</span></div>
      </section>

      <section className="services" id="servicos">
        <div className="section-wrap services-inner"><div className="services-heading"><div><p className="eyebrow"><span /> SEM PRESSA, COM CAPRICHO</p><h2>O que a gente<br /><em>faz melhor.</em></h2></div><p className="services-aside">Serviço bom é aquele que respeita seu estilo. A gente ouve, sugere e capricha — sempre.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.name}</h3><p>{service.detail}</p><span className="service-price">{service.price}</span><a href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20um%20horário." target="_blank" rel="noreferrer" aria-label={`Agendar ${service.name}`}>↗</a></article>)}</div>
          <p className="price-note">* Valores de referência. Confirme disponibilidade e preço pelo WhatsApp.</p>
        </div>
      </section>

      <section className="space section-wrap" id="ambiente"><div className="space-heading"><div><p className="eyebrow"><span /> PODE CHEGAR</p><h2>Um espaço feito<br />para <em>ficar à vontade.</em></h2></div><p>Tem café passado, cadeira confortável e aquela conversa que faz o tempo passar diferente.</p></div>
        <div className="gallery">{gallery.map((item, index) => <figure className={`gallery-item gallery-${index + 1}`} key={item.image}><div role="img" aria-label={item.alt} style={{ backgroundImage: `url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=85)` }} /><figcaption>0{index + 1} <span>{["NOSSO CANTO", "MÃO DE MESTRE", "NO CAPRICHO"][index]}</span></figcaption></figure>)}</div>
      </section>

      <section className="quote"><div className="quote-mark" aria-hidden="true">✳</div><blockquote>Seu estilo não sai<br />de <em>linha de produção.</em></blockquote><p>Por isso a gente começa ouvindo você.</p><div className="quote-rule" /></section>

      <section className="visit" id="contato"><div className="visit-image" role="img" aria-label="Detalhes clássicos da barbearia"/><div className="visit-copy"><p className="eyebrow light"><span /> SUA PRÓXIMA VISITA</p><h2>Tem uma cadeira<br />esperando por <em>você.</em></h2><p>Escolha um horário pelo WhatsApp. A gente deixa o café pronto.</p><a className="button button-gold" href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20um%20horário." target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a><div className="visit-details"><div><small>ONDE</small><span>Rua da Estação, 125<br />Seu bairro · Sua cidade</span></div><div><small>HORÁRIOS</small><span>Ter–Sex, 9h–20h<br />Sáb, 9h–18h</span></div></div></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">E</span><span>ESTAÇÃO<small>BARBEARIA</small></span></a><span>Um bom corte, uma boa conversa.</span><nav aria-label="Links do rodapé"><a href="#servicos">Serviços</a><a href="#contato">Agendamento</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></nav><small className="copyright">© 2026 Estação Barbearia</small></footer>
      <a className="mobile-booking" href="https://wa.me/5500000000000?text=Olá!%20Quero%20agendar%20um%20horário." target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a>
    </main>
  );
}
