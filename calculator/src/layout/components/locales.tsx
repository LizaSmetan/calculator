import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Layout.module.scss';

const Locales = () => {
    const router = useRouter()
    const { locales = [], locale: activeLocale } = router
    const otherLocales = locales.filter((locale) => locale !== activeLocale)
    const [isOpenedSwitcher, setIsopenedSwitcher] = useState(false)

    return (
        <div className={styles.langSwitcherWrap}>
            <div className={`${styles.langSwitcher} ${isOpenedSwitcher ? styles.langSwitcher__opened : ''}` } onClick={() => { setIsopenedSwitcher(prev => !prev) }}>{activeLocale}</div>
            {
                isOpenedSwitcher ?
                    <ul>
                        {otherLocales.map((locale) => {
                            const {
                                pathname, query, asPath
                            } = router
                            return (
                                <li key={locale}>
                                    <Link href={{ pathname, query }} as={asPath} locale={locale}>
                                        <a>{locale}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    : null
            }
        </div>
    )
}

export default Locales