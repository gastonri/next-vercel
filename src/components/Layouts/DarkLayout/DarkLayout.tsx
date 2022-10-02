import { ReactElement } from 'react';
import styles from './DarkLayout.module.scss'

export const DarkLayout = ({ children }: { children: ReactElement }) => (
    <div className={styles.DarkLayout}>{children}</div>
);