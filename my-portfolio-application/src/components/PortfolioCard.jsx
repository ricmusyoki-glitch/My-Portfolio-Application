const PortfolioCard = ({ title, description }) => {
  return (
    <div className="bg-gray-50 border rounded-lg p-4 shadow-sm text-black">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  )
}

export default PortfolioCard 