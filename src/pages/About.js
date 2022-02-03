import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';


function About({ URL }) {
    const [about, setAbout] = useState(null);
    const getAbout = async () => {
        const response = await fetch(URL + "about");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => getAbout(), []);
    const loaded = () => {
        return (
            <>
                <h1>{about.name}</h1>
                <div>{about.brand}</div>
                <img src={about.photo} alt="Headshot" />
                <a href="mailto:katie.pestotnik@gmail.com" style={{display: "block"}}>{about.email}</a>
                <a href="https://github.com/katiepestotnik" target="_blank" rel="noopener noreferrer" style={{display: "block"}}>GitHub</a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSeEK25Q_oQtS6m_HsBvtwdPUW-cs6u-Tg2o6j449hF79yRK5uulWv0eP6-CgmOpw/pub" target="_blank" rel="noreferrer noopener">Resume</a>
                <div>{about.tech}</div>
                </>
                
        )
    }

    return about ? loaded(): (<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>);
}

export default About;