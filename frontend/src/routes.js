import { MovieApp } from './pages/movie-app.jsx'
import { MovieDetails } from './pages/movie-details.jsx'
import { Collection } from './pages/collection.jsx'
import { Search } from './pages/search.jsx'

const routes = [
    {
        path: '/',
        element: <MovieApp />,
    },
    {
        path: 'home',
        element: <MovieApp />,
    },
    {
        path: 'movie/:movieId',
        element: <MovieDetails />,
    },
    {
        path: '/:collection',
        element: <Collection />,
    },
    {
        path: 'search',
        element: <Search />,
    }
]

export default routes