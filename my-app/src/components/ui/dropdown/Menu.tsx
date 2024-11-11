"use client";

interface DropdownProps {
    label: string;
    children: React.ReactNode;
}

const Dropdown = ({label, children}: DropdownProps) => {
    return (
        <div className="dropdown">
            <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                {label}
            </button>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </div>
    );
}

export { Dropdown };
