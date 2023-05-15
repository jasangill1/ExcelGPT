import Screen from '../components/Chatscreen';
import Sidebar from '../components/Sidebar';
import InputMessage from '../components/Inputbox';
import { ChatProvider } from "../components/ChatContext";
import "./globals.css"
import Header from 'components/Header'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      
      <Header />
      <main className="flex justify-center items-center flex-grow">  
      <div className="w-[1200px] h-[700px] bg-black  border-gray-800 relative shadow-2xl flex">
            <ChatProvider>
            <Sidebar />
                <div className="flex flex-col h-full flex-grow"> 
                    <Screen className="flex-grow overflow-auto" />
                    <InputMessage className="w-full"/>
                </div>
            </ChatProvider>
        </div>
      </main>
    </div>
  );
}
