import React, { useEffect, useState } from 'react'
import './css/programs.css'
import axios from '../axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'



function Programs() {
    const { id } = useParams()
    const imagePath = "http://dumorefitness.himalayantechies.com/files/"
    const [Program, setProgram] = useState({})
    const [Sessions, setSessions] = useState([])


    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`../data/programs/${id}.json`)
            setProgram(res.data.program)
            setSessions(res.data.program.sessions)
        }
        fetchData()
    }, [])

    // useEffect(() => {

    //     async function fetchData() {
    //         fetch('https://dumorefitness.himalayantechies.com/programs.json', { mode: 'no-cors' })
    //             .then(res => {
    //                 res.json();
    //                 // setPrograms(res.json().stringify());
    //                 console.log(res)
    //             })
    //             .then((out) => {
    //                 console.log('Checkout this JSON! ', out);
    //             })
    //             .catch(err => { throw err });
    //     }

    //     fetchData();

    // }, [])


    return (
        <div className="programs">
            <div className="container">

                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h2 className="headertitle">Sessions</h2>
                        <p className="workoutname">Showing sessions for {Program.name}</p>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="card-text d-flex align-items-center flex-wrap justify-content-center">
                            {Sessions.length === 0 ? (<h1>No datas found</h1>) : Sessions.map((session) => (
                                <div className="card eachprogram" key={session.id}>
                                    <img className="card-img-top" src={imagePath + session.imageUrl} alt="card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{session.name}</h5>
                                        <p className="card-text">{session.description}</p>
                                        <Link to={`/exercises/${session.id}`} params={{ id: session.id }} className="btn btn-primary tosession">See Exercises</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs
