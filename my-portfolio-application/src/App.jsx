import Header from "./components/Header"
import PortfolioForm from "./components/PortfolioForm"
import PortfolioList from "./components/PortfolioList" 
import { useState } from "react"

function App() {
  const [projects, setProjects] = useState([])

  const addProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <PortfolioForm addProject={addProject} />

        <PortfolioList projects={projects} />
      </main>
    </div>
  )
}

export default App 