import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
}

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  ...props
}: ButtonProps) {

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  }

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      onClick={(type === "submit" || type === "reset") ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button