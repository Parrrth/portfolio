import { MdContentPasteSearch } from 'react-icons/md'

type ThemeType = {
    color: 'text-white' | 'text-black'
}

export default function NavBar({ color }: ThemeType) {
    return <div className = {`fixed top-0 left-0 bg z-10 -gray-200 py-2 md:py-4 lg:py-5 xl:py-6 px-1 md:px-3 lg:px-5 xl:px-7 ${color}`}>
        <MdContentPasteSearch className = 'text-2xl md:text-3xl lg:text-4xl' />
    </div>
}