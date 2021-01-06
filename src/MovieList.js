import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Happy Potter',
            price: '$10',
            id: 2123
        },
        {
            name: 'The Last Movie',
            price: '$10',
            id: 1235
        },
        {
            name: 'Everlasting Owls',
            price: '$10',
            id: 6523
        }
    ]);

    return(
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    );
}

export default MovieList;