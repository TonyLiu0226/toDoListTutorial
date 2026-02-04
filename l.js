/* global console */

var t2 = "hello";

let numTasks = 0;

task += 1
t2 += 1
numTasks += 1

if (numTasks === 0) {
    console.log("no tasks");
} else if (numTasks < 10) {
    console.log("You have some tasks to do");
} else {
    console.log("Time to lock in");
}

for (const task of tasks) {
    console.log(task);
}

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}

let tasks = ["buy Milk", "buy Bread", "buy Eggs"];

tasks.push("buy Cheese");
tasks.push("Go to workshop");
tasks.pop();

tasks.filter((task) => task.includes("Milk"));

tasks.map((task) => task.toUpperCase());

var grades = {
    update: updateGrades()
};

grades.math = 'A';
grades.science = 99;

console.log(grades['math']);
console.log(grades.science);


let rooms = new Map();

let grades = new Map([['math', 'A'], ['science', 99]]);

rooms.set(99, ['Math 301, CPSC 110, CPEN 211']);
console.log(rooms.get(99)); //['Math 301, CPSC 110, CPEN 211']
console.log(rooms.size); //1
rooms.set(99, ['Math 301, CPSC 110, CPEN 211', 'Math 302']);

rooms.delete(99);

console.log(rooms.has(99)); //false

rooms.forEach((value, key) => {
    console.log(key, value);
});

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(696969, 67));

const repeatString = (str, num) => {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

repeatString("Hello", 3);

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

fetchData().then((data) => {
    console.log(data);
});

const saveTask = new Promise((resolve, reject) => {
    const success = Math.random() > 0.3;
  
    setTimeout(() => {
      if (success) {
        resolve("Task saved successfully");
      } else {
        reject("Failed to save task");
      }
    }, 1000);
  });

  
  saveTask
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });


  async function saveTask() {
    try {
      const result = await new Promise((resolve, reject) => {
        const success = Math.random() > 0.3;
  
        setTimeout(() => {
          if (success) {
            resolve("Task saved successfully");
          } else {
            reject("Failed to save task");
          }
        }, 1000);
      });
  
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  elt1 = document.getElementById('my-element');
  elt2 = document.getElementByClassName('my-element');

  elt3 = document.querySelector('.my-element'); //first element with class my-element
  elt4 = document.querySelectorAll('.my-element'); //same as elt2

  elt5 = document.querySelector('div'); //first div element in document

const list = document.getElementById('my-list');

let li = document.createElement("li");
li.textContent = "New task";
li.innerHTML = "<strong>New task</strong> <button>Delete</button>";
list.appendChild(li);

list.style.backgroundColor = "red";
list.style.padding = "10px";

let firstImg = document.querySelector('img');
firstImg.src = "https://example.com/image.jpg";
firstImg.alt = "Example image";
firstImg.width = 100;
firstImg.height = 100;
firstImg.style.borderRadius = "50%";

firstImg.classList.add('rounded');

element = document.querySelector('button');

formInput = document.getElementById('taskInput');

element.addEventListener("click", function() {
    console.log("Button clicked");
});

formInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        console.log("Enter key pressed");
    }
});

formInput.addEventListener("input", function(e) {
    console.log(e.target.value);
});

const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</button>


const [showForm, setShowForm] = useState(false);
<button onClick={() => setShowForm(!showForm)}>
  Toggle Form
</button>

{showForm && (
  <form>
    <input placeholder="New task" />
    <button>Add</button>
  </form>
)}

export const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [isForm, isNotForm] = useState(false);

    useEffect(() => {
        console.log("Component rendered");
      }, []);

    useEffect(() => {
        if (isForm) {
            console.log("Form enabled");
        } else {
            console.log("Form disabled");
        }
      }, [isForm]);

    return (
        <div>
            <h1>My Component</h1>
            <button onClick={() => setCount(count + 1)}>
                <p>Clicked {count} times</p>
                Clicked {count} times
            </button>
            {isForm && (
                <form>
                    <input placeholder="New task" />
                    <button>Add</button>
                </form>
            )}
            <button onClick={() => setIsForm(!isForm)}>
                {isForm ? "Hide Form" : "Show Form"}
            </button>
        </div>
    );
}

export default MyComponent;
