import Link from 'next/link';
import { ReactElement } from 'react';

import { MainLayout } from '../../components/Layouts/MainLayout';

import styles from '../../styles/Home.module.css'

const PricingPage = () => (
    <>
        <h1>Pricing Page</h1>

        <h2 className={styles.title}>
            Ir al <Link href="/">Home!</Link>
        </h2>

        <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/pricing/index.tsx</code>
        </p>
    </>
);


PricingPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
}

export default PricingPage
