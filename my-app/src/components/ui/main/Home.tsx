"use client";

import data from "@/app/data/data.json" assert { type: "json" };
import { Country } from "@/types/types";
import { useMemo } from "react";
import { getLastPage } from "@/utils/helpers";
import { Container, Pagination } from "@/components/Ui";
import { SearchControls } from "./SearchControls";
import { CountryGrid } from "./CountryGrid";
import { MAX_PER_PAGE, CONTINENTS } from "@/constants/countries";
import { useCountryFilters } from "@/hooks/useCountryFilters";
import { getCountriesPerPage } from '@/utils/helpers';

const COUNTRIES = data as Country[];

const Main = () => {
    const countriesPerPage = getCountriesPerPage(COUNTRIES, 1, MAX_PER_PAGE);
    const {
        filteredCountries,
        currentPage,
        filterBySearch,
        filterByRegion,
        handlePageChange
    } = useCountryFilters(COUNTRIES);

    const lastPage = useMemo(() => 
        getLastPage(COUNTRIES, MAX_PER_PAGE), []
    );

    return (
        <main className="w-100">
            <Container>
                <div className="row py-5 pb-4 align-items-center row-cols-1">
                    <div className="col">
                        <SearchControls 
                            onSearch={filterBySearch}
                            onRegionFilter={filterByRegion}
                            continents={CONTINENTS as unknown as string[]}
                        />
                    </div>
                </div>
                <CountryGrid countries={filteredCountries} />
            </Container>
            
            <Container>
                <div className="row pb-4">
                    <div className="col d-flex justify-content-center">
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}
                            betweenButtons={5}
                            onClick={handlePageChange}
                        />
                    </div>
                </div>
            </Container>
        </main>
    );
}

export { Main };
