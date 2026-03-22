const GroceryItem = ({ item, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 
                    rounded-lg px-4 py-3 border border-gray-200">
      <span className="text-gray-700">{item.name}</span>
      <button
        onClick={() => onDelete(item.id)}
        className="text-red-400 hover:text-red-600 hover:bg-red-50 
                   rounded-full w-8 h-8 flex items-center justify-center 
                   transition-colors"
        title="Delete item"
      >
        ✕
      </button>
    </li>
  )
}

export default GroceryItem
