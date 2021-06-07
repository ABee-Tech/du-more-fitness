import React, { useEffect, useState } from 'react'
import './css/sessions.css'
import axios from '../axios'
import { useParams } from 'react-router'


function Sessions() {
    const { id } = useParams()
    const [Exercises, setExercises] = useState([])
    const [video, setVideo] = useState("")
    const [videoTitle, setVideoTitle] = useState("")


    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`../data/exercises/${id}.json`)
            setExercises(res.data.exercises)
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
                        <h2 className="headertitle">Exercises</h2>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="card-text d-flex align-items-center flex-wrap justify-content-center">

                            {Exercises.length === 0 ? (<h1>No datas found</h1>) : Exercises.map((exercise) => (
                                <div className="card eachprogram" key={exercise.id}>
                                    <img className="card-img-top" src={`https://i.ytimg.com/vi/${exercise.video.video_link}/hqdefault.jpg`} alt="thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title">{exercise.video.name}</h5>
                                        <p className="card-text">{exercise.description}</p>
                                        <button type="button" className="btn btn-primary toplay" data-toggle="modal" data-target="#exampleModal" onClick={() => { setVideo(exercise.video.video_link); setVideoTitle(exercise.video.name); }}>
                                            Watch Video
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog tocenter">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{videoTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setVideo("") }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {video ? (

                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            ) : ""}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sessions
