'use client'

import ArticleCard from "@/components/cards/article_card/article_card";
import useDebounce from "@/utils/debounceState";
import { useEffect, useState } from "react";

export default function Search() {

    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const _handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
    };

    useEffect(() => {

    }, [debouncedSearch]);

    return (
        <>
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-3 py-4 px-4">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="text"
                            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            value={search}
                            onChange={_handler}
                        />

                        <span
                            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-black dark:text-neutral-200"
                            id="basic-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 fill-black">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>


                <ArticleCard articleName={"1"} />
                <ArticleCard articleName={"2"} />

            </div>
        </>
    );
}