import { httpService } from './http.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save
}

const BASE_URL = `watchlist/`

function query() {
    return httpService.get(BASE_URL).then(res => res)
}
function getById(watchlistMovieId) {
    return httpService.get(BASE_URL + watchlistMovieId).then(res => res)
}
function remove(watchlistMovieId) {
    return httpService.delete(BASE_URL + watchlistMovieId).then(res => res)
}

function save(watchlistMovie) {
    if (watchlistMovie._id) {
        return httpService.put(BASE_URL + watchlistMovie._id, watchlistMovie).then(res => res)
    } else {
        return httpService.post(BASE_URL, watchlistMovie)
            .then(res => res)
    }
}