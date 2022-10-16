import type { NextPage } from 'next'
import Main from '../src/main/Main'
import Layout from '../src/layout/layout'

const Home: NextPage = () => {
    return (
        <Layout title='main'>
            <Main/>
        </Layout>
    )
}

export default Home