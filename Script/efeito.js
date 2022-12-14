
const efects = document.querySelector('ul.efects');

for (let i = 0; i < 50; i++){
    const li = document.createElement("li") ;
    const random = (min, max) => Math.random() * (max - min) + min;
    
    
    const size = Math.floor(random(1 ,2));
    const position = random(1, 99);
    const delay = random(5, 0.15);
    const duration = random(5, 8);


    li.style.width = `${size}%`;
    li.style.height = `${size}%`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    efects.appendChild(li);
}

