export default function Resource({ params }: { params: { id: number } }) {
    return <div>Resource {params.id}</div>
}