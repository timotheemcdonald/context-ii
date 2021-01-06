import React, {useState, createContext} from 'react';

export const MovieContext = createContext()

export const MovieProvider = props => {
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
<MovieContext.Provider value={[movies, setMovies]}>
    {props.children}
</MovieContext.Provider>
    )
}