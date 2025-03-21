import Item from "./Item";

export default function List({ items, onDeleteItem, onUpdateItem }) {
    return (
        <>
            {items.length > 0 ? (
                <div className="list">
                    <ul>
                        {items.map((item, index) => (
                            <Item key={index} item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="list">No products in your cart.</div>
            )}
        </>
    );
}
