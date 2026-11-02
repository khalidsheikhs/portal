import { useParams } from "react-router-dom"
import useAppQuery from "@/hooks/useAppQuery"
import { UserForm, userQueryOptions } from "@/features/users"

function UpdateUser() {
  const { id } = useParams()
  const { data: user, loading, error } = useAppQuery(userQueryOptions(Number(id)))

  if (loading) {
    return <p>Loading user data...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (!user) {
    return <p>No user found.</p>
  }

  const handleUpdateUser = async (updatedData: any) => {
    // Implement the logic to update the user data here
    console.log("Updating user with data:", updatedData)
  }

  return (
    <>
      <h1>Update User: {id}</h1>
      <UserForm user={user} onSubmit={handleUpdateUser} />
    </>
  )
}

export default UpdateUser