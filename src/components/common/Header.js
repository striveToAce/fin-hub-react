import { useEffect, useState } from "react"
import useAuth from "../../customHooks/useAuth";
import useCounter from "../../customHooks/useCounter";

const Header = () => {
    const { auth, login, logout } = useAuth();
    const { currentCount, styleProperties } = useCounter(20)
    const [notificationCount, setNotificationCount] = useState(0)

    /*
    Purpose : Function to increment notification's count
    */
    const incrementNotifCount = () => {
        setNotificationCount((prev) => prev + 1)
    }

    useEffect(() => {
        console.log("*****", notificationCount)

        // Clean-up function to log when the component unmounts
        return () => {
            console.log("Cleaning up Header component", notificationCount);
        }
    }, [notificationCount])

    // Header JSX
    return <h1 onClick={incrementNotifCount}>FinHub Header {notificationCount} <span style={styleProperties}>{currentCount}</span></h1>
}
export default Header