import Link from 'next/link';
import { MdContentPasteSearch, MdNavigateBefore } from 'react-icons/md'
import { useState } from 'react'

type ThemeType = {
    color: 'text-white' | 'text-black'
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

export default function NavBar({ color, arr }: ThemeType) {

    const [showNavTray, setNavTray] = useState<boolean>(false)

    return <div className = {`fixed top-0 left-0 bg z-10 -gray-200 py-2 md:py-4 lg:py-5 xl:py-6 w-screen ${color}`}>
        {showNavTray? <MdNavigateBefore onClick = {() => { setNavTray(i => !i)}} className = 'text-2xl md:text-3xl lg:text-4xl cursor-pointer' />: <MdContentPasteSearch onClick = {() => { setNavTray(i => !i)}} className = 'text-2xl md:text-3xl lg:text-4xl cursor-pointer' /> }
        <div className = {`${showNavTray? 'scale-x-100': 'scale-x-0'} origin-left h-screen bg-gray-200 shadow-md w-4/5 md:w-1/4 transition duration-500`}>
            <div className = 'py-4 pl-10 text-lg tracking-wider'>
                Contents
            </div>
            {arr.map((val, i) => {
                return <Link href = {`/${val.id}`} key = {i}>
                    <div className = 'font-extralight text-xs text-gray-600 tracking-wider py-4 pl-10 hover:bg-gray-700 hover:text-white transition duration-500'>{val.title}</div>
                </Link>
            })}
        </div>
    </div>
}