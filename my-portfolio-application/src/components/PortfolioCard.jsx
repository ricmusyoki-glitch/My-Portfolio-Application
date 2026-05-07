const PortfolioCard = ({
  title,
  description,
  onDelete,
}) => {
  return (
    <div className="bg-gray-50 border rounded-lg p-4 shadow-sm text-black">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-4">
        {description}
      </p>

      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Delete
      </button>
    </div>
  )
}

export default PortfolioCard