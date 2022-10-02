import type { NextPage } from 'next'
import Link from 'next/link'

import { MainLayout } from '../components/Layouts/MainLayout'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <MainLayout>
          <h1>Home Page</h1>

          <h2 className={styles.title}>
              Ir al <Link href="/about">About!</Link>
          </h2>

          <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.tsx</code>
          </p>
      </MainLayout>
  );
}

export default Home
