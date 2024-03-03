import { useEffect, useState } from "react"

const useCounter = (start = 10) => {
    // iniate currentCount as per props
    const [currentCount, setCurrentCount] = useState(start)
    const [styleProperties, setStyleProperties] = useState({ color: "green" })

    // timer logic
    useEffect(() => {
        if (!currentCount) return;
        if (currentCount === 10) setStyleProperties((prev) => ({ ...prev, color: "red" }))
        const clearId = setTimeout(() => {
            setCurrentCount((prev) => prev - 1)
        }, 1000)

        return () => {
            clearTimeout(clearId)
        }
    }, [currentCount])

    return {currentCount,styleProperties}
}
export default useCounter