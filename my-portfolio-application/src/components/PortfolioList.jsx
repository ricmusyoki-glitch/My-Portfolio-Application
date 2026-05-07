import PortfolioCard from "./PortfolioCard"

const PortfolioList = ({ projects, deleteProject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-gray-500">
          No projects added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              onDelete={() => deleteProject(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PortfolioList