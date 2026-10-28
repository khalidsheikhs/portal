import useSelectedUser from "./../hooks/useSelectedUser"

function SelectedUser() {
  const { selectedUser } = useSelectedUser()
  return (
    <>
      {selectedUser && (
        <p>Selected user ID: {selectedUser.id}</p>
      )}
    </>
  )
}

export default SelectedUser