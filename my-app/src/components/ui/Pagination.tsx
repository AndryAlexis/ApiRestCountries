import Link from "next/link";
import { generatePageNumbers } from "@/utils/paginationHelpers";

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    betweenButtons: number;
    onClick: (page: number) => void;
}

const Pagination = ({ currentPage, lastPage, betweenButtons = 0, onClick }: PaginationProps) => {
    // Calculate pagination state
    const previous = currentPage - 1;
    const next = currentPage + 1;
    const isPreviousDisabled = previous < 1;
    const isNextDisabled = next > lastPage;

    const pageNumbers = generatePageNumbers({ currentPage, lastPage, betweenButtons });

    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
                <li className="page-item">
                    <button 
                        className={`page-link ${isPreviousDisabled ? 'disabled' : ''}`}
                        aria-disabled={isPreviousDisabled}
                        onClick={() => onClick(previous)}
                    >
                        Previous
                    </button>
                </li>

                {/* First page */}
                <li className="page-item">
                    <button 
                        className={`page-link ${currentPage === 1 ? 'active' : ''}`}
                        aria-current={currentPage === 1 ? 'page' : undefined}
                        onClick={() => onClick(1)}
                    >
                        1
                    </button>
                </li>

                {/* Middle pages */}
                {pageNumbers.map((page, index) => (
                    <li key={index} className="page-item">
                        {page === '...' ? (
                            <span className="page-link">...</span>
                        ) : (
                            <button 
                                className={`page-link ${currentPage === page ? 'active' : ''}`}
                                aria-current={currentPage === page ? 'page' : undefined}
                                onClick={() => onClick(page as number)}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}

                {/* Last page */}
                {lastPage > 1 && (
                    <li className="page-item">
                        <button 
                            className={`page-link ${currentPage === lastPage ? 'active' : ''}`}
                            aria-current={currentPage === lastPage ? 'page' : undefined}
                            onClick={() => onClick(lastPage)}
                        >
                            {lastPage}
                        </button>
                    </li>
                )}

                <li className="page-item">
                    <button 
                        className={`page-link ${isNextDisabled ? 'disabled' : ''}`}
                        aria-disabled={isNextDisabled}
                        onClick={() => onClick(next)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export { Pagination };
