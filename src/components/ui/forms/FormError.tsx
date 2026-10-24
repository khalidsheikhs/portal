import { stripHtml } from "@/utils/stripHtml"

type FormErrorProps = {
  message?: string
}

function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <p className="mt-1 text-sm text-danger" role="alert">
      {stripHtml(message)}
    </p>
  )
}

export default FormError
