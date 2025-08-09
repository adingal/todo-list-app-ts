import React, { useEffect } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { TodoItem } from "@/types/todo"

interface TodoListProps {
  todoList: TodoItem[]
  handleDelete: (id: string) => void
  handleEdit: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  handleDelete,
  handleEdit,
}) => {
  useEffect(() => {}, [todoList])

  return (
    <div className="py-8">
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-row items-center justify-start gap-3 bg-green-200 border border-green-200 text-emerald-800 mb-2 py-2 px-4 rounded-md"
          >
            <label className="cursor-pointer" htmlFor={`todo-${todo.id}`}>
              <input id={`todo-${todo.id}`} className="mr-3" type="checkbox" />
              <span>{todo.text}</span>
            </label>
            <div className="flex flex-row items-center justify-between gap-3 ms-auto">
              <button
                onClick={() => handleEdit(todo.id)}
                className="cursor-pointer"
                type="button"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="cursor-pointer"
                type="button"
              >
                <FaTrash className="text-red-500" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
