import "./main.css"

function Main({ numberArray, handleRoll, handleNumber, gameWon }) {

    const displayArray = numberArray.map((element, index) => {
        return <div key={index} className= {"number--box" + (element.active ? " active" : "")} onClick={()=>handleNumber(index)}>
            <div className="number--value">
                {element.number}
            </div>
        </div>
    })
    
    return (
        <main id="main">
            <div className="number--grid">
                {displayArray}
            </div>
            <div className="button">
                <button disabled={gameWon} className="roll--button" onClick={handleRoll}>Roll</button>
            </div>
        </main>
    )
}

export default Main