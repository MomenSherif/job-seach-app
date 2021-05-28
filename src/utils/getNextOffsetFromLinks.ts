interface Links {
  rel: string;
  href: string;
}

export default function getNextOffsetFromLinks(links: Links[]): string {
  const nextLink = links.find((link) => link.rel === 'next');
  const qp = nextLink?.href.replace('/jobs', '');
  const urlParams = new URLSearchParams(qp);
  const offset = urlParams.get('offset');
  return offset || ' ';
}
