import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import withContext from '../src/helpers/withContext'

function MyApp({ Component, pageProps }: AppProps) {
    return withContext(<Component {...pageProps} />)
}

export default appWithTranslation(MyApp)