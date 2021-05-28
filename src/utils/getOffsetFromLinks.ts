interface Links {
  rel: string;
  href: string;
}

type Relations = 'first' | 'last' | 'next' | 'self';

export default function getOffsetFromLinks(
  links: Links[],
  rel: Relations = 'next',
): string {
  const nextLink = links.find((link) => link.rel === rel);
  const qp = nextLink?.href.replace('/jobs', '');
  const urlParams = new URLSearchParams(qp);
  const offset = urlParams.get('offset');
  return offset || ' ';
}
