import { tokenStorage } from "../services/tokenStorage"

export const logout = () => tokenStorage.clear()