import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import SignUp from '../components/user/SignUp'

function signup() {
  return (
    <>
    <Head>
      <title>Sign up | Springler</title>
      
    </Head>
  <div>
    <Layout>
       <SignUp />
    </Layout>
  </div>
    
  </>

  )
}

export default signup