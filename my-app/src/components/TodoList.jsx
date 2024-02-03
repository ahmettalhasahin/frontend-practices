import Todo from "./Todo";

function TodoList(props) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {props.todos.map((todo) => (
                <Todo text={todo.text} key={todo.id}/>
            ))}
            </ul>
        </div>
    )
}

export default TodoList;