export default function Summary({ items }) {
    const itemsCount = items.length;
    if (itemsCount === 0) {
        return <footer className="summary">You can start making a shopping list.</footer>;
    }
    const completedItemsCount = items.filter((item) => item.completed).length;
    return (
        <footer className="summary">
            {itemsCount === completedItemsCount ? (
                <p>You've completed your shopping. 😍</p>
            ) : (
                <p>
                    You have {itemsCount} products in your shopping cart. You've bought {completedItemsCount} of them.
                </p>
            )}
        </footer>
    );
}
