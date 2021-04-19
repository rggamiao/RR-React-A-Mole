import { useEffect } from 'react'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.floor(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <button onClick={props.handleClick}>Mole</button>
        </div>
    )
}

export default Mole