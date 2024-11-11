import { Country } from "@/types/types";

/**
 * Gets a slice of countries for the current page
 */
const getCountriesPerPage = (
    countries: Country[], 
    page: number, 
    maxPerPage: number = 20,
): Country[] => {
    const startIndex = (page - 1) * maxPerPage;
    const endIndex = page * maxPerPage;
    return countries.slice(startIndex, endIndex);
}

export { getCountriesPerPage };