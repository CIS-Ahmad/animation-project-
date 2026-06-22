
const Skills = [
    {
        Icon: "🔥",
        Name: "Motivator"
    },
    {
        Icon: "🧑‍💻",
        Name: "Programmer"
    },
    {
        Icon: "🖥️",
        Name: "Full-Stack Developer"
    },
    {
        Icon: "🎨",
        Name: "Frontend Designer"
    },
    {
        Icon: "🧮",
        Name: "Problem Solver"
    },
    {
        Icon: "👥",
        Name: "Scrum Master"
    },
    {
        Icon: "🧠",
        Name: "Machine Learning Engineer"
    },
    {
        Icon: "🗄️",
        Name: "Database Architect"
    },
    {
        Icon: "📈",
        Name: "Data Engineer"
    },
    {
        Icon: "👑",
        Name: "Product Owner"
    },
    {
        Icon: "🛠️",
        Name: "Technical Leader"
    },
    {
        Icon: "🚀",
        Name: "Agile Practitioner"
    }
];

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "Java",
    "Python",
    "SQL",
    "MongoDB",
    "React",
    "Node.js"
];

const Icon = getEleUsingID("Icon");
const Name = getEleUsingID("Skill");
const techno = getEleUsingID("technologie");


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEleUsingID(ID) {
    return document.getElementById(ID);
}

function CreateElement(name, className, id = null, textContent = "", father = null) {

    const element = document.createElement(name);
    element.classList.add(className);

    if (textContent !== "") {
        element.textContent = textContent;
    }

    if (id) {
        element.id = id;
    }

    if (father) {
        const parent = getEleUsingID(father);
        parent.appendChild(element);
    }
    else {
        document.body.appendChild(element);
    }

    return element;
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Display() {
    let Skill = Skills[getRandomNumber(0, 11)];
    let technologie = technologies[getRandomNumber(0, 11)];

    Icon.textContent = Skill.Icon;
    Name.textContent = Skill.Name;


    techno.textContent = technologie;
    techno.style.color = getRandomColor();

}


document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < 3; i++) {
        CreateElement("button", "but", null, `hi i am #${i + 1}`, "butGroup");
    }

});
setInterval(() => {
    Display();
}, 3000);