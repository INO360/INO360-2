import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>INO360</title>
        <meta name="description" content="Gestión de inocuidad alimentaria online y offline" />
      </Head>
      <HomePage />
    </>
  );
}
