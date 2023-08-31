import { Link } from "react-router-dom"

function LinkButton({ children, to }) {
  return (
    <Link className="text-sm text-blue-500 hover:text-blue-600 hover:underline" to={to}>{ children}</Link>
  )
}

export default LinkButton