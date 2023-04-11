import NavBar from "./NavBar"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <div className = 'relative'>
        <NavBar />
        {children}
    </div>
}