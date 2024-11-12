const mongoose = require('mongoose')

const introSchema = mongoose.Schema({
    welcomeText:{ type: string, required: true},
    name: { type: string, required: true},
    nickname: {type: string, required: true},
    caption: { type: string, required: true},
    description: { type: string, required: true},
})

const aboutSchema = mongoose.Schema({
    description1: { type: string, required: true},
    description2: { type: string, required: true},
    description3: { type: string, required: true},
    skills: { type: Array, required: true}
})


const projectSchema = mongoose.Schema({
    title: { type: string, required: true},
    image: { type: string, required: true},
    description: { type: string, required: true},
    technologies: { type: Array},
    url: { type: string, required: true}
})


module.exports = {
    Intro: mongoose.model('intros', introSchema),
    About: mongoose.model('about', aboutSchema),
    Project: mongoose.model('projects', projectSchema)
}