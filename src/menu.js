import './styles.css';
import burgerImg from './burger.png';
export default function menuModule(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";


    const food1 = document.createElement("div");
    food1.className = "food";
    const img1 = document.createElement("img");
    img1.src = burgerImg;
    const foodText = document.createElement("p");
    foodText.className = "foodText";
    foodText.textContent = "Juicy Burger $6.99"
    food1.appendChild(img1);
    food1.appendChild(foodText);


    const food2 = document.createElement("div");
    food2.className = "food";
    const img2 = document.createElement("img");
    img2.src = burgerImg;
    const foodText2 = document.createElement("p");
    foodText2.className = "foodText";
    foodText2.textContent = "Juicy Burger $6.99"
    food2.appendChild(img2);
    food2.appendChild(foodText2);


    const food3 = document.createElement("div");
    food3.className = "food";
    const img3 = document.createElement("img");
    img3.src = burgerImg;
    food3.appendChild(img3);
    const foodText3 = document.createElement("p");
    foodText3.className = "foodText";
    foodText3.textContent = "Juicy Burger $6.99"
    food3.appendChild(foodText3);

    const food4 = document.createElement("div");
    food4.className = "food";
    const img4 = document.createElement("img");
    img4.src = burgerImg;
    food4.appendChild(img4);
    const foodText4 = document.createElement("p");
    foodText4.className = "foodText";
    foodText4.textContent = "Juicy Burger $6.99"
    food4.appendChild(foodText4);

    const food5 = document.createElement("div");
    food5.className = "food";
    const img5 = document.createElement("img");
    img5.src = burgerImg;
    food5.appendChild(img5);
    const foodText5 = document.createElement("p");
    foodText5.className = "foodText";
    foodText5.textContent = "Juicy Burger $6.99"
    food5.appendChild(foodText5);

    const food6 = document.createElement("div");
    food6.className = "food";
    const img6 = document.createElement("img");
    img6.src = burgerImg;
    food6.appendChild(img6);
    const foodText6 = document.createElement("p");
    foodText6.className = "foodText";
    foodText6.textContent = "Juicy Burger $6.99"
    food6.appendChild(foodText6);

    wrapper.appendChild(food1);
    wrapper.appendChild(food2);
    wrapper.appendChild(food3);
    wrapper.appendChild(food4);
    wrapper.appendChild(food5);
    wrapper.appendChild(food6);
    content.appendChild(wrapper);
}