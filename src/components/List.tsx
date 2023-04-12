import Img, { StaticImageData } from 'next/image'
import type { ListProps } from '@/pages'
import Link from 'next/link'

export default function List ({ arr, imgArr }: ListProps) {

    return <ul className = 'text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-3 md:mt-6 lg:mt-9 xl:mt-12 pb-4 overflow-hidden'>
    {arr.map((item, i) => {
      return <Link href={`/${i + 1}`} className = 'cursor-pointer hover:scale-105 transition duration-700 shadow-lg' key = {i}>
          <Img className='brightness-75 hover:brightness-100 transition duration-500' src={imgArr[Number(item.id - 1)]} alt = '' />
          <div className = 'text-2xl md:text-3xl font-semibold ml-3 md:ml-5 lg:ml-7 mt-3 md:mt-5 lg:mt-7'>{item.title}</div>
          <div className = 'text-xs text-gray-500 md:text-sm font-thin lg:text-md px-3 md:px-5 lg:px-7 ml-6 pb-10 pt-3 md:pt-4 lg:pt-6'>{item.synopsis}</div>
      </Link>
    })}
  </ul>
}

