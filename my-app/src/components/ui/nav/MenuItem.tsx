interface NavMenuItemProps {
    children: React.ReactNode;
}

const NavMenuItem = ({ children }: NavMenuItemProps) => {
    return (
        <li className="nav-item">
            {children}
        </li>
    );
}

export { NavMenuItem };

