import { Dropdown, Searcher, Item as DropdownItem } from "@/components/Ui";

interface SearchControlsProps {
    onSearch: (term: string) => void;
    onRegionFilter: (region: string) => void;
    continents: string[];
}

const SearchControls = ({ onSearch, onRegionFilter, continents }: SearchControlsProps) => (
    <div className="row d-flex gap-1 gap-md-5">
        <div className="col-12 col-md-5">
            <Searcher id="searcher" onChange={onSearch} />  
        </div>
        <div className="col d-flex justify-content-end">
            <Dropdown label="Filter by Region">
                {continents.map((continent) => (
                    <DropdownItem 
                        key={continent} 
                        onClick={() => onRegionFilter(continent.toLowerCase())}
                    >
                        {continent}
                    </DropdownItem>
                ))}
            </Dropdown>  
        </div>
    </div>
); 

export { SearchControls };