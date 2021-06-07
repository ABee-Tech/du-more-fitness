import axios from 'axios'

const init = axios.create({
    // baseURL: "https://dumorefitness.himalayantechies.com/",
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
})

export default init;