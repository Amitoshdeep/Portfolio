class SpecialHeader extends HTMLElement{ 
    connectedCallback(){
        this.innerHTML= `
        <header>
        <div class="logo">
            <h1>Amitoshdeep's Portfolio</h1>
        </div>
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/about.html">About</a></li>
                <li><a href="/pages/projects.html">Projects</a></li>
                <li><a href="/pages/resume.html">Resume</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
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
                    <li><br>
                        <h3>Raspberry Pi Pico 2 USB Keyboard Emulation Project</h3>
                        <p>An project design to auto-mate your task :D</p>
                        <a href="/pages/projects.html#pico" >View Project</a><br>
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