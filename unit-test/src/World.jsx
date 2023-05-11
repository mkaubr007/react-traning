import { useState } from "react"

const World = () => {
    const [changedText, setChangesText] = useState(false)
    const changedTextHandler = () => {
        setChangesText(true)
    }
    return (
        <div>
            <h2>World Component</h2>
            {!changedText && <p>Some Paragraph</p>}
            {changedText && <p>Changed</p>}
            <button onClick={changedTextHandler}>Update</button>
        </div>
    )
}
export default World;