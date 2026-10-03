# Estação Barbearia

Landing page moderna e elegante para uma barbearia, desenvolvida com Next.js e focada em conversão para agendamento via WhatsApp.

## Visão geral

Este projeto é uma interface de apresentação para a barbearia Estação, com foco em:

- destacar os serviços oferecidos;
- transmitir a identidade do ambiente e do atendimento;
- incentivar agendamentos e contato direto;
- apresentar a marca em um visual premium e responsivo.

## Tecnologias utilizadas

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Estrutura do projeto

```bash
frontend/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Funcionalidades

- Hero section com forte apelo visual
- Navegação por seções: sobre, serviços, ambiente e contato
- Listagem de serviços com preços de referência
- Galeria de imagens inspirada em barbearias tradicionais
- Botões de CTA para agendamento pelo WhatsApp
- Layout responsivo para desktop e mobile
- Design com estética premium e minimalista

## Como executar localmente

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```bash
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```
Inicia a aplicação em modo de desenvolvimento.

```bash
npm run build
```
Gera a build de produção.

```bash
npm run start
```
Executa a aplicação em modo de produção.

```bash
npm run lint
```
Executa a checagem de lint do projeto.

## Personalização

Para adaptar a página à sua barbearia, você pode alterar:

- textos e slogan principal em `app/page.tsx`;
- dados de endereço e horários em `app/page.tsx`;
- links de WhatsApp e redes sociais;
- cores, tipografia e estilos em `app/globals.css`.

## Observações

Este projeto foi desenvolvido como uma landing page front-end e pode ser evoluído facilmente para incluir:

- agendamento integrado;
- painel administrativo;
- catálogo de serviços e produtos;
- autenticação para clientes ou funcionários;
- backend e banco de dados.

## Autor

Projeto desenvolvido para a marca Estação Barbearia.
