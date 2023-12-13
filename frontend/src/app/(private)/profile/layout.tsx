export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="mx-auto">{children}</main>
        </>
    )
}