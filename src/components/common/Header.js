import { useEffect, useState } from "react"
import useAuth from "../../customHooks/useAuth";

const Header = () => {
    const { auth, login, logout } = useAuth();
    const [notificationCount, setNotificationCount] = useState(0)

    /*
    Purpose : Function to increment notification's count
    */
    const incrementNotifCount = () => {
        setNotificationCount((prev) => prev + 1)
    }

    useEffect(() => {
        // Clean-up function to log when the component unmounts
        return () => {
            console.log("Cleaning up Header component");
        }
    }, [])

    // Header JSX
    return <h1 onClick={incrementNotifCount}>FinHub Header {notificationCount}</h1>
}
export default Header