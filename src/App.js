import ToDoItem from "./components/ToDoItem";
import { useState } from "react";

const todoItems = [
  { id: 1, title: "ride a bike", isCompleted: true },
  { id: 2, title: "study programming", isCompleted: false },
  { id: 3, title: "read book", isCompleted: false },
  { id: 4, title: "do exercise", isCompleted: false },
  { id: 5, title: "go walk", isCompleted: false },
];

function App() {
  const [toDo, setToDo] = useState(todoItems);

  const formSubmitHandler = (event) => {
    event.preventDefault();
     console.log(event.target[0].value);
    // console.log(event);


    if (event.target[0].value){
    const item =   { id: toDo.length + 1, title:event.target[0].value, isCompleted: false }
    setToDo([item, ...toDo])

    event.target[0].value=""
    }

  }

  


  return (
    <div className="container">
      <div className="row">
        <div className="com-sm-8 offset-sm-2">
          <form className="mb-3" onSubmit={formSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="todoItem" className="form-label">
                Yapılcak iş:
              </label>
              <input
                name="todoItem"
                type="text"
                className="form-control"
                id="todoItem"
                placeholder="Yapılacak işi giriniz..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Ekle
            </button>
          </form>
        </div>
        <div className="com-sm-8 offset-sm-2">
          <ul className="list-group"  >
            {toDo.map((item) => (
              <ToDoItem item={item}  />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
