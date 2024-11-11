"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearcherProps {
    id: string;
    onChange: (value: string) => void;
}

const Searcher = ({ id, onChange }: SearcherProps) => {
    return (
        <div className="input-group mb-4">
            <span className="input-group-text" id={id}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search for a country..." 
                aria-label="Search for a country..." 
                aria-describedby={id} 
                onChange={(e) => {onChange(e.target.value)}}
            />
        </div>
    );
}

export { Searcher };
