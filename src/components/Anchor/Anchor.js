const Anchor = ({ href, children, className, handleClick, ...props }) => {
  return (
    <a 
      className={`fill-underline ${className}`}
      href={href} 
      onClick={handleClick}
      {...props}
    >
      { children }
    </a>
  )
}

export default Anchor
