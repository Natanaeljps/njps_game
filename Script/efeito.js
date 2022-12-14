
const efects = document.querySelector('ul.efects');

for (let i = 0; i < 11; i++){
    const li = document.createElement("li") ;
    const random = (min, max) => Math.random() * (max - min) + min;
    
    
    const size = Math.floor(random(10 ,100));
    const position = random(1, 99);
    const delay = random(5, 0.15);
    const duration = random(5, 8);

    const radius = random(50, 80);


    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}%`;

    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    li.style.borderRadius = `${radius}%`;

    efects.appendChild(li);
}

