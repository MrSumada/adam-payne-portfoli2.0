import React, { useState } from "react";
import imageIdeafora from "../../assets/images/ihaveanideafora-grab.jpg";
import imageConch from "../../assets/images/food-conch-logo.jpg";
import imageBlog from "../../assets/images/build-a-blog-logo.jpg";
import imageWorkday from "../../assets/images/workday-hours.jpg";
import imageQuiz from "../../assets/images/code-quiz-logo.jpg";
import { Link } from 'react-router-dom';

function Projects() {

    const [projectsList] = useState([
        {
            name: 'ideafora',
            description: 'Ideafora.com is a platform designed to bridge the communication gap between creative thinkers and skilled developers',
            link: 'https://ihaveanideafora.herokuapp.com/',
            github: 'https://github.com/becketbowes/ihaveanideafora',
            image: imageIdeafora
        },
        {
            name: 'Food Conch',
            description: 'Whether you are indecisive on what recipe to cook at home or what restuarant to eat at, the Food Conch will help!',
            link: 'https://alessandrob96.github.io/The-Food-Conch/',
            github: 'https://github.com/AlessandroB96/The-Food-Conch',
            image: imageConch
        },
        {
            name: 'Build a Blog',
            description: 'The place for anyone to create, edit, and comment on blog posts!',
            link: 'https://build-a-blog.herokuapp.com/',
            github: 'https://github.com/MrSumada/build-a-blog',
            image:  imageBlog
        },
        {
            name: 'Draggable Workday',
            description: 'A simple calendar app to schedule your work day',
            link: 'https://mrsumada.github.io/draggable-hourly-workday-scheduler/',
            github: 'https://github.com/MrSumada/draggable-hourly-workday-scheduler',
            image:  imageWorkday
        },
        {
            name: 'Code Quiz',
            description: 'The timed javascript quiz made with javascript.',
            link: 'https://mrsumada.github.io/javascript-coded-javascript-code-quiz/',
            github: 'https://github.com/MrSumada/javascript-coded-javascript-code-quiz',
            image:  imageQuiz
        }
    ])

    return (
        <section className="projects">
            {projectsList.map((site, i) => (
                <a id={`project-${i}`}
                    href={site.link}
                >
                    <div 
                        className="project-container"
                        style={{ backgroundImage: 
                        `linear-gradient(to bottom, rgba(39, 218, 176, 0.95) 0%,rgba(30, 134, 189, 1) 100%), url(${site.image})`,
                            backgroundSize: 'cover', backgroundPosition: 'center'}}
                        key={site.name}
                    >
                        <h2 className="project-header" key={site.name}>
                            {site.name}
                        </h2>
                        {/* <img 
                            src={site.image}
                        /> */}
                        <p className="project-description">{site.description}</p>
                        <a className="github-link" href={site.github}>Github</a>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default Projects;