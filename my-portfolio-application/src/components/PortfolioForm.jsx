import { useState } from "react"

const PortfolioForm = ({ addProject }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (event) => {
  event.preventDefault()

  if (!title.trim() || !description.trim()) {
    alert("Please fill in all fields.")
    return
  }

  const newProject = {
    title,
    description,
  }

  addProject(newProject)

  setTitle("")
  setDescription("")
}
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full border p-3 rounded-md"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          className="w-full border p-3 rounded-md"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Project
        </button>
      </form>
    </div>
  )
}

export default PortfolioForm 