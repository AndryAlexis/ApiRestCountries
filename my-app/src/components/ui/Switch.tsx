interface SwitchProps {
    setTheme: () => void;
}

const Switch = ({ setTheme }: SwitchProps) => {
    return (
        <div className="form-check form-switch">
            <input 
                className="form-check-input" 
                type="checkbox" 
                role="switch" 
                onChange={setTheme} 
            />
        </div>    
    );
}

export { Switch };
