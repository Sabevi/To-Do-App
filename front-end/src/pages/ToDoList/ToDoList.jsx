import "./ToDoList.css";
import "../../hooks/useGetToDoList";
//import useGetToDoList from "../../hooks/useGetToDoList";

const ToDoList = () => {
  //const { loading, data, refresh } = useGetToDoList;

  const todoData = [
    {
        "task": "cuisine à faire",
        "done": false,
    },
    {
        "task": "courses à faire",
        "done": false,
    },
    {
      "task": "sport à faire",
      "done": false,
  }
  ];
  
  return(
    <>
        <main className="todo">
          <section className="todo-section">
            <table>
              <tbody>
                {todoData.map((element,index) =>(
                  <tr key={index}>
                    <td><label><input type="checkbox" />{element.task}</label></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
    </>
  );
};

export default ToDoList;