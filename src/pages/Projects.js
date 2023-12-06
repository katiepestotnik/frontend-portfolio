const projects = [
    {
        "name": "My Japanese Library",
        "live": "https://my-japanese-library-8622f44bc0ba.herokuapp.com/",
        "image": "https://i.imgur.com/Axj10XR.png",
        "showcase": "Full stack application with Express and Embedded Javascript(EJS).",
        "github":"https://github.com/katiepestotnik/my-japanese-library"
    },
    {
        "name": "The Dream Achiever",
        "live": "https://the-dream-achiever.netlify.app/",
        "image": "https://i.imgur.com/NuqZB76.png",
        "showcase": "Full stack application with Ruby on Rails and React.",
        "github":"https://github.com/katiepestotnik/goal-setter-react"
    },
    {
        "name": "The Registry",
        "live": "https://the-registry.netlify.app/",
        "image": "https://i.imgur.com/xovzw0N.png",
        "showcase": "Full stack application with React and Express built as a team using Agile development.",
        "github":"https://github.com/katiepestotnik/the-registry-frontend"
    },
    {
        "name": "Movie Reviewer",
        "live": "https://expo.dev/@katiepestotnik/movie-reviewer",
        "image": "https://i.imgur.com/ih7WpAK.png",
        "showcase": "Mobile full stack application with React Native and Express.",
        "github":"https://github.com/katiepestotnik/movie-reviewer-frontend"
    },
    {
        "name": "Ellie's Page",
        "live": "https://ellies-page.netlify.app/",
        "image": "https://i.imgur.com/fO2rkD6.png",
        "showcase": "Static, mobile responsive frontend application with handmade carousel, made as a gift for my niece.",
        "github": "https://github.com/katiepestotnik/ellies-page"
    },
    {
        "name": "Explore Nasa",
        "live": "https://katiepestotnik.github.io/explore-nasa/",
        "image": "https://i.imgur.com/bx9ceOC.png",
        "showcase": "Static frontend application with Javascript, jQuery, HTML, CSS.",
        "github":"https://github.com/katiepestotnik/explore-nasa"
    },
    {
        "name": "Tic Tac Toe",
        "live": "https://katiepestotnik.github.io/TTT/",
        "image": "https://i.imgur.com/DSiQhgS.png",
        "showcase": "Static, mobile responsive frontend browser game.",
        "github": "https://github.com/katiepestotnik/TTT"
    },

]

function Projects(props) {
    return (
        <div className="entire">
            <section className='style-projects'>
            {projects.map((project) => {
            return <div>
                <h3 className='title'>{project.name}</h3>
                <div className="link-buttons">
                <a className="anchor-button" rel='noreferrer noopener' target='_blank'
                    href={project.live}><button className='live-button'>Live Project</button></a>
                                <a className="anchor-button" rel='noreferrer noopener' target='_blank'
                    href={project.github}><button className='live-button'>GitHub</button></a></div>
                <div className='background-style'>
                    <img className="size-images" src={project.image} alt="projects" /><div className='showcase'>{project.showcase}</div></div>
                        
                </div>
            })}
            </section>
        </div>)
}

export default Projects;