import "./Dstyle.css"

function Display () {

    return(
        <div  className="DIScontainer">
            <div className="displaynum">

                <div className="parts">
                    <h4>Tip Amount</h4>
                    <p>/ person</p> 
                    <span id="Amount" className="Amount">$00.00</span>
                </div>

                <div className="parts">
                    <h4>Total</h4>
                    <p>/ person</p> 
                    <span id="Total" className="Total">$00.00</span>
                </div>  

            </div>

            <button id="BTNreset" className="BTNreset">Reset</button>
        </div>
    )
}

export default Display ;