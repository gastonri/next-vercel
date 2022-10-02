import Link from 'next/link';

import { MainLayout } from '../../components/Layouts/MainLayout';

import styles from '../../styles/Home.module.css'

const Contact = () => (
    <MainLayout>
        <h1>Contact Page</h1>

        <h2 className={styles.title}>
            Ir al <Link href="/">Home!</Link>
        </h2>

        <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/contact/index.tsx</code>
        </p>
    </MainLayout>
);

export default Contact
