import React from 'react';

type AppButtonProps = {
    color: string;
    icon: string;
    onClick?: () => void;
    // Outras props que você deseja passar para o botão
};

const AppButton: React.FC<AppButtonProps> = ({ color, icon, onClick, ...props }) => {
    return (
        <button className={`text-${color}`} onClick={onClick} {...props}>
            <i className={`fas fa-${icon}`}></i>
        </button>
    );
};

export default AppButton;
