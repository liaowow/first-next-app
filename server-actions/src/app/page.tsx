import { getTodos, addTodo } from "@/todos";
import Todos from "./Todos";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="max-w-xl mx-auto ml-5 p-4">
      <Todos todos={todos} addTodo={addTodo} />
    </main>
  );
}
