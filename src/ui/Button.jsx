function Button({children,disabled}) {
  return (
    <button className="bg-yellow-400  hover:bg-yellow-300 transition-colors duration-300 font-semibold uppercase text-stone-800 px-4 py-3 inline-block rounded-full tracking-wide focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4" disabled={disabled}>{ children}</button>
  )
}

export default Button