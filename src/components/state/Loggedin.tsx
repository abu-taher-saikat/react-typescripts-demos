import {useState} from 'react';


const Loggedin = () => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const handleLogin = () => {
        setIsloggedIn(true);
    };
    const handleLogout = () => {
        setIsloggedIn(false);
     };
    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>user is {isLoggedIn ? 'logged in' : 'logged out'} out</div>
    </div>
  )
}

export default Loggedin