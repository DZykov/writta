import ArticleCard from "@/components/cards/article_card/article_card";

export default function Feed() {
    return (
        <>
            <div className="max-w-[1000px] mx-auto">

                <ArticleCard articleName={"1"} />
                <ArticleCard articleName={"2"} />

            </div>
        </>
    );
}