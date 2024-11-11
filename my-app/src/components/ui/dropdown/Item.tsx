"use client";

interface ItemProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Item = ({children, onClick}: ItemProps) => {
    return (
        <li>
            <button          
                className="dropdown-item" 
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}

export { Item };

