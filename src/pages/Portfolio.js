import React from "react";



function Portfolio() {
  return (
    <main role="main" className="main flex-shrink-0">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Portfolio</h1>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid py-3 mx-auto d-block" src="project1.jpg" alt="placeholder"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Tarot Card Reader</h5>
                                    <a href="https://github.com/christopher-cruzcosa/life-reading-app" target="_blank" className="card-link">GitHub Repo</a>
                                    <a href="https://christopher-cruzcosa.github.io/life-reading-app/" target="_blank" className="card-link">Deployed</a>
                                  </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid py-3 mx-auto d-block" src="notetaker.jpg" alt="placeholder"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker</h5>
                                    <a href="https://github.com/garretsb44/Note-Taker" target="_blank" className="card-link">GitHub Repo</a>
                                    <a href="https://thawing-dusk-32250.herokuapp.com/" target="_blank" className="card-link">Deployed</a>
                                  </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid py-3 mx-auto d-block" src="burger.jpg" alt="placeholder"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Employee Portfolio</h5>
                                    <a href="https://github.com/garretsb44/burger" target="_blank" className="card-link">GitHub Repo</a>
                                    <a href="https://afternoon-everglades-05163.herokuapp.com/" target="_blank" className="card-link">Deployed</a>
                                  </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid py-3 mx-auto d-block" src="crittergetter.jpg" alt="placeholder"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Critter Getter</h5>
                                    <a href="https://github.com/garretsb44/Critter-Getter" target="_blank" className="card-link">GitHub Repo</a>
                                    <a href="https://mysterious-harbor-86074.herokuapp.com/" target="_blank" className="card-link">Deployed</a>
                                  </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
    );
  }

export default Portfolio;
