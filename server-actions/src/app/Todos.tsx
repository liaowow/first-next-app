"use client";
import { useState, useEffect } from "react";
import { Todo, getTodoCount } from "@/todos";

export default function Todos({
  todos,
  addTodo,
}: {
  todos: Todo[];
  addTodo: (title: string) => Promise<void>;
}) {
  const [newTodo, setNewTodo] = useState("");
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    getTodoCount().then(setTodoCount);
  }, [todos]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Todos ({todoCount})</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await addTodo(newTodo);
          setNewTodo("");
        }}
      >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-1 text-black"
        />
        <button type="submit" className="border p-1">
          Add Todo
        </button>
      </form>
    </>
  );
}
