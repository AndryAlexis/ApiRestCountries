interface NavMenuProps {
    className?: string;
    children: React.ReactNode;
}

const NavMenu = ({ className, children }: NavMenuProps) => {
    return (
        <div className={className}>
            <ul className="navbar-nav">
                {children}
            </ul>
        </div>
    );
};

export { NavMenu };

