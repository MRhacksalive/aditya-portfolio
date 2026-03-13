import SectionWrapper from "./SectionWrapper";

export default function Contact(){

return(

<SectionWrapper id="contact">

<div className="contact">

<img
src="/profile.jpeg"
className="profile-img"
/>

<h2>Contact</h2>

<p>
Email: 
<a href="mailto:adityakroy123@gmail.com">
adityakroy123@gmail.com
</a>
</p>

<p>Phone: +91-9885173701</p>

<p>
<a
href="https://github.com/mrhacksalive"
target="_blank"
rel="noopener noreferrer"
>
GitHub
</a>
</p>

<p>
<a
href="https://www.instagram.com/adityaa__roy/"
target="_blank"
rel="noopener noreferrer"
>
Instagram
</a>
</p>

</div>

</SectionWrapper>

)
}