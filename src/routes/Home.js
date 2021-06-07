import React, { useEffect, useState } from 'react'
import './css/home.css'
import axios from '../axios'
import { Link } from 'react-router-dom'


function Home() {
    const imagePath = "http://dumorefitness.himalayantechies.com/files/"
    const [Programslist, setProgramslist] = useState([
        // {
        //     "id": 14,
        //     "name": "Iron Program",
        //     "description": "",
        //     "imageUrl": "O4U0R2B2BS-1524369060.jpg",
        //     "type": 2,
        //     "repeat_for": 3,
        //     "created": "2021-05-12T16:55:09+00:00",
        //     "modified": "2021-05-16T13:12:28+00:00",
        //     "updated": null
        // },
        // {
        //     "id": 17,
        //     "name": "Kims workout",
        //     "description": "Hello Kim, how are you doing",
        //     "imageUrl": "arm-exercise.jpg",
        //     "type": 5,
        //     "repeat_for": 5,
        //     "created": "2021-05-14T08:20:45+00:00",
        //     "modified": "2021-05-16T13:12:38+00:00",
        //     "updated": null
        // },
        // {
        //     "id": 18,
        //     "name": "Ujjwals Workout",
        //     "description": "",
        //     "imageUrl": "ujjwal-workout.jpg",
        //     "type": 2,
        //     "repeat_for": 4,
        //     "created": "2021-05-15T04:28:38+00:00",
        //     "modified": "2021-05-16T13:12:51+00:00",
        //     "updated": null
        // },
        // {
        //     "id": 19,
        //     "name": "Nikita Prgoram",
        //     "description": "Hello Nikita",
        //     "imageUrl": "nikita-program.jpg",
        //     "type": 4,
        //     "repeat_for": 6,
        //     "created": "2021-05-17T06:39:16+00:00",
        //     "modified": "2021-06-01T10:47:13+00:00",
        //     "updated": null
        // },
        // {
        //     "id": 20,
        //     "name": "May Program 3 Day",
        //     "description": "",
        //     "imageUrl": "3-program-day.jpg",
        //     "type": 3,
        //     "repeat_for": 4,
        //     "created": "2021-05-18T16:55:35+00:00",
        //     "modified": "2021-06-01T10:49:41+00:00",
        //     "updated": null
        // }
    ])


    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("../data/programs.json")
            setProgramslist(res.data.programs)
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
                    <div className="card-header d-flex align-items-center justify-content-between"><h2 className="headertitle">Programs</h2></div>
                    <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="card-text d-flex align-items-center flex-wrap justify-content-center">
                            {Programslist.map((program) => (
                                <div className="card eachprogram" key={program.id}>
                                    <img className="card-img-top" src={imagePath + program.imageUrl} alt="Card" />
                                    <div className="card-body">
                                        <h5 className="card-title">{program.name}</h5>
                                        <p className="card-text">{program.description}</p>
                                        <Link to={`/programs/${program.id}`} params={{ id: program.id }} className="btn btn-primary toprogram">Check Sessions</Link>
                                        {/* <a href="#" className="btn btn-primary toprogram">Go somewhere</a> */}
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

export default Home
