import React from 'react'

const UserTable = async () => {
    interface User {
        id: number;
        name: string;
        email: string;
    }

    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-cache' });
    const users: User[] = await res.json();
    return (
        <table className="table table-zebra">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>

                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>))}
            </tbody>
        </table>
    )
}

export default UserTable