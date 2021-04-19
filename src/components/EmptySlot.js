import { useEffect } from "react"

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.floor(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <button>Hole</button>
        </div>
    )
}

export default EmptySlot