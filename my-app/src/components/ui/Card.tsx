"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

interface CardProps {
    children: React.ReactNode;
    url: string;
    altText: string;
    population: number;
    region: string;
    capital: string;
}

const Card = ({ children, url, altText, population, region, capital }: CardProps) => {
    const { theme } = useTheme();
    
    return (
        <div 
            className="card bg-tertiary justify-content-center h-100" 
            data-bs-theme={theme || "dark"}
        >
            <figure className="m-0 p-0" style={{ height: "12rem" }}>
                <Image 
                    src={url}
                    className="card-img-top h-100 w-100" 
                    style={{ objectFit: "cover" }}
                    alt={altText}
                    loading="lazy"
                    width={320}
                    height={213}
                />
            </figure>
            <div className="card-body">
                <h5 className="card-title lh-base fw-bold text-truncate mb-3">
                    {children}
                </h5>
                <ul className="list-unstyled">
                    <li>
                        <span className="fw-bold">Population:</span> {population}
                    </li>
                    <li>
                        <span className="fw-bold">Region:</span> {region}
                    </li>
                    <li>
                        <span className="fw-bold">Capital:</span> {capital}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { Card };
