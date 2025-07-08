import './styles.css';
export default function homeModule(){
    const content = document.getElementById("content");

    const heading = document.createElement("div");
    heading.className = "heading";
    const headingText = document.createElement("p");
    headingText.className = "headingText";
    headingText.textContent = "Food Restaurant";

    heading.appendChild(headingText);
    content.appendChild(heading);

    const subHeading = document.createElement("div");
    subHeading.className = "subHeading";
    const subHeadingText = document.createElement("p");
    subHeadingText.className = "subHeadingText";
    subHeadingText.textContent = "We're the best restaurant in town";
    subHeading.appendChild(subHeadingText);
    content.appendChild(subHeading);

}