import List from '@/components/List'
import { Lora, Style_Script} from 'next/font/google'

const lora = Lora({subsets: ['latin']})
const style = Style_Script({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${lora.className} bg-gray-200 px-4 flex flex-col items-center h-full`}> 
      <div className = 'flex flex-col items-center'>  
        <div className = {`${style.className} text-4xl lg:text-7xl xl:text-9xl mt-14 md:mt-16 lg:mt-20 xl:mt-24`}>Parth Choudhary</div> 
        <div className = 'text-xs md:text-md lg:text-lg text-gray-700 mt-3'>Archive for poetry written by me. Add more description here.</div>
      </div>
      <List />
    </main>
  )
}
