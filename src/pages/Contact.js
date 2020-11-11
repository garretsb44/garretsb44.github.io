import React, { Component } from "react";




function Contact() {
  return (
    <main role="main" class="main flex-shrink-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title">Contact</h1>
                <hr></hr>
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: Garret Bright</li>
                    <li class="list-group-item">Cell: (707)816-2261</li>
                  </ul>
                </div>
                <hr></hr>
                <div class="card-body">
                  <a href="#" class="card-link">Email</a>
                  <a href="https://www.linkedin.com/in/garret-bright-835324b2/" target="_blank" class="card-link">LinkedIn Profile</a>
                  <a href="https://github.com/garretsb44" target="_blank" class="card-link">GitHub Profile</a>
                  <a href="https://drive.google.com/file/d/1DRakAIWe8-wLbv_k5N3jX6fjttKfjCET/view?usp=sharing" target="_blank" class="card-link">Resume</a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
    
    );
}

export default Contact;
