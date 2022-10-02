import Link from 'next/link';
import { ReactElement } from 'react';

import { MainLayout } from '../../components/Layouts/MainLayout';
import { DarkLayout } from '../../components/Layouts/DarkLayout';
import { NextPageWithLayout } from '../../types';

import styles from '../../styles/Home.module.css'

const AboutPage: NextPageWithLayout = () => (
    <>
        <h1>About Page</h1>

        <h2 className={styles.title}>
            Ir al <Link href="/">Home!</Link>
        </h2>

        <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/about/index.tsx</code>
        </p>
    </>
);

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};

export default AboutPage