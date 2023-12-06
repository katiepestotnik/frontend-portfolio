import pdf from '../CurrentResume.pdf'
const about = {
    "name": "Katie Pestotnik",
    "photo": "https://i.imgur.com/h5tHxQt.jpg",
    "brand": "I am a budding software developer with a background in a variety of administrative roles. I use my grit to solve complex problems by pushing through roadblocks and breaking down the parts of a problem to allow code to run the way it is designed to run. I am motivated by a passion for excellence and personal growth. Coding is truly amazing and the perfect balance of challenges and joys." ,
    "tech": "Javascript, React, React Native, Ruby, Ruby on Rails, MongoDB, PostgreSQL, Express, Node, CSS, HTML, Bootstrap",
    "resume": "https://docs.google.com/document/d/e/2PACX-1vSeEK25Q_oQtS6m_HsBvtwdPUW-cs6u-Tg2o6j449hF79yRK5uulWv0eP6-CgmOpw/pub",
    "email": "Katie.Pestotnik@gmail.com",
    "gitHub": "https://github.com/katiepestotnik",
    "recognition": "https://i.imgur.com/SpjbCKk.png"
}

function About(props) {
    return (
        <>
            <br />
            <section className='card-katie'>
                <img className="headshot" src={about.photo} alt="Headshot" />
                <div id='contact' className='card-items'>
                    <h1 className='name'>{about.name}</h1>
                    <h1 className="software">Software Developer</h1>
                    <div className="software">Katie.Pestotnik@gmail.com</div>
                    <div className="logo-box">
                        <a href="https://github.com/katiepestotnik" target="_blank" rel="noopener noreferrer" className='contact-info'
                        ><img className="logos" src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png" alt="github logo"/></a>
                        <a href={pdf} target="_blank" download="CurrentResume.pdf" className='contact-info' rel='noreferrer noopener'><img className="logos" src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" alt="resume logo" /></a>
                    </div>
                </div>
            </section>
            <div className='brand'>
                <h2 className="blurb-title">A little about me...</h2>
                <div className='blurb'>I am a budding, enthusiastic software developer. <br />Coding is truly amazing and incapsulates the perfect balance of challenges and joys. <br />Solving a coding problem is one of the best ways that I can spend my time.<br />I also spend a lot of time walking my wonderful dogs and playing board games with friends and family. 
                </div>
            </div>
        </>           
    );
};
export default About;