import React from 'react'; 
import 'footer.css'; 

function footer() {
    return (
        <footer class="d-flex align-items-center justify-content-center p-3 mb-5">
            <h1>Let's Connect!</h1>
            <a href="https://github.com/Harrison-Holt" aria-label="Visit Harrison's GitHub profile" title="Visit Harrison's GitHub profile">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/harrison-holt-18a703202" aria-label="Visit Harrison's LinkedIn profile" title="Visit Harrison's LinkedIn profile">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:hholt2901@gmail.com" aria-label="Send an email to Harrison" title="Send an email to Harrison">
                <i class="fa fa-envelope"></i>
            </a>
        </footer>
    ); 
}

export default footer; 