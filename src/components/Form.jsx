import { useState } from "react";

export default function Form({ onAddItem, onClearList }) {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleForSubmit(e) {
        e.preventDefault();
        if (title) {
            const item = { id: Date.now(), title, quantity, completed: false };
            console.log(item);
            onAddItem(item);
            setTitle("");
            setQuantity(1);
        }
    }
    return (
        <form className="form" onSubmit={handleForSubmit}>
            <input
                type="text"
                placeholder="Please enter a product name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 10 }, (v, i) => i + 1).map((num, index) => (
                    <option key={index} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <button type="submit">➕ Add</button>
            <button type="button" onClick={onClearList}>
                🗑️ Clear
            </button>
        </form>
    );
}
