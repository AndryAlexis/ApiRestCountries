import { useState, useMemo } from 'react';
import { Country } from '@/types/types';
import { getCountriesPerPage } from '@/utils/helpers';
import { MAX_PER_PAGE, CONTINENTS } from '@/constants/countries';

export const useCountryFilters = (allCountries: Country[]) => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [currentRegion, setCurrentRegion] = useState(CONTINENTS[0].toLowerCase());

    // First filter by region
    const regionFilteredResults = useMemo(() => {
        const isAllRegionsSelected = currentRegion === CONTINENTS[0].toLowerCase();
        return allCountries.filter(country => {
            return isAllRegionsSelected || country.region.toLowerCase() === currentRegion;
        });
    }, [allCountries, currentRegion]);

    // Get paginated subset of region-filtered countries
    const paginatedResults = useMemo(() => 
        getCountriesPerPage(regionFilteredResults, currentPage, MAX_PER_PAGE),
        [regionFilteredResults, currentPage]
    );

    // Then search within current page
    const filteredCountries = useMemo(() => {
        const normalizedSearch = searchTerm.toLowerCase().trim();
        if (!normalizedSearch) return paginatedResults;

        return paginatedResults.filter(country => 
            country.name.toLowerCase().includes(normalizedSearch)
        );
    }, [paginatedResults, searchTerm]);

    // Filter handlers
    const filterBySearch = (term: string) => {
        setSearchTerm(term);
    };

    const filterByRegion = (region: string) => {
        setCurrentRegion(region.toLowerCase());
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return {
        filteredCountries,
        currentPage,
        filterBySearch,
        filterByRegion, 
        handlePageChange
    };
};