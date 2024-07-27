import Image from "next/image"
import mockup from "../images/mockup.png"
import name from "../images/logo.png"

const AboutPage = () => {
    return (
        <div className="section section-about">
            <div id="abouttitle">
                <h1>About Us</h1>
            </div>

            <div className="grid">
                <div>
                    <h1 id="whoweare"> <b className="dark_red-bold">Who </b>We Are</h1>
                    <p>DevDogs is a student-run club at UGA dedicated to benefiting our community through code. Each year, we work together to develop impactful software from concept to completion, learning real-world skills and industry-standard tech along the way. </p>
                </div>
                <Image id="about-us-mascot" src={name} alt="DevDogs Mascot" />
            </div>

            <br />

            <div className="grid">
                <div>
                    <h1 id="whoweare">Our <b className="dark_red-bold">Mission</b></h1>
                    <p>Above all, we aim to provide a space for passionate student developers to take ownership of meaningful projects from concept to completion.</p>
                    <br />
                    <p>In the process, we hope to provide our members the local, personal, and technical tools necessary to incite change of their own, one project at a time.</p>
                </div>
                <Image id="mockup" src={mockup} alt="ACM OSP Mockup" width="650" height="325" />
            </div>
        </div>
    )
}

export default AboutPage;