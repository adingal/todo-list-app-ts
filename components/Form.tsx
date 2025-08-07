import React, { useEffect, useState } from "react"

const Form: React.FC = () => {
  // Local states
  const [text, setText] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isTouched, setIsTouched] = useState<boolean>(false)

  // Text input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched) {
      setIsTouched(true)
    }

    setText(e.target.value)
  }

  // Form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(text)
  }

  // Debounce and validate after 2 seconds of no input
  useEffect(() => {
    const handler = setTimeout(() => {
      setIsValid(text.trim().length > 10)
    }, 1000)

    return () => clearTimeout(handler)
  }, [text])

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-row items-center justify-start mb-1">
        <input
          className="w-full bg-green-200 border border-green-200 text-lg text-emerald-800 py-2 px-4 rounded-l-md focus:outline-none"
          onChange={handleInputChange}
          name="todo"
          type="text"
          value={text}
          placeholder="Enter todo here..."
        />
        <button
          className="bg-green-300 border border-green-300 hover:bg-green-400 text-lg text-emerald-800 py-2 px-4 rounded-r-md cursor-pointer transition-colors"
          type="submit"
          disabled={!isValid}
        >
          Add
        </button>
      </div>
      <p
        className={`${
          !isValid && isTouched ? "block" : "hidden"
        } text-sm text-red-500 text-start`}
      >
        * Todo need to be 10 characters minimum.
      </p>
    </form>
  )
}

export default Form
