import { useCategories } from "@/features/categories"

function Categories() {
  const { categories, loading, error } = useCategories()

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