const projects =[{
    "name": "The Dream Achiever",
    "live": "https://the-dream-achiever.netlify.app/",
    "image": "https://i.imgur.com/NuqZB76.png",
    "showcase": "Full stack application with Ruby on Rails and React."
    }, {
    "name": "Movie Reviewer",
    "live": "https://expo.dev/@katiepestotnik/movie-reviewer",
    "image": "https://i.imgur.com/ih7WpAK.png",
    "showcase": "Mobile full stack application with React Native and Express."  
},
{
    "name": "My Japanese Library",
    "live": "https://my-japanese-library.herokuapp.com/",
    "image": "https://i.imgur.com/Axj10XR.png",
    "showcase":"Full stack application with Express and Embedded Javascript(EJS)."
    },
{
    "name": "The Registry",
    "live": "https://the-registry.netlify.app/",
    "image": "https://i.imgur.com/xovzw0N.png",
    "showcase": "Full stack application with React and Express built as a team using Agile development."
    },
{
    "name": "Explore Nasa",
    "live": "https://explore-nasa.herokuapp.com/",
    "image": "https://i.imgur.com/bx9ceOC.png",
    "showcase": "Static frontend application with Javascript, jQuery, HTML, CSS."
}]

function Projects(props) {
    return <section className='style-projects'>
        {projects.map((project) => {
            return <div>
                <h3 className='title'>{project.name}</h3>
                <a className="anchor-button" rel='noreferrer noopener' target='_blank'
                    href={project.live}><button className='live-button'>Live Project</button></a>
                <div className='background-style'>
                    <img className="size-images" src={project.image} alt="projects" /><div className='showcase'>{project.showcase}</div></div>
                        
            </div>
        })}
    </section>
}

export default Projects;