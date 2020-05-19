import Head from "next/head";
import Banner from '@/components/Banner/index';
import HelpSection from '@/components/HelpSection/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <HelpSection />
    </div>
  );
}
