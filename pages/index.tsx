import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'
import Head from 'next/head';

export default function Home() {
  return (
    <MainLayout>
      <Head>
          <title>Contact - Anr</title>
          <meta name="description" content="About page anr" />
          <meta key="keywords" content="anr, code, abner, martinez, c#" />
      </Head>          

      <h1>Home Page</h1>
      <h1 className="title">
        {/*Ir a <a href="/about">About</a>*/}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
