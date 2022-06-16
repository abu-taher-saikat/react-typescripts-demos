import { useState } from 'react';
type AuthUser = {
    name : string,
    email : string
}

const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name : 'saikat',
            email : 'mdabutahersaikat@gmail.com'
        })
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>user name is {user.name}</div>
        <div>user email is {user.email}</div>
    </div>
  )
}

export default User