import Head from 'next/head'
import "./globals.css"
import TV from 'components/TV'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>  
          <div>
            <TV/>
          </div>
        </main>
       </div>
    </div>
  );
}
