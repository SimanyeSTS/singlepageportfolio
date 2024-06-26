import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const portfolioURL = 'https://simanyests.github.io/Vue.JS-EOMP-/data/data.json'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    records: null,
    experiences: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setjobTitle(state, value) {
      state.jobTitle = value
    },
    setabout(state, value) {
      state.about = value
    },
    setrecords(state, value) {
      state.records = value
    },
    setexperiences(state, value) {
      state.experiences = value
    },
    setskills(state, value) {
      state.skills = value
    },
    settestimonials(state, value) {
      state.testimonials = value
    },
    setproject(state, value) {
      state.project = value
    }
  },
  actions: {
    async fetchjobTitle(context) {
      try {
      let {jobTitle} = await (await axios.get(portfolioURL)).data
      context.commit("setjobTitle", jobTitle)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchabout(context) {
      try {
      let {about} = await (await axios.get(portfolioURL)).data
      context.commit("setabout", about)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the about",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchrecords(context) {
      try {
      let {records} = await (await axios.get(portfolioURL)).data
      context.commit("setRecords", records)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the records",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchexperiences(context) {
      try {
      let {experiences} = await (await axios.get(portfolioURL)).data
      context.commit("setexperiences", experiences)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the experiences",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchskills(context) {
      try {
      let {skills} = await (await axios.get(portfolioURL)).data
      context.commit("setskills", skills)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the skills",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchtestimonials(context) {
      try {
      let {testimonials} = await (await axios.get(portfolioURL)).data
      context.commit("settestimonials", testimonials)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the testimonials",
        icon: "Error",
        timer: "2000"
      })
    } 
    },
    async fetchprojects(context) {
      try {
      let {projects} = await (await axios.get(portfolioURL)).data
      context.commit("setprojects", projects)
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch the projects",
        icon: "Error",
        timer: "2000"
      })
    } 
    }
  },
  modules: {
  }
})
