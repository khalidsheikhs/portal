import type { TableColumn } from "@/components"
import type { User } from "../types"

export const usersColumns: TableColumn<User>[] = [
  {
    id: "avatar",
    header: "Avatar",
    headerClassName: "w-[100px]",
    cell: (user) =>
      user.avatar_urls?.["48"] && (
        <img
          src={user.avatar_urls["48"]}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ),
  },
  {
    id: "name",
    header: "Name",
    headerClassName: "w-[250px]",
    cell: (user) => (
      <a
        href={user.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {user.name}
      </a>
    ),
  },
  {
    id: "email",
    headerClassName: "w-[350px]",
    header: "Email",
    cell: (user) => user.email,
  },
  {
    id: "roles",
    header: "Roles",
    cell: (user) => user.roles?.join(", "),
  },
]