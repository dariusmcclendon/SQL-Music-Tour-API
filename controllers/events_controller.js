// DEPENDENCIES 
const events = require('express').Router()
const { Op } = require('sequelize')

//FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll({
            order: [ [ 'start_date', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE EVENT
events.post( '/', ( req,res )=>{ 
    res.send('event create stub')
})

//UPDATE EVENT
events.put('/:id', (req,res) => {
    res.send('event update stub')
})

//DELETE EVENT
events.delete('events/:id', (req,res)=>{
    res.send('event delete stub')
})

module.exports = events