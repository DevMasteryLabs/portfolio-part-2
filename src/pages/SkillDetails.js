import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SkillDetails() {
    const params = useParams()
    console.log(params);
    const [technologies, setTechnologies] = useState([])
    const [tech, setTech] = useState(null)
    useEffect(() => {
      axios.get('https://devmastery-assets.vercel.app/technologies.json')
        .then((result) => {
          console.log(result.data)
          setTechnologies(result.data)
        })
        .catch((error) => {
          console.log(error)
        })
  
    }, [])
    useEffect(() => {
      const found = technologies.find((t) => t.id === params.id)
      setTech(found)
    }, [technologies, params])
  return (
    <div className='container mt-5' style={{textAlign: 'center'}}>
        <h1>{tech && tech.name}</h1>
        <img style={{width: 150}} src={tech && tech.image} alt={tech && tech.name}/> 
        <p> {tech && tech.description} </p>
    </div>
  )
}

export default SkillDetails