const express = require('express')
const watchlistService = require('../../services/watchlist.service')
const router = express.Router()

module.exports = router


//LIST
router.get('/', (req, res) => {
    const filterBy = { title: req.query.title || ''}
    // if(req.query.pageIdx) filterBy.pageIdx = req.query.pageIdx
    // if(req.query.userId) filterBy.userId = req.query.userId

    watchlistService.query(filterBy)
        .then(movies => res.send(movies))
})

//READ
router.get('/:movieId', (req, res) => {
    const { movieId } = req.params
    watchlistService.getById(movieId)
        .then(movie => res.send(movie))
})

//CREATE
router.post('/', (req, res) => {
    let movie = req.body
    console.log('req.body', req.body)
    watchlistService.add(movie)
        .then(movie => res.send(movie))
})

//UPDATE
// router.put('/:movieId', (req, res) => {

//     const movie = req.body
//     watchlistService.save(movie)
//         .then(movie => res.send(movie))
//         .catch((err) => {
//             console.log('error', err)
//             res.status(400).send('Cannot update movie!')
//         })
// })

//DELETE
router.delete('/:movieId', (req, res) => {

    const { movieId } = req.params
    watchlistService.remove(movieId)
        .then(() => res.send({ msg: 'Removed successfully' }))
        .catch((err)=>{
            console.log('error', err)
            res.status(400).send('Cannot remove movie, NOT YOUR MOVIE!')
        })
})
