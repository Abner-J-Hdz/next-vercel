import Link from 'next/link'
import MainLayout from '../../components/Layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">Pricing</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}