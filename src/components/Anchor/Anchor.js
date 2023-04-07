const Anchor = ({ href, children, className }) => {
  return (
    <a 
      className={`fill-underline ${className}`}
      href={href} 
    >
      { children }
    </a>
  )
}

export default Anchor
