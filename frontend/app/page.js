
import "./globals.css"
import TV from 'components/TV'
import Header from 'components/Header'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      
      <Header />
      <main className="flex justify-center items-center flex-grow">  
        <div>
          <TV/>
        </div>
      </main>
    </div>
  );
}
