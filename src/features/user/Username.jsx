import { useSelector } from "react-redux"
import { getName } from "./userSlice";

function Username() {
  const username = useSelector(getName);

  if (!username) return null;

  return (
    <div className="hidden md:block text-sm font-semibold">{ username}</div>
  )
}

export default Username