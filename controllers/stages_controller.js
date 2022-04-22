// DEPENDENCIES 
const stages = require('express').Router()
const { Op } = require('sequelize')

//FIND ALL EVENTS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stages.findAll({
            order: [ [ 'stage_id', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE STAGES
stages.post( '/', ( req,res )=>{ 
    res.send('stage create stub')
})

//UPDATE STAGES
stages.put('/:id', (req,res) => {
    res.send('stage update stub')
})

//DELETE STAGES
stages.delete('stages/:id', (req,res)=>{
    res.send('stage delete stub')
})

module.exports = stages