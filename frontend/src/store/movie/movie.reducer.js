
const INITIAL_STATE = {
    movies: null,
    filterBy: null,
    // isLoading: false,
    movie: null
}

export function movieReducer(state = INITIAL_STATE, action) {
    let newState = state
    // let movies
    switch (action.type) {
        case 'SET_MOVIES':
            newState = { ...state, movies: action.movies }
            break
        case 'SET_MOVIE':
            newState = { ...state, movie: action.movie }
            break
        case 'SET_FILTER_BY':
            newState = { ...state, filterBy: { ...action.filterBy } }
            break
        default:
            newState = state
            break
    }

    // For debug:
    // window.movieState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState
}