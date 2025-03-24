const lightMode = (event) => {
    if(event.code === "Space"){
        event.preventDefault();
        document.body.classList.toggle("light-mode")
    }
}

const triggerlightMode = document.addEventListener("keydown",lightMode)


let buttons = document.querySelectorAll(".buttons .btn");
let rightImg = document.getElementById("rightImg");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        setTimeout(() => {
            if (button.id === "resume") {
                rightImg.innerHTML = `<img src= "images/Myresume.jpg" class= "MyResume">`;
                let resumeImg = document.querySelector(".MyResume");
                resumeImg.classList.add("resume-animation");
            } else if (button.id === "github") {
                window.open("https://github.com/Gaurav2001singh", "_blank");
            }
        }, 500);
    })
})


const contentData = {
    Home: `<div class="contentData" id="homeData">
            <h2>Welcome to My portfolio</h2>
            <img src="images/myImg.jpg">
            <p>Hello,I'm Gaurav Singh.</p>
            <p>Front-End Developer & Tech Enthusiast.</p>
            <p>I have basic knowledge of Node.js and SQL on the backend and am actively exploring more languages, frameworks, and technologies to become a skilled Full-Stack Developer.</p>
            </div>
        `,
    About: `<div class="contentData" id="aboutData">
        <h2>About Me</h2>
        <p>Hi, I'm Gaurav Singh, a passionate and dedicated individual with a strong interest in technology and Web development.</p>
        <hr>
        <h3>My Skills</h3>
        <div>
        <mark>HTML</mark>
        <mark>CSS</mark>
        <mark>JAVASCRIPT</mark>
        </div>
        <hr>

        </div>
    `,
    Services: `<div class="contentData" id="Services">
        <h2>My Services</h2>
        <ul>
            <li>Web Development - Creating modern and responsive websites.</li>
            <li>Software Development - Building scalable and efficient applications.</li>
            <li>Cybersecurity - Learning ethical hacking and security measures.</li>
            <li>Technical Consulting - Helping businesses with tech solutions.</li>
        </ul>
        </div>
    `,
    Projects: `<div class="contentData" id="Projects">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
            <li><strong>Project A:</strong> A full-stack e-commerce website.</li>
            <li><strong>Project B:</strong> A JavaScript-based game using Canvas.</li>
            <li><strong>Project C:</strong> A cybersecurity tool for ethical hacking practice.</li>
        </ul>
        </div>
    `,
    ContactMe: `<div class="contentData" id="ContactMe">
        <h2>Contact Me</h2>
        <p>If you'd like to connect with me, feel free to reach out:</p>
        <ul>
            <li>Email: <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">rajs14571@gmail.com</a></li>
            <li>Phone: +91 8779798560</li>
            <li>Location: Mumbai, India</li>
        </ul>
        </div>
    `
};

let listItems = document.querySelectorAll(".right li");

listItems.forEach(item => {
    item.addEventListener("click", function () {
        const sectionId = this.id;

        // Add fade-out effect
        rightImg.style.opacity = "0";

        setTimeout(() => {
            // Change content
            rightImg.innerHTML = contentData[sectionId] || "<h2>Content not found</h2>";

            // Add fade-in effect
            rightImg.style.opacity = "1";
        }, 300); // 300ms delay for smooth transition
    });
});


let socialList = document.querySelectorAll(".SocialList img");
socialList.forEach((list) => {
    list.addEventListener("click", () => {
        if (list.id === "instagram") {
            window.open("https://www.instagram.com/_gaurav6?igsh=ODNveDM0bHFneHIx", "_blank");
        } else if (list.id === "linkedin") {
            window.open("https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=gaurav-singh-7a5b10320", "_blank")
        }else if(list.id === "twitter"){
            window.open("https://x.com/?lang=en-in", "_blank")
        }else if(list.id === "whatsapp"){
            window.open("https://wa.me/918779798560","_blank")
        }else{
            window.open("https://github.com/Gaurav2001singh","_blank")
        }

    })
})

