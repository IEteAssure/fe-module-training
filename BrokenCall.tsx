import { useEffect, useState } from "react";

export default function BrokenEffect() {
  const [data, setData] = useState<number[]>([]);
  const [query, setQuery] = useState("initial");

  // 🚨 This function is re-created every render!
  const fetchData = () => {
    console.log("🔁 Fetching data for", query);
    setData([1, 2, 3]); // pretend this came from an API
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ❌ triggers infinite loop, because fetchData is a new function each time

  return (
    <div>
      <h2>Query: {query}</h2>
      <button onClick={() => setQuery("updated")}>Change Query</button>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
