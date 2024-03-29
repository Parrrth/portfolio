import List from '@/components/List'
import arr from '../../poems.json'
import { Lora, Style_Script} from 'next/font/google'
import { GetStaticProps } from 'next'
import img1 from '../../public/images/1.jpg'
import img2 from '../../public/images/2.jpg'
import img3 from '../../public/images/3.jpg'
import img4 from '../../public/images/4.jpg'
import img5 from '../../public/images/5.jpg'
import img6 from '../../public/images/6.jpg'
import { StaticImageData } from 'next/image'
import NavBar from '@/components/NavBar'

const imgArr = [img1, img2, img3, img4, img5, img6]
export type ListProps = {
  imgArr: StaticImageData[]
  arr: {
    id: number;
    title: string;
    poem: string;
    synopsis: string;
    language: string;
    font: string;
    wordMeaning: {
        word: string;
        meaning: string;
    }[];
  }[]
}

const lora = Lora({subsets: ['latin']})
const style = Style_Script({ weight: '400', subsets: ['latin'] })

export default function Home({ arr, imgArr }: ListProps) {

  return (
    <main className={`${lora.className} bg-gray-200 px-4 flex flex-col items-center h-full`}>
      <NavBar color='text-black' arr = {arr} /> 
      <div className = 'flex flex-col items-center'>  
        <div className = {`${style.className} text-5xl lg:text-7xl xl:text-9xl mt-20 md:mt-24 lg:mt-28 xl:mt-40`}>Parth Choudhary</div> 
        <div className = 'text-xs font-extralight tracking-wide md:text-md lg:text-lg text-gray-700 mt-3 mb-10'>Archive for poetry written by me. Add more description here.</div>
      </div>
      <List arr={arr} imgArr={imgArr} />
    </main>
  )
}

export const getStaticProps: GetStaticProps<ListProps> = () => {
  return {
    props: {
      imgArr,
      arr
    }
  }
}