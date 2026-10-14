import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

function Button({
  children, 
  type = "button", 
  className = "", 
  onClick, 
  ...props 
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={(type === "submit" || type === "reset") ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button