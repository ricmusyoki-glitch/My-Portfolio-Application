import PortfolioCard from "./PortfolioCard"

const PortfolioList = ({ projects }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-black">
      <h2 className="text-2xl font-bold mb-4">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioList 