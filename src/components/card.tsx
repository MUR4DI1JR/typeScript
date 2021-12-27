import React, {FC} from 'react';

interface CardProps {
    width?: string;
    height?: string;
    onClick: ()=> void;
}

const Card: FC<CardProps> = ({width, height, children, onClick}) => {
    return (
        <div style={{width, height, border: '1px solid red'}} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;