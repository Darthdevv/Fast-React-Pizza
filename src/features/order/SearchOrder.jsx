import { useState } from "react"


function SearchOrder() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input placeholder="Search order #" value={query} onChange={e => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchOrder