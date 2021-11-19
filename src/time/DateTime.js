import React, {useState, useEffect} from 'react'

function DateTime() {
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClock(date.toLocaleTimeString())
        }, 1000)
    }, [])

    let showDate = new Date()
    let displayDate = showDate.toDateString()


    return (
        <div>
            <center className="timestamp">
                {displayDate} - {clock}
            </center>
        </div>
    )
}

export default DateTime
