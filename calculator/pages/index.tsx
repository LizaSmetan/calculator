import type { NextPage, GetStaticProps } from 'next'
import Main from '../src/main/Main'
import Layout from '../src/layout/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
const Home: NextPage = () => {
    const { t } = useTranslation()
    return (
        <Layout title={t('common:mainTitle')}>
            <Main/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return { props: { ...await serverSideTranslations(locale || '', ['common']) } }
}
export default Home