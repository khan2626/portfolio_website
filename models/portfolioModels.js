const mongoose = require('mongoose')

const introSchema = mongoose.Schema({
    welcomeText:{ type: String, required: true},
    name: { type: String, required: true},
    nickname: {type: String, required: true},
    caption: { type: String, required: true},
    description: { type: String, required: true},
})

const aboutSchema = mongoose.Schema({
    description1: { type: String, required: true},
    description2: { type: String, required: true},
    description3: { type: String, required: true},
    skills: { type: Array, required: true}
})


const projectSchema = mongoose.Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    technologies: { type: Array},
    url: { type: String, required: true}
})


module.exports = {
    Intro: mongoose.model('intros', introSchema),
    About: mongoose.model('abouts', aboutSchema),
    Project: mongoose.model('projects', projectSchema)
}