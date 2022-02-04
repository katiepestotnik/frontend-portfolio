import { useState, useEffect } from 'react'; 

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
                <div  className='brand'>
                    <h2>Why I love software development...</h2>
                    <div className='blurb'>{about.brand}
                    </div>
                </div>
                <div>{about.tech}</div>
            <section className='card'>
                    <img className="headshot" src={about.photo} alt="Headshot" />
                    <div className='card-items'>
                <h1 className='name'>{about.name}</h1>
                <a href="mailto:katie.pestotnik@gmail.com" className='contact-info'>{about.email}</a>
                        <a href="https://github.com/katiepestotnik" target="_blank" rel="noopener noreferrer" className='contact-info'
                            style={{ display: "block" }}>GitHub</a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSeEK25Q_oQtS6m_HsBvtwdPUW-cs6u-Tg2o6j449hF79yRK5uulWv0eP6-CgmOpw/pub" target="_blank" rel="noreferrer noopener" className='contact-info'>Resume</a>
                    </div>
                </section>
                </>

                
        )
    }

    return about ? loaded(): (<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>);
}

export default About;