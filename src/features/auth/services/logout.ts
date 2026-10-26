import { tokenStorage } from "../services/tokenStorage"
import { authSession } from "../services/authSession"

export const logout = () => {
    tokenStorage.clear()
    authSession.clear()
}