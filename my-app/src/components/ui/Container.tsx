"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container-lg px-5">{children}</div>
    );
}

export { Container };
