import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib pa3 ma2 grow bw shadow-5'>
            <img alt='Robot' src={`https://robohash.org/${id}`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;