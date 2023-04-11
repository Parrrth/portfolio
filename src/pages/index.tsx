import Image from 'next/image'
import { Lora } from 'next/font/google'

const lora = Lora({subsets: ['latin']})

export default function Home() {
  return (
    <main className={lora.className}>      
      <div >
        Hello
      </div>      
    </main>
  )
}
