export interface CountryLookUpResponse {
    businessName: string,
    businessWebsite: string,
    city: string,
    continent: string,
    country: string,
    countryCode: string,
    ipName: string,
    ipType: string,
    isp: string,
    lat: string,
    lon: string,
    message: string,
    org: string,
    query: string,
    region: string,
    status: string,
    timezone: string,
    utcOffset: string
}

export interface WebSearchResult {
    kind: string,
    title: string,
    htmlTitle: string,
    link: string,
    displayLink: string,
    snippet: string,
    htmlSnippet: string,
    formattedUrl: string,
    htmlFormattedUrl: string
}

export interface WebSearchInformation {
    searchTime: number,
    formattedSearchTime: string,
    totalResults: string,
    formattedTotalResults: string
}

export interface ImageSearchResult {
    kind: string,
    title: string,
    htmlTitle: string,
    link: string,
    displayLink: string,
    snippet: string,
    htmlSnippet: string,
    mime: string,
    fileFormat: string,
}