import { Country } from "@/types/types";

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    betweenButtons: number;
}

// Generate page numbers to display
const generatePageNumbers = ({ currentPage, lastPage, betweenButtons }: PaginationProps) : (number | string)[] => {
    const pages : (number | string)[] = [];
    const halfBetween = Math.floor(betweenButtons / 2);

    let start = Math.max(currentPage - halfBetween, 2);
    let end = Math.min(currentPage + halfBetween, lastPage - 1);

    // Adjust start and end to show correct number of buttons
    if (currentPage - halfBetween < 2) {
        end = Math.min(1 + betweenButtons, lastPage - 1);
    }
    if (currentPage + halfBetween > lastPage - 1) {
        start = Math.max(lastPage - betweenButtons, 2);
    }

    // Add ellipsis and page numbers
    if (start > 2) 
        pages.push('...');

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < lastPage - 1) 
        pages.push('...');

    return pages;
};

/**
 * Calculates total number of pages needed
 */
const getLastPage = (countries: Country[], maxPerPage: number = 20): number => {
    return Math.ceil(countries.length / maxPerPage);
}

export { generatePageNumbers, getLastPage };