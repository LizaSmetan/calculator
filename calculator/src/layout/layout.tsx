import React, { ReactNode } from 'react'
import Head from 'next/head'
import Locales from './components/locales'
import Link from 'next/link';
import styles from '../../styles/Layout.module.scss';
import { useTranslation } from 'next-i18next'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'HH Global' }: Props) => {
    const { t } = useTranslation()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <header className={styles.header}>
                <ul className={styles.menu}>
                    <li>
                        <Link href='/'>
                            <a>{t('common:mainTitle')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/price-list'>
                            <a>{t('common:priceTitle')}</a>
                        </Link>
                    </li>
                </ul>
                <Locales/>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}


export default Layout