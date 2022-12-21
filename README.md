# BeBright

BeBright is our MVP design entry to the Bright Network Technology Academy's 2022 hackathon.


**BeBright blurb:**

BeBright is a social media web app designed to help bring the spark back to office conversations and give a new, more flexible route to knowledge sharing. It takes inspiration from the networking side of an app like LinkedIn, but helps reduce the formality/effort that users may feel pressured by, through short daily prompted posts which are inspired by BeReal. The idea is to help employees (particularly new joiners) feel comfortable getting engaged in their offices/teams, while taking away some of the pressures of other networking options through flexibility of posts and creating conversation openers.



## Contents

* [Project Description – project outline and tech stack](#Project-Description)
    * [Brief](#Brief)
    * [Tech Stack](#Tech-Stack)
* [Setup Instructions](#Setup-Instructions)
* [Acknowledgements](#Acknowledgements)



## Project Description

### Brief
The aim for this hackathon ("HACKFORCHANGE") was to acquire new skills, get innovative and break down barriers.
 
For this HACK, we were asked to reimagine the work-place as a completely inclusive environment, based on the following prompts:
 
- How can organisations build thriving inclusive communities?
- How can an organisation ensure products and services reach beyond their traditional customer segments?


### Tech Stack

Back-end: Java, SpringBoot (Spring Cloud, Spring Security), MongoDB, Docker, Consul, Zipkin, Firebase (for local cloud storage)

Front-end: React, HTML, CSS, JavaScript



## Set-up Instructions

- Git clone our project.
- We recommend using IntelliJ for running the back-end and VS Code for the front-end. Open them in their respective IDE.

Back-end set-up:

    1. Ensure that docker desktop is installed on your device and running.

    2. Install the docker plugin for IntelliJ.

    3. Ensure that all containers in the "docker-compose.yml" file are running (these should be mongo, mongo-express, consul and zipkin).

    - To check these have run successfully, open up a terminal command window, go to the back-end directory and run the ‘docker compose ps’ command.

    4. Run all 5 micro-service applications from IntelliJ, ensuring that you run ApiGWApplication first (followed by UserApplication, PostApplication, CommentApplication and InterestApplication in any order).

    5. Once all 5 services are running, you can check consul on 'localhost:8500' to ensure they have started properly.

Frontend notes:

    1. Ensure you’re in the ‘bebright_FE’ directory in your VS Code terminal, then run the ‘npm install’ command to get node modules.

    2. Run ‘npm install firebase’ in the same ‘bebright_FE’ directory.

    3. Run 'npm start' to have the front-end visible in your browser on 'localhost:3000'.



## Acknowledgements

- [Aaron](https://github.com/Aaron-Nazareth)
- [Adib](https://github.com/AdibZB)
- [Darshil](https://github.com/DarshilDholakia)