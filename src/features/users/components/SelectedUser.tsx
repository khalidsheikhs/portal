// import useSelectedUser from "./../hooks/useSelectedUser"
import { useSelectedUser } from "./../stores"

function SelectedUser() {
  // const { selectedUser } = useSelectedUser()

  const selectedUser = useSelectedUser((state) => state.user)

  return (
    <>
      {selectedUser && (
        <p>Selected user ID: {selectedUser.id}</p>
      )}
    </>
  )
}

export default SelectedUser