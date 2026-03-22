import { useState } from 'react'
import GroceryItem from './components/GroceryItem'

const App = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    // dont add empty items
    if (inputValue.trim() === '') return

    const newItem = {
      id: Date.now(),
      name: inputValue.trim()
    }

    setItems([...items, newItem])
    setInputValue('')
  }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // lets us press enter to add an item instead of clicking the button
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          My Grocery List
        </h1>

        {/* input and add button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add an item..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white font-bold 
                       px-4 py-2 rounded-lg transition-colors"
          >
            +
          </button>
        </div>

        {/* grocery items list */}
        {items.length === 0 ? (
          <p className="text-gray-400 text-center italic">
            No items yet. Add something!
          </p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <GroceryItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}

        {/* item count at the bottom */}
        {items.length > 0 && (
          <p className="text-sm text-gray-400 text-center mt-4">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your list
          </p>
        )}
      </div>
    </div>
  )
}

export default App
