import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"


function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 uppercase px-4 sm:px-66 py-3">
      <Link className=" tracking-widest " to='/'>Fast React Pizza Co.</Link>
      <SearchOrder/>
      <Username/>
    </header>
  )
}

export default Header