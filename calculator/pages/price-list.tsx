import type { NextPage } from 'next'
import PriceList from '../src/price-list/PriceList'
import Layout from '../src/layout/layout'

const Home: NextPage = () => {
    return (
        <Layout title='main'>
            <PriceList/>
        </Layout>
    )
}

export default Home