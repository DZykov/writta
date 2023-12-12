export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="mt-4 mx-auto"></div>
            <main>{children}</main>
        </>
    )
}