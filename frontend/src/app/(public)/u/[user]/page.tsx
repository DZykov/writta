export default async function User({ params }: { params: { user: string } }) {

    return (
        <>
            <div>User {params.user}</div>
        </>
    );
}