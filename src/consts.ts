
export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
  icon?: string
}

export const SITE: Site = {
  TITLE: 'atomtr',
  DESCRIPTION: 'A developer / DevOps engineer with a passion for automating everything.',
  EMAIL: 'thai.tr@hotmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://atomtr.link',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  // { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'thai.tr@hotmail.com', label: 'Email', icon: 'lucide:mail' },
  { href: 'https://github.com/atom-tr', label: 'Github', icon: 'lucide:github' },
  { href: 'https://instagram.com/rt.mota', label: 'Instagram', icon: 'lucide:instagram' },
  { href: 'https://dev.to/atomtr', label: 'Dev.to' },
  { href: '/rss.xml', label: 'RSS', icon: 'lucide:rss' }
]
