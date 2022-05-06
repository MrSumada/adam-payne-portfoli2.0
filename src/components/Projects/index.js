import React, { useState } from "react";
import imageIdeafora from "../../assets/images/ihaveanideafora-grab.jpg";
import imageConch from "../../assets/images/food-conch-logo.jpg";
import imageBlog from "../../assets/images/build-a-blog-logo.jpg";
import imageWorkday from "../../assets/images/workday-hours.jpg";
import imageQuiz from "../../assets/images/code-quiz-logo.jpg";

function Projects() {

    const [projectsList] = useState([
        {
            name: 'ideafora',
            description: 'Ideafora.com is a platform designed to bridge the communication gap between creative thinkers and skilled developers',
            link: 'https://ihaveanideafora.herokuapp.com/',
            image: imageIdeafora
        },
        {
            name: 'Food Conch',
            description: 'Whether you are indecisive on what recipe to cook at home or what restuarant to eat at, the Food Conch will help!',
            link: 'https://alessandrob96.github.io/The-Food-Conch/',
            image: imageConch
        },
        {
            name: 'Build a Blog',
            description: 'The place for anyone to create, edit, and comment on blog posts!',
            link: 'https://build-a-blog.herokuapp.com/',
            image:  imageBlog
        },
        {
            name: 'Draggable Workday',
            description: 'A simple calendar app to schedule your work day',
            link: 'https://mrsumada.github.io/draggable-hourly-workday-scheduler/',
            image:  imageWorkday
        },
        {
            name: 'Code Quiz',
            description: 'The timed javascript quiz made with javascript.',
            link: 'https://mrsumada.github.io/javascript-coded-javascript-code-quiz/',
            image:  imageQuiz
        }
    ])
    // const [currentProject, setCurrentProject] = useState();

    return (
        <section className="projects">
            {projectsList.map((site, i) => (
                <div 
                    className="project-container"
                    style={{ backgroundImage: `url(${site.image})` }}
                    key={site.name}
                    >
                    <a id={`project-${i}`}
                        className="project-link"
                        href={site.link}
                        key={site.name}
                        >{site.name}
                    </a>
                    {/* <img 
                        src={site.image}
                    /> */}
                    {site.description}
                </div>
            ))}
            
        </section>
    )
}

export default Projects;