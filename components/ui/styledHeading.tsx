import React from 'react';

interface StyledHeadingProps {
    text: string;
}

const StyledHeading: React.FC<StyledHeadingProps> = ({ text }) => {
    return (
        <div      className="flex items-center">
            <div  className="flex-1 border-t-2 border-slate-800"></div>
            <span className="px-4 text-black">{text}</span>
            <div  className="flex-1 border-t-2 border-slate-800"></div>
        </div>
    );
};

export default StyledHeading;