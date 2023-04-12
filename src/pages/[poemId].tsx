import { GetStaticPaths, GetStaticProps } from "next"
import arr from '../../poems.json'
import { AppContext } from "next/app"
import { GiFlowers } from 'react-icons/gi'
import NavBar from "@/components/NavBar"

type PoemType = typeof arr[0]

export default function PoemItem({ poem }: { poem: PoemType }) {
    return <div className = 'w-screen relative h-screen bg-gradient-to-br from-green-200 to-green-50 py-10 px-3 md:px-10 lg:px-20 xl:px-32'>
        <NavBar />
        <div className = 'flex flex-col absolute top-0 left-0 h-screen justify-between w-screen py-20 px-2 md:px-32'>
            <GiFlowers className = 'text-green-300 text-6xl md:text-8xl lg:text-9xl rotate-45 md:scale-150' />
            <GiFlowers className = 'self-end text-green-200 text-6xl rotate-45' />
        </div>
        <div className = 'bg-white shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 z-20 my-5 md:w-2/4'>
        </div>
    </div>
}

export const getStaticPaths: GetStaticPaths<{ poemId: string }> = () => {
    return {
        paths: arr.map(item => {
            return {
                params: {
                    poemId: String(item.id)
                }
            }
        }),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{ poem: PoemType }, { poemId: string }> = (context) => {
    const { params } = context
    const poem = arr[parseInt(params?.poemId as string)]
    return {
        props: {
            poem
        }
    }
}
