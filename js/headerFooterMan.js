class SpecialHeader extends HTMLElement{ 
    connectedCallback(){
        this.innerHTML= `
        <header>
        
        <div class="title">
            <h1>Amitoshdeep's Portfolio</h1>
        </div>

        <div class="navbar">
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/about.html">About</a></li>
                    <li><a href="/pages/projects.html">Projects</a></li>
                    <li><a href="/pages/resume.html">Resume</a></li>
                    <li><a href="/pages/contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
        
        </header>
    `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <div class="footer">
        <div class="footer-content">
            <section id="projects">
                <h2>My Projects</h2><br>
                <ul>
                    <li>
                        <h3>Meditrack</h3>
                        <p>A project designed to help users track their mental health.</p>
                        <a href="/pages/projects.html#mediT">View Project</a>
                    </li>
                    <li>
                        <h3>Tic-Tac-Toe Game</h3>
                        <p>An interactive Java game where users can play Tic-Tac-Toe.</p>
                        <a href="/pages/projects.html#Tictac" >View Project</a>
                    </li>
                </ul>
            </section>
            
            <section id="resume">
                <h2>Resume</h2><br>
                <p>Download my resume <a href="/path/to/your/resume.pdf" target="_blank" download>here</a>.</p>
            </section>
            
            <section id="contact">
                <h2>Contact Me</h2><br>
                <p>If you'd like to get in touch, feel free to reach out via email at <a href="mailto:amitosh1999@gmail.com" target="_blank">amitosh1999@gmail.com</a>.</p>
            </section>
        </div>
        
        <div class="copyright">
            <p>&copy; 2024 Amitoshdeep Singh. All rights reserved. | <a href="mailto:amitosh1999@gmail.com">Contact Me</a></p>
        </div>
    </div>
    
        `
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)