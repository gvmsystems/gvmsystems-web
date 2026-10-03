const CANONICAL_HOST = 'gvmsystems.com';

const REDIRECTED_HOSTS = ['gvmsystems.pages.dev', 'www.gvmsystems.com'];

const HTTPS_PROTOCOL = 'https:';

const PERMANENT_REDIRECT = 301;

export const onRequest = (context) => {
  const url = new URL(context.request.url);

  if (!REDIRECTED_HOSTS.includes(url.hostname)) return context.next();

  url.protocol = HTTPS_PROTOCOL;

  url.hostname = CANONICAL_HOST;

  url.port = '';

  return Response.redirect(url.toString(), PERMANENT_REDIRECT);
};
