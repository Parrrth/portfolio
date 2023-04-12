import { GetStaticPaths, GetStaticProps } from "next"
import arr from '../../poems.json'
import NavBar from "@/components/NavBar"
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link'

type PoemType = typeof arr[0]

export default function PoemItem({ poem, img }: { poem: PoemType, img: string }) {

    console.log(img)
    return <div className = "w-screen relative h-screen shadow-md bg-gradient-to-b from-transparent to-black py-10 px-3 md:px-10 lg:px-20 xl:px-32">
        <div style = {{
            backgroundImage: img
        }} className = {`absolute top-0 left-0 w-screen h-screen mix-blend-darken brightness-50 bg-cover`}></div>
        <NavBar color="text-white" />
        <div className = 'bg-white shadow-md absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2 w-11/12 z-20 my-5 md:w-2/5 lg:w-1/4'>
            <Link className = 'px-4 pt-4 pb-2 text-2xl' href = {'/'}><IoMdArrowBack/></Link>
            <div className = 'tracking-wider text-gray-700 font-semibold text-2xl self-center bg-red-300'>{poem.title}</div>
            <div>{poem.language}</div>
            <div>{poem.poem}</div>
        </div>
    </div>
}

export const getStaticPaths: GetStaticPaths<{ poemId: string }> = () => {
    return {
        paths: arr.map(item => {
            return {
                params: {
                    poemId: String(item.id),
                }
            }
        }),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{ poem: PoemType }, { poemId: string }> = (context) => {
    const { params } = context
    const poem = arr[parseInt(params?.poemId as string) - 1]
    return {
        props: {
            poem,
            img: `url("/images/${poem.id}.jpg")`
        },
    }
}
