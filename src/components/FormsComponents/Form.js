import React from 'react';

const Form = ({ handleChange, city, handleClick  }) => {

  return  (
            <form>
                <input type="text" placeholder="Enter city name" onChange={handleChange} value={city} />
                <button type="button" onClick={handleClick}>Clear</button>
            </form>
    );
}

export {Form};
