const skills = [{
    tech: "JavaScript",
    img: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
},{
    tech: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
},{
    tech: "React Native",
    img: "https://miro.medium.com/max/1400/1*kQ11_TLArd7xGuWiSomBSg.png"
},{
    tech: "Ruby",
    img: "https://ih1.redbubble.net/image.523774367.2277/raf,750x1000,075,t,FFFFFF:97ab1c12de.u6.jpg"
},{
    tech: "Ruby on Rails",
    img: "https://miro.medium.com/max/1400/1*lEXUSkEm6M6kIHmKP9HtWg.png"
},{
    tech: "PostgreSQL",
    img: "https://icon-library.com/images/postgresql-icon/postgresql-icon-12.jpg"
},{
    tech: "SQL",
    img: "https://www.macworld.co.uk/cmsdata/features/3638150/setup_learn_sql_mac_thumb800.jpg"
},{
    tech: "Node.js",
    img: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
},{
    tech: "Express.js",
    img: "https://miro.medium.com/max/1400/1*8ETcaw-gA1dYW4EFxqGK3w.png"
},{
    tech: "mongoDB",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png"
},{
    tech: "CSS",
    img: "https://static.cdnlogo.com/logos/c/18/css.svg"
},{
    tech: "HTML",
    img: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
},{
    tech: "Bootstrap",
    img: "https://code.makery.ch/library/html-css/part7/bootstrap-logo.png"
},{
    tech: "jQuery",
    img: "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png"
},{
    tech: "EJS",
    img: "https://techdoma.in/images/overview-of-ejs-templating-engine.png"
    }, {
    tech: "git",
    img: "https://ih1.redbubble.net/image.1706995751.4767/st,small,507x507-pad,600x600,f8f8f8.jpg"
    }, {
    tech: "GitHub",
    img: "https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png"
}
]



function Skills(props) {
    return (
        <div className="full-page">
            {skills.map((skill) => {
                return (
                <div className="skill-box">
                    <img src={skill.img} alt="tech logo" className="logo-img" />
                    <div className="tech-name">{skill.tech}</div>
                </div>)
            })}

        </div>
    );
}

export default Skills;