import React from "react";


function About() {
  return (
    <main role="main" className="main flex-shrink-0">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">About</h1>
                        <hr></hr>
                        <img id= "aboutImg" className="img mx-auto d-block" src="about.jpg" alt="placeholder"></img>
                    </div>
                    <hr></hr>
                    <p className="text-center">I am looking for a full-stack web developer position where I can join the team in a
                        thriving, exciting, and growing company. I am a self-motivated individual with great
                        knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web
                        development, as well as strong skills and ability in writing clean and efficient code. I
                        have a keen eye for details, strong ability to implement mock-ups, and understanding of
                        great user experience design.
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>
  );
}

export default About;
