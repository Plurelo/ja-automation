# Consulting Company Website

Este é um projeto Next.js 14 para um site institucional de consultoria empresarial, otimizado para SEO e performance.

## 🚀 Instalação Rápida

### Pré-requisitos

- **Node.js 18.17.0 ou superior** (recomendado: Node.js 20.x LTS)
- npm ou yarn

### Verificar versão do Node.js

```bash
node --version
```

Se precisar atualizar o Node.js:

- **Download**: https://nodejs.org (baixe a versão LTS)
- **Via nvm**: `nvm install 20 && nvm use 20`

### Instalação Automática

**Windows:**

```bash
install.bat
```

**Linux/Mac:**

```bash
chmod +x install.sh
./install.sh
```

### Instalação Manual

1. **Instalar dependências:**

```bash
npm install
```

2. **Executar em desenvolvimento:**

```bash
npm run dev
```

3. **Acessar o site:**

```
http://localhost:3000
```

## 🔧 Solução de Problemas

### Erro: "Cannot find module 'clsx'"

**Solução:** Execute `npm install` para instalar todas as dependências.

### Erro: "Cannot find module 'next'"

**Solução:**

1. Verifique se o Node.js 18+ está instalado
2. Execute `npm install`
3. Se persistir, delete `node_modules` e `package-lock.json`, depois execute `npm install`

### Erro: TypeScript

**Solução:** Execute `npm run type-check` para verificar tipos.

### Erro: Tailwind CSS

**Solução:** As classes do Tailwind são processadas durante o build. Execute `npm run dev`.

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js 14
│   ├── cases/             # Página de cases de sucesso
│   ├── contato/           # Página de contato
│   ├── solutions/         # Página de soluções
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── sitemap.ts         # Sitemap dinâmico
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Componentes de layout
│   └── ui/               # Componentes de interface
├── lib/                  # Utilitários e dados
├── types/                # Definições TypeScript
└── public/               # Arquivos estáticos
```

## 🎯 Funcionalidades

### SEO Otimizado

- ✅ Metadata API do Next.js 14
- ✅ Schema.org JSON-LD
- ✅ Sitemap dinâmico
- ✅ Robots.txt
- ✅ Open Graph e Twitter Cards
- ✅ URLs semânticas

### Páginas

- ✅ **Home** - Hero section, serviços, CTA
- ✅ **Soluções** - Detalhes dos serviços oferecidos
- ✅ **Cases** - Cases de sucesso com resultados
- ✅ **Contato** - Formulário e informações de contato

### Componentes

- ✅ Header responsivo com menu mobile
- ✅ Footer com informações da empresa
- ✅ Formulário de contato funcional
- ✅ Cards de serviços
- ✅ Layout responsivo

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Executar em desenvolvimento
npm run build        # Build para produção
npm start            # Executar build de produção
npm run lint         # Verificar código
npm run type-check   # Verificar tipos TypeScript
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Design System

### Cores

- **Primary:** Azul (#2563eb)
- **Secondary:** Cinza (#64748b)
- **Success:** Verde
- **Error:** Vermelho

### Tipografia

- **Font:** Inter (Google Fonts)
- **Headings:** Font weight 700
- **Body:** Font weight 400

## 📊 Performance

- ✅ Core Web Vitals otimizado
- ✅ Lazy loading de imagens
- ✅ Compressão de assets
- ✅ Otimização de fontes
- ✅ Minificação CSS/JS

## 🔧 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

## 🚀 Deploy

O projeto está pronto para deploy em:

- ✅ Vercel (recomendado)
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Qualquer provedor que suporte Node.js

### Deploy na Vercel

1. Conecte seu repositório GitHub
2. A Vercel detectará automaticamente as configurações
3. Deploy automático a cada push

## 📈 SEO Features

1. **Structured Data**

   - Organization schema
   - Website schema
   - Breadcrumb schema

2. **Meta Tags**

   - Title e description otimizados
   - Open Graph completo
   - Twitter Cards

3. **Technical SEO**
   - Sitemap XML
   - Robots.txt
   - Canonical URLs
   - Semantic HTML

## 🔧 Personalização

### Alterar Informações da Empresa

Edite o arquivo `lib/data.ts` com os dados da sua empresa.

### Modificar Cores

Ajuste as cores no arquivo `tailwind.config.js`.

### Adicionar Conteúdo

- Serviços: `lib/data.ts` → `services`
- Cases: `lib/data.ts` → `caseStudies`
- Depoimentos: `lib/data.ts` → `testimonials`

### Configurar SEO

- URLs: `app/layout.tsx` e `lib/utils.ts`
- Metadata: Cada página tem seu próprio metadata
- Sitemap: `app/sitemap.ts`

## 📞 Suporte

Se encontrar problemas:

1. **Verifique a versão do Node.js** (deve ser 18+)
2. **Execute `npm install`** para instalar dependências
3. **Limpe o cache**: `rm -rf node_modules package-lock.json && npm install`
4. **Verifique os logs** no terminal para erros específicos

---

**Consulting Company** - Transformando desafios em oportunidades 🚀
