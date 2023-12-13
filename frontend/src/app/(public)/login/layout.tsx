export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="m-auto">{children}</main>
        </>
    )
}