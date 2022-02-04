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
                <br/>
            <section className='card'>
                    <img className="headshot" src={about.photo} alt="Headshot" />
                    <div id='contact'className='card-items'>
                <h1 className='name'>{about.name}</h1>
                <a href="mailto:katie.pestotnik@gmail.com" className='contact-info'>{about.email}</a><br/>
                        <a href="https://github.com/katiepestotnik" target="_blank" rel="noopener noreferrer" className='contact-info'
                        >GitHub</a><br/>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSeEK25Q_oQtS6m_HsBvtwdPUW-cs6u-Tg2o6j449hF79yRK5uulWv0eP6-CgmOpw/pub" target="_blank" rel="noreferrer noopener" className='contact-info'>Resume</a>
                    </div>
                </section>
                <div  className='brand'>
                    <h2>A little about me...</h2>
                    <div className='blurb'>I am a budding, enthusiastic software developer. <br/>Coding is truly amazing and incapsulates the perfect balance of challenges and joys. <br/>Solving a coding problem is one of the best ways that I can spend my time.<br/>Sometimes it is hard to believe that coding is considered a "job"!
                    </div>
                </div>
                </>

                
        )
    }

    return about ? loaded(): (<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>);
}

export default About;