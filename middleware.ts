import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en'];
const defaultLocale = 'pt';

// Função para obter o idioma preferido do usuário
function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  
  // Verificar se já existe um idioma na URL
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Detectar idioma baseado no header Accept-Language
    const acceptLanguage = request.headers.get('accept-language');
    
    if (acceptLanguage) {
      // Priorizar português se o usuário aceita pt-BR ou pt
      if (acceptLanguage.includes('pt-BR') || acceptLanguage.includes('pt')) {
        return 'pt';
      }
      // Priorizar inglês se o usuário aceita en
      if (acceptLanguage.includes('en')) {
        return 'en';
      }
    }
    
    // Fallback para português
    return defaultLocale;
  }

  // Extrair idioma da URL
  const segments = pathname.split('/');
  const locale = segments[1];
  
  return locales.includes(locale) ? locale : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Pular arquivos estáticos e APIs
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/icons')
  ) {
    return NextResponse.next();
  }

  // Verificar se o caminho já tem um idioma
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirecionar apenas se não há idioma na URL E não é a raiz
  if (pathnameIsMissingLocale && pathname !== '/') {
    const locale = getLocale(request);
    
    // Redirecionar para a URL com idioma
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  // Se é a raiz, redirecionar para português
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL('/pt', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Pular todos os arquivos internos (_next)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|images|icons).*)',
  ],
};
