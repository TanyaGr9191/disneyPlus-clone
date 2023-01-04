import { httpService } from './http.service.js'

export const movieService = {
    query,
    getById
}

const BASE_URL = `movie/`

function query(filterBy = { title: ''}) {
    return httpService.get(BASE_URL, filterBy).then(res => res)
}
function getById(movieId) {
    return httpService.get(BASE_URL + movieId).then(res => res)
}
