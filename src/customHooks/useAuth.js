import { useEffect, useState } from "react"

const useAuth = (user=null) => {
    const [auth, setAuth] = useState(null)
    console.log(user, "___normal use auth logs")
    function login() {
        localStorage.setItem("fin-hub-auth", JSON.stringify(user))
        setAuth(user)
    }
    function logout() {
        localStorage.removeItem("fin-hub-auth")
        setAuth(null)
    }

    useEffect(() => {
        const getUser = localStorage.getItem("fin-hub-auth")
        console.log("____auth use effect____", getUser)
        if (getUser) {
            setAuth(JSON.parse(getUser))
        }
        else setAuth(null)
    }, [])
    return { auth, setAuth, login, logout }
}
export default useAuth