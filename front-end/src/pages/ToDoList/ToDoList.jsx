import "./ToDoList.css";

const ToDoList = () => {
  return(
    <main className="todo">
      <section className="todo-section">
        <table>
          <tbody>
              <tr>
                <td><label><input type="checkbox" />Faire la vaisselle</label></td>
              </tr>
              <tr>
                <td><label><input type="checkbox" />Faire la vaisselle</label></td>
              </tr>
              <tr>
                <td><label><input type="checkbox" />Faire la vaisselle</label></td>
              </tr>
          </tbody>
        </table>
      </section>
    </main>

  );
};

export default ToDoList;