import {WebSearchInformation, WebSearchResult} from "@/types";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "@/components/PaginationButtons";

const WebSearchResults = ({results, searchResult}:
                              { results: Array<WebSearchResult>, searchResult: WebSearchInformation }) => {
    return (
        <div className='w-full mx-auto px-3 pb-40 sm:pl-[5%]
        md:pl-[14%] lg:pl-52 sm:pb-24'
        >
            <p className='text-gray-600 text-sm mb-5 mt-3'>
                About {searchResult.formattedTotalResults} results (
                {searchResult.formattedSearchTime} seconds)
            </p>
            {
                results.map((result, k) =>
                    <div key={`${result.title}${k}`}
                         className='mb-8 max-w-xl'
                    >
                        <div className='group flex flex-col'>
                            <Link href={result.link}
                                  className='text-sm truncate'
                            >
                                {result.formattedUrl}
                            </Link>
                            <Link href={result.link}
                                  className='group-hover:underline decoration-blue-800
                                  text-lg truncate font-medium text-blue-800'
                            >
                                {result.title}
                            </Link>
                        </div>
                        <p className='text-gray-600'
                        >
                            {Parser(result.htmlSnippet)}
                        </p>
                    </div>
                )
            }
            <PaginationButtons/>
        </div>
    )
}

export default WebSearchResults;