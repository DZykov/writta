export default function UserProfile({ params }: { params: { user: string } }) {
    return <div>User profile {params.user}</div>
}