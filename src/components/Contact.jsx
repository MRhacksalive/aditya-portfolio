import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact(){

return(

<SectionWrapper id="contact">

<div className="contact">

<img
src="/profile.jpeg"
className="profile-img"
/>

<h2>Contact</h2>

<div className="contact-info">

<div className="contact-item">
<FaEnvelope />
<a href="mailto:adityakroy123@gmail.com">
adityakroy123@gmail.com
</a>
</div>

<div className="contact-item">
<FaPhone />
<a href="tel:+91-9885173701"><span>+91-9885173701</span></a>
</div>
3
</div>

<div className="contact-socials">

<a
href="https://github.com/mrhacksalive"
target="_blank"
rel="noopener noreferrer"
>
<FaGithub />
</a>

<a
href="https://www.instagram.com/adityaa__roy/"
target="_blank"
rel="noopener noreferrer"
>
<FaInstagram />
</a>

<a
href="https://www.linkedin.com/in/aditya-roy-10ad9819/"
target="_blank"
rel="noopener noreferrer"
>
<FaLinkedin />
</a>

</div>

</div>

</SectionWrapper>

)
}