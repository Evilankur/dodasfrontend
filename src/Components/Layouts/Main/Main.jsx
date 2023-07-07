import Header from '@/Components/Modules/Header/Header';
import React from 'react';

const Main = ({ children}) => {
    return (
        <div>
            <Header />
            {
                children
            }
        </div>
    );
};

export default Main;