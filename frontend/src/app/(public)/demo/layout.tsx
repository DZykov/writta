export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="max-w-[900px] mx-auto px-5 my-5">{children}</main>
        </>
    )
}