import { useState } from "react";
import dayjs from "dayjs";
import TodoTable from "./TodoTable";
import './TodoList.css';

interface TodoItem {
    desc: string;
    date: string;
    prio: string;
  }

export default function TodoList(): JSX.Element {
    const [task, setTask] = useState<{desc: string, date: string, prio: string}>({ 
        desc: ``, 
        date: ``,
        prio: ``
    });
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [dateValue, setDateValue] = useState('');

    const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        setTask({ ...task, date: dayjs(event.target.value).format('DD.MM.YYYY')})
        setDateValue(event.target.value);
    }

    const handleForm = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([ ...todos, task])
    }

    const deleteTask = (index:number) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            <div className="header">
                Todo-list with TypeScript
            </div>
            <fieldset>
                <form onSubmit={handleForm}>
                    Date <input type="date" value={dateValue} onChange={handleDate} />
                    Description <input type="text" value={task.desc} onChange={event => setTask({...task, desc: event.target.value })}/>
                    Priority <input type="text" value={task.prio} onChange={event => setTask({...task, prio: event.target.value })}/>
                    <input type="submit" value="Add task" />
                </form>
            </fieldset>
            <TodoTable todos={todos} deleteTask={deleteTask} />
        </div>
    );
}