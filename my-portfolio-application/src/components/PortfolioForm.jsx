const PortfolioForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-bold mb-4 text-black">Add a new project</h2>

        <form className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          className="w-full border p-3 rounded-md"
        />

        <textarea
          placeholder="Project Description"
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