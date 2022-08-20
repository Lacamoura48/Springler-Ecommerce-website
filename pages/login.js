import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import LogIn from '../components/user/LogIn'


function login() {

  return (
    <>
    <Head>
      <title>Log in | Springler</title>
      
    </Head>
  <div>

   
    <Layout>
       <LogIn />
    </Layout>
  </div>
    
  </>

  )
}

export default login