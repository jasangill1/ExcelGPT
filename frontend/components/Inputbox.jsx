// components/InputMessage.js

export default function InputMessage() {
    return (
        <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-4/5 p-4 rounded-10 flex items-center text-green-400 bg-black">
            <span className="text-2xl font-mono">$</span>
            <input
                className="text-2xl font-mono bg-black pl-2 w-full text-green-400 border-none"
                type="text"
                placeholder="Type your command..."
            />
        </div>
    )
  }
  