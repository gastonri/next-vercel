import { ActiveLink } from "./ActiveLink";

import styles from './Navbar.module.scss'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => (
    <nav className={styles.MenuContainer}>
        {menuItems.map(({ text, href }) => (
            <ActiveLink key={text} name={text} href={href} />
        ))}
    </nav>
);