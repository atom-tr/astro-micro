import { SITE as ASTRO_SITE, SOCIAL_LINKS as ASTRO_SOCIAL_LINKS } from '@/shared-configs/astro';

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

export const SITE: Site = ASTRO_SITE

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  // { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = ASTRO_SOCIAL_LINKS
