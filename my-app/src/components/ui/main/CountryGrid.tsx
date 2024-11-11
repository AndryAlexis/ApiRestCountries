import { Card } from "@/components/Ui";
import { Country } from "@/types/types";
interface CountryGridProps {
    countries: Country[];
}

const CountryGrid = ({ countries }: CountryGridProps) => (
    <div className="row pb-4 align-items-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
        {countries.length > 0 ? (
            countries.map((country) => (
                <div key={country.name} className="col h-100 min-h-100 pb-4">
                    <div className="h-100 min-h-100">
                        <Card 
                            url={country.flags.png} 
                            altText={country.name} 
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        >
                            {country.name}
                        </Card>
                    </div>
                </div>
            ))
        ) : (
            <div className="col w-100">
                <p className="text-center text-muted">No countries found</p>
            </div>
        )}
    </div>
); 

export { CountryGrid };