import React from "react";
import headshot from "../../assets/images/class-pic-small.jpg";

function About(){
    return (
        <section className="about">
            <img src={headshot} alt="A picture of Adam" className="hero"/>
            <p>
            Adam Payne is a web designer, film producer and editor, motion graphics designer, and improv actor based out of Brooklyn, New York. He is a graduate of Yale University and Columbia University's Coding Bootcamp, the former of which awarded him the Seymour L. Lustman Memorial Prize for artistic and cultural contributions to the college. He's worked as a producer, designer, and editor for the well-respected music tutorial website Cracking the Code for over 10 years. For the past five years, he has performed in hundreds shows at the Magnet Theater, a world-renowned improv theater based out of New York. And while he can write a serious bio when necessary, he tries not to take life too seriously in the long run.
            </p>
        </section>
    )
}

export default About;