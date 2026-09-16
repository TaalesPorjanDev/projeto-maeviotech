# MaevioTech — Agência de Desenvolvimento Web

> Sites e sistemas web que fazem sua empresa vender mais.

![Hero](./public/images/imagem-hero.png)

## 📋 Sobre o Projeto

A **MaevioTech** é uma agência de desenvolvimento web focada em entregar experiências digitais modernas, rápidas e estratégicas para transformar visitantes em clientes.

Este repositório contém o site institucional da MaevioTech, desenvolvido com foco em **performance**, **acessibilidade** e **SEO** — atingindo pontuação máxima no Google PageSpeed Insights.

## 🚀 Performance

| Métrica | Desktop | Mobile |
|---|---|---|
| Performance | ✅ 100 | ✅ 97 |
| Acessibilidade | ✅ 100 | ✅ 100 |
| Práticas Recomendadas | ✅ 96 | ✅ 96 |
| SEO | ✅ 100 | ✅ 100 |

## 🖥️ Screenshots

### Hero
![Hero Section](./public/images/imagem-hero.png)

### Serviços e Sobre
![Services and About](./public/images/imagem-section1.png)

### Portfólio e Processo de Trabalho
![Portfolio and Work Process](./public/images/imagem-section2.png)

### Contato e Footer
![Contact and Footer](./public/images/imagem-footer.png)

## 🛠️ Tecnologias

- **[Next.js 15](https://nextjs.org/)** — Framework React com App Router e SSR
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização com design system próprio
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança no código
- **[shadcn/ui](https://ui.shadcn.com/)** — Componentes acessíveis e customizáveis
- **[Lucide Icons](https://lucide.dev/)** — Ícones otimizados em SVG
- **[react-icons](https://react-icons.github.io/react-icons/)** — Ícones de tecnologias (Simple Icons)

## ✨ Funcionalidades

- Design responsivo (mobile-first)
- Design system completo com variáveis CSS e suporte a dark mode
- SEO técnico completo (Open Graph, Twitter Card, robots, canonical)
- Navegação suave por âncoras
- Animações de hover nos cards e botões
- Acessibilidade WCAG (contraste, aria-labels, hierarquia de headings)
- Dados centralizados em arrays TypeScript (serviços, projetos, navegação)
- Imagens otimizadas com next/image
- Fonte Inter carregada via next/font (zero layout shift)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Design system (variáveis CSS, tema, tipografia)
│   ├── layout.tsx        # Layout raiz + metadados SEO
│   └── page.tsx          # Página principal
├── components/
│   ├── ui/               # Componentes shadcn/ui
│   ├── mobile/           # Componentes específicos do mobile
│   ├── Header.tsx        # Navegação principal
│   ├── Hero.tsx          # Seção hero
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── WorksSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── lib/
    ├── nav-links.ts      # Links de navegação
    ├── services.ts       # Dados dos serviços
    └── projects.ts       # Dados dos projetos
```

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/TaalesPorjanDev/projeto-maeviotech.git

# Entre na pasta do projeto
cd projeto-maeviotech

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para produção

```bash
npm run build
npm start
```

## 🌐 Deploy

O projeto está hospedado na **[Vercel](https://vercel.com/)**.

🔗 **[projeto-maeviotech.vercel.app](https://projeto-maeviotech.vercel.app)**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Desenvolvido com 💜 por [Tales Porjan](https://github.com/TaalesPorjanDev)
