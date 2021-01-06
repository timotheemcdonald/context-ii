import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (event) => {
        setName(event.target.value);
    }

    const updatePrice = (event) => {
        setPrice(event.target.value);
    }

    const addMovie = (event) => {
        event.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: Date.now()}])
    };

    return(
        <div>
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
        </div>
    );
};

export default AddMovie;