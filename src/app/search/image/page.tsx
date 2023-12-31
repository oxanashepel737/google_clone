import {ImageSearchResult} from "@/types";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearchPage = async ({searchParams}: { searchParams: { searchTerm: string , start: string} }) => {
    const startIndex = searchParams.start || "1";
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}
    &cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
    const data = await response.json();
    const results: Array<ImageSearchResult> = data.items;
    console.log(data);
    if (!response.ok) {
        throw new Error('Something went wrong')
    }
    if (!results) {
        return <div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='text-3xl mb-4'>
                No result found
            </h1>
            <p className='text-lg'>
                Try searching for something else or go back to homepage.
            </p>
            <Link href='/'
                  className='text-blue-500'
            >
                Home
            </Link>
        </div>
    }
    return (
        <>
            {
                results &&
                <ImageSearchResults
                    results={results}
                />
            }
        </>
    )
}

export default ImageSearchPage;