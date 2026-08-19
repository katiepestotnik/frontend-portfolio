import pdf from '../resume2026-simple.pdf'
const about = {
    "name": "Katie Pestotnik",
    "photo": "https://i.imgur.com/h5tHxQt.jpg",
    "brand": "Computer systems enthusiast with a passion for solving problems with logical algorithms while building applications. Previously served as a Senior Instructional Associate for software engineering at General Assembly. Currently pursuing a BS in Computer Science to strengthen software development and computer science skills." ,
    "tech": "Javascript, React, React Native, Ruby, Ruby on Rails, MongoDB, PostgreSQL, Express, Node, CSS, HTML, Bootstrap",
    "gitHub": "https://github.com/katiepestotnik",
    "recognition": "https://i.imgur.com/SpjbCKk.png"
}

function About() {
    return (
        <>
            <br />
            <section className='card-katie'>
                <img className="headshot" src={about.photo} alt="Headshot" />
                <div id='contact' className='card-items'>
                    <h1 className='name'>{about.name}</h1>
                    <h1 className="software">Computer Science Student B.S.</h1>
                    <div className="logo-box">
                        <a href="https://github.com/katiepestotnik" target="_blank" rel="noopener noreferrer" className='contact-info'
                        ><img className="logos" src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png" alt="github logo"/></a>
                        <a href={pdf} target="_blank" className='contact-info' rel='noreferrer noopener'><img className="logos" src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" alt="resume logo" /></a>
                    </div>
                </div>
            </section>
            <div className='brand'>
                <h2 className="blurb-title">A little about me...</h2>
                <div className='blurb'>{about.brand}<br />
                </div>
            </div>
        </>           
    );
};
export default About;