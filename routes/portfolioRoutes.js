const router = require('express').Router()
const { Intro, About, Project } = require('../models/portfolioModels')

router.get('/', async(req, res)=>{
    try{
        const intros = await Intro.find()
        const abouts = await About.find()
        const projects = await Project.find({})
        res.status(200).json({
            intro: intros[0],
            about: abouts[0],
            projects: projects || {}
        })
    } catch(error){
        res.status(500).send(error)
        console.log(error.message)
    }
})

module.exports = router;