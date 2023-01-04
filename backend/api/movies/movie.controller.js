const express = require('express')
const movieService = require('../../services/movie.service')
const router = express.Router()

module.exports = router


//LIST
router.get('/', (req, res) => {
    const filterBy = { title: req.query.name || ''}
    // if(req.query.pageIdx) filterBy.pageIdx = req.query.pageIdx
    // if(req.query.userId) filterBy.userId = req.query.userId

    movieService.query(filterBy)
        .then(movies => res.send(movies))
})

//READ
router.get('/:movieId', (req, res) => {
    const { movieId } = req.params
    movieService.getById(movieId)
        .then(movie => res.send(movie))
})

//CREATE
router.post('/', (req, res) => {
    let movie = req.body
    console.log('req.body', req.body)
    movieService.save(movie)
        .then(movie => res.send(movie))
})

//UPDATE
router.put('/:movieId', (req, res) => {

    const movie = req.body
    movieService.save(movie)
        .then(movie => res.send(movie))
        .catch((err) => {
            console.log('error', err)
            res.status(400).send('Cannot update movie!')
        })
})

//DELETE
router.delete('/:movieId', (req, res) => {

    const { movieId } = req.params
    movieService.remove(movieId)
        .then(() => res.send({ msg: 'Removed successfully' }))
        .catch((err)=>{
            console.log('error', err)
            res.status(400).send('Cannot remove movie, NOT YOUR MOVIE!')
        })
})
