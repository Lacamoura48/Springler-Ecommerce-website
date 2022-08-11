import Head from 'next/head'
import Hero from '../components/Home/Hero'
import TopSelling from '../components/Home/TopSelling'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Springler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <Layout>
          <Hero />
          <TopSelling />
      </Layout>
    </div>
      
    </>
  )
}
