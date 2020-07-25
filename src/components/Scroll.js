import React from 'react';


const Scroll = ({ children }) => {
    return (
        <div style={{ overflow: 'scroll', borderTop: '3px solid black', height: '43rem'}}>
            { children }
        </div>
    );
};

export default Scroll;