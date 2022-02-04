import { useState, useEffect } from 'react';

function Projects({URL}) {
    const [projects, setProjects] = useState(null);
    const getProjects = async () => {
        const response = await fetch(URL + "projects");
        const data = await response.json();
        setProjects(data);
    };
    useEffect(() => getProjects(), []);

    const loaded = () => {
        return <section className='style-projects'>
            {projects.map((project) => {
                return <div>
                    <h3 className='title'>{project.name}</h3>
                    <a className="anchor-button"rel='noreferrer noopener' target='_blank'
                        href={project.live}><button className='live-button'>Live Project</button></a>
                    <div className='background-style'>
                        <img className="size-images" src={project.image} alt="projects" /><div className='showcase'>{project.showcase }</div></div>
                        
                </div>
            })}
        </section>
    }
    
    return projects?loaded():<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
}

export default Projects;