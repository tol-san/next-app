import UserTable from "./UserTable";

interface Props{
  searchParams: Promise<{ sortOrder: string; }>
}
const UserPage = async ({searchParams}: Props) => {
  const {sortOrder} = await searchParams;
  return (
    <div>
      <h1>User</h1>
      <UserTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UserPage