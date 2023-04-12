import NavBar from "./NavBar"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <div className = 'overflow-x-hidden'>
        <NavBar />
        {children}
    </div>
}