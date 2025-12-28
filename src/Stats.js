export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list! 🧳</em>
      </footer>
    );
  }

  const total = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((totalPacked / total) * 100);

  if (total === totalPacked) {
    return (
      <footer className="stats">
        <em>You got everything! Ready to go! 🧳</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        🧳 You have {total} items on your list, and you already packed{" "}
        {totalPacked} ({totalPacked === 0 ? 0 : packedPercentage})%.
      </em>
    </footer>
  );
}
