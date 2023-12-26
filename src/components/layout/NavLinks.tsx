/* 'use client'
 */
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {
const links = [
    { name: 'Home', path: '/', },
    { name: 'About', path: '/about', },
    { name: 'Test', path: '/test', },
    { name: 'Blog', path: '/blog', },
    { name: 'Posts', path: '/posts', },
    { name: 'Products', path: '/products', },
];

const pathname = usePathname()
return (
<>
  {links.map((link, index) => (
  <Link key={index} href={link.path} className={`link ${pathname===link.path ? 'active' : '' } font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
  {link.name}

  </Link>
  ))}

</>
)
}



export default NavLinks