import useAppQuery from "@/hooks/useAppQuery"
import { categoriesQueryOptions } from "@/features/categories/queries"

function Categories() {
  const { data: categories, loading, error } = useAppQuery(categoriesQueryOptions)

  if (loading) {
    return <p>Loading categories...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (!categories?.length) {
    return <p>No categories found.</p>
  }

return (
    <>
      <h2>Categories Page</h2>
      {categories && categories.map((category) => (
        <p key={category.id}>
          {category.name}
        </p>
      ))}
    </>
  )
}

export default Categories