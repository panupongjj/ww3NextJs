import '@/styles/scss/main.scss'
import { Fragment } from 'react';
import Layout from '@/components/layout';
import Head from 'next/head';


function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;