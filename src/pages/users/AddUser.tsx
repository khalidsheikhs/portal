import { UserForm } from "@/features/users"

function AddUser() {
  const handleAddUser = async (data: any) => {
    // Implement the logic to update the user data here 
    console.log("Adding user with data:", data)
  }

  return (
    <>
      <h1>Add User</h1>
      <UserForm onSubmit={handleAddUser} />
    </>
  )
}

export default AddUser