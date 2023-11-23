interface TodoItem {
    desc: string;
    date: string;
    prio: string;
  }

interface TodoTableProps {
todos: TodoItem[];
deleteTask: (index: number) => void;
}

export default function TodoTable({ todos, deleteTask }: TodoTableProps): JSX.Element {

    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Priority</th>
                </tr>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td>{todo.prio}</td>
                        <td><button onClick={() => deleteTask(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}