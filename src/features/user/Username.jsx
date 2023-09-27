import { useSelector } from "react-redux"

function Username() {
  const username = useSelector(state => state.user.username)
  return (
    <div className="hidden md:block text-sm font-semibold">{ username}</div>
  )
}

export default Username