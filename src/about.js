import './styles.css';
export default function aboutModule(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("div");
    heading.className = "heading";
    const headingText = document.createElement("p");
    headingText.className = "headingText";
    headingText.textContent = "About";

    heading.appendChild(headingText);
    content.appendChild(heading);

    const subHeading = document.createElement("div");
    subHeading.className = "subHeading";
    const subHeadingText = document.createElement("p");
    subHeadingText.className = "subHeadingText";
    subHeadingText.textContent = "Crafted as part of my web development journey, this website is a modern, single-page, build using vanilla JavaScript, HTML, and CSS. It showcases responsive design, dynamic DOM manipulation, and clean component-based structure. Combining aesthetic design with functional code, it reflects my skills in front-end development, and passion for building user-centric web experiences."
    subHeading.appendChild(subHeadingText);
    content.appendChild(subHeading);

}