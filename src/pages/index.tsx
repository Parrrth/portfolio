import Image from 'next/image'
import { Lora, Style_Script} from 'next/font/google'

const lora = Lora({subsets: ['latin']})
const style = Style_Script({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${lora.className} bg-gray-300 px-5 flex flex-col items-center h-screen`}> 
      <div className = 'flex flex-col items-center'>  
        <div className = {`${style.className} text-3xl md:text-5xl lg:text-7xl xl:text-9xl mt-4 md:mt-8 lg:mt-12 xl:mt-16`}>Parth Choudhary</div> 
        <div className = 'text-sm md:text-md lg:text-lg text-gray-700 mt-4'>Archive for poetry written by me. Add more description here.</div>
      </div>     
    </main>
  )
}
