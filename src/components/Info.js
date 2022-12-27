import profile from "../images/profile.png"

export default function Info() {
    return (
        <div className="info">
            <img src={profile} className="profile-pic"></img>
            <div className="info-items">
                <p className="my-name">Karan Shah</p>
                <p className="role">Software Engineer</p>
                <p className="website">https://www.github.com/karanshahh</p>

                <div className="buttons">
                    <a className="button-linkedin" href="https://www.linkedin.com/in/karanshahh/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                    <a className="button-email" href="mailto:karanshah.cs@gmail.com" target="_blank" rel="noreferrer">
                        <i class="fa-regular fa-envelope"></i>Email
                    </a>
                </div>
            </div>
        </div>
    )
}