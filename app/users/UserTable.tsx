import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'


interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}
const UserTable = async ({sortOrder}: Props) => {


    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-cache' });
    const users: User[] = await res.json();
    const sortedUser = sort(users).asc(
        (user) => sortOrder === 'email' ? user.email : user.name
    )
    return (
        <div>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>
                            <Link href='/users?sortOrder=name'>Name</Link>
                        </th>
                        <th>
                            <Link href='/users?sortOrder=email'>Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUser.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable