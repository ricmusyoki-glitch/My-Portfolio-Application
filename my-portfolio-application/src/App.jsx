import Header from "./components/Header"
import PortfolioForm from "./components/PortfolioForm"
import PortfolioList from "./components/PortfolioList" 
import { useState, useEffect} from "react"

function App() {
  const [projects, setProjects] = useState(() => {
  const savedProjects = localStorage.getItem("projects")

  return savedProjects
    ? JSON.parse(savedProjects)
    : []
})  

  const addProject = (newProject) => {
    setProjects([...projects, newProject])
  }
  useEffect(() => {
  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  )
}, [projects]) 
const deleteProject = (indexToDelete) => {
  const updatedProjects = projects.filter(
    (_, index) => index !== indexToDelete
  )

  setProjects(updatedProjects)
}

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <PortfolioForm addProject={addProject} />

        <PortfolioList projects={projects} deleteProject={deleteProject} />
      </main>
    </div>
  )
}

export default App 