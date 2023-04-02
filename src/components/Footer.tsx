import logoLinkedin from "../assets/linkedin.png";
import logoGithub from "../assets/github.png";

const Footer = () => {
    return (
        <span className="flex flex-col text-center">
            <span className="flex justify-center">
                <a href="https://github.com/MelwinC" target="_blank">
                    <img className="w-12" src={logoGithub} alt="logo github" />
                </a>
                <a href="https://www.linkedin.com/in/melwin-chenu-935a59205/" target="_blank">
                    <img className="w-12" src={logoLinkedin} alt="logo linkedin" />
                </a>
            </span>
            <p>Portfolio réalisé "from scratch" par Melwin <span className="font-bold">C.</span></p>
            <p>Copyright © 2023</p>
        </span>
    )
}

export default Footer