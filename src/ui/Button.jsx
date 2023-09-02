import { Link } from "react-router-dom"

function Button({ children, disabled, to, type }) {

  const base = "bg-yellow-400  hover:bg-yellow-300 transition-colors duration-300 font-semibold uppercase text-stone-800 inline-block rounded-full tracking-wide focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary: 'border-2 border-stone-300 hover:bg-yellow-300 transition-colors duration-300 font-semibold uppercase text-stone-800 inline-block rounded-full tracking-wide focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4'
  }

  if (to) return <Link to={to} className={styles[type]}>{ children}</Link>
  return (
    <button className={styles[type]} disabled={disabled}>{ children}</button>
  )
}

export default Button