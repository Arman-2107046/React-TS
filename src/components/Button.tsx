import React from 'react'

const Button = ({ label, clickFunction, disabled }:
    {
        label: string;
        clickFunction: () => void;
        disabled: boolean;
    }
) => {
    return (
        <div>
            <button onClick={clickFunction} disabled={disabled}>{label}</button>
        </div>
    )
}

export default Button;
