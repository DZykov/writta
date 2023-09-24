export default async function Treasure({ params }: { params: { treasure: string } }) {

    const data = await fetch('https://fakestoreapi.com/products/' + params.treasure)
        .then(res => res.json())

    // console.log(data)
    return (
        <>
            <div>Treasure {data.title}</div>
        </>
    );
}