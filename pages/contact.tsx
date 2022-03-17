import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'
import Head from 'next/head';

const Contact = () => {
    return (
        <MainLayout>

          <Head>
            <title>Contact - Anr</title>
            <meta name="description" content="About page anr" />
            <meta key="keywords" content="anr, code, abner, martinez, c#" />
          </Head>          
          <h1>Home Page</h1>
          <h1 className="title">
           Ir a <Link href="/about">Home</Link>
          </h1>
  
          <p className="description">
            Get started by editing{' '}
            <code className="code">pages/contact.js</code>
          </p>
        </MainLayout>
    )
}

export default Contact
