
import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full rounded-lg border border-gray-300
        bg-white px-4 py-3 text-sm text-gray-900
        outline-none transition
        placeholder:text-gray-400
        focus:border-primary focus:ring-2 focus:ring-primary/20
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
    />
  )
}

export default Input
