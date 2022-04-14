import "./style.css";

const ul = document.querySelector("ul");

const todos = [
  {
    text: "I'am a todo",
    done: false,
  },
  {
    text: "to do JavaScript",
    done: true,
  },
];

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="todo ${todo.done ? "done" : ""}"></span>
        <p>${todo.text}</p>
        <button>Delete</button>
    `;
  return li;
};

displayTodo();
