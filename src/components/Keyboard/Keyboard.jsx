import dollar from "../../assets/svg/icon-dollar.svg"
import person from "../../assets/svg/icon-person.svg"
import { useState } from "react";
import "./KeyboardStyle.css"

var Result ;
let NUMtotal ;

    function SETdisplay(){
        let Amount = document.getElementById('Amount')
        let Bill = document.getElementById('Bill').value
        let People = document.getElementById('People').value
        let Total = document.getElementById('Total')
        
        if(Result >= 0 && Bill>0 && Bill !== "" && People>0 && People !== "" ){
            Amount.innerText = '$' + (Result)
            Total.innerText = "$" + (NUMtotal)
        }
        else{
            Amount.innerText = "$00.00"
            Total.innerText = "$00.00"
        }
    }

function Keyboard () {

    const [Bill,setBill] = useState("");
    const [CustomV,setCustomV] = useState("");
    const [People,setPeople] = useState("");
   
        function RESET(){    
            setBill("")
            setCustomV("")
            setPeople("")
            document.getElementById('Amount').innerHTML="$00.00"
            document.getElementById('Total').innerHTML="$00.00"   
        }
      
        function SETCustomV(){  
            if(CustomV > 0 && CustomV !== ""){
                Result = (  Number(Bill) /  Number(People) * (Number(CustomV)/100) ).toFixed(2)
                NUMtotal = ( parseFloat(Result) + (Bill) / (People) ).toFixed(2)
                setTimeout(SETdisplay)
            }
        }

        SETCustomV()
        WorkWindow()

    return(
        <div className="KEYcontainer">

            <div className="PublicDIV" >
                <label className="label" htmlFor="Bill">Bill</label>
                <p className="Message" id="MessageBill">Isn't valid input</p>
                <div className="inputNUM">
                    <div className="icon">
                        <img src={dollar} alt="" />
                    </div>
                    <input className="inputBOX" placeholder="0" value={Bill} onChange={(e) => setBill(e.target.value)} type="text" name="Bill" id="Bill" />
                </div>
            </div>

            <div className="PublicDIV">
                <label className="label" htmlFor="People">Number of People</label>
                <p className="Message" id="MessageNUM">Can not be zero</p>
                <div className="inputNUM">
                    <div className="icon">
                       <img src={person} alt="" />
                    </div>
                    <input className="inputBOX" placeholder="0" value={People} onChange={(e) => setPeople(e.target.value)} type="text" name="People" id="People" />
                </div>
            </div>

            <div className="PublicDIV">
                <label className="label" htmlFor="">Select Tip %</label>
                <div className="allBTN">
                    <button onClick={Computing5} className="BTNtip">5%</button>  
                    <button onClick={Computing10} className="BTNtip">10%</button>
                    <button onClick={Computing15} className="BTNtip">15%</button>  
                    <button onClick={Computing25} className="BTNtip">25%</button>  
                    <button onClick={Computing50} className="BTNtip">50%</button>  
                    <input value={CustomV} onChange={(e) => setCustomV(e.target.value)} onClick={SETCustomV} className="CustomBTN" placeholder="Custom" type="number" name="" id="CustomBTN" />
                </div>
            </div>
            
        </div>
    )

    function Computing5(){   
        if(People !== 0 && People !== ""){
            Result = ( Number(Bill) /  Number(People) * 5 / 100 ).toFixed(2)
            NUMtotal = parseFloat(Result) + (Bill) / (People)
        }
        else{
            Result = "00.00"
            NUMtotal = "00.00"
        }
        setTimeout(SETdisplay)
    }   

    function Computing10(){   
        if(People !== 0 && People !== ""){
            Result = ( Number(Bill) /  Number(People) * 10 / 100 ).toFixed(2)
            NUMtotal = parseFloat(Result) + (Bill) / (People)
        }
        else{
            Result = "00.00"
            NUMtotal = "00.00"
        }
        setTimeout(SETdisplay)
    }
    
    function Computing15(){   
        if(People !== 0 && People !== ""){
            Result = ( Number(Bill) /  Number(People) * 15 / 100 ).toFixed(2)
            NUMtotal = parseFloat(Result) + (Bill) / (People)
        }
        else{
            Result = "00.00"
            NUMtotal = "00.00"
        }
        setTimeout(SETdisplay)
    }
    
    function Computing25(){   
        if(People !== 0 && People !== ""){
            Result = ( Number(Bill) /  Number(People) * 25 / 100 ).toFixed(2)
            NUMtotal = parseFloat(Result) + (Bill) / (People)
        }
        else{
            Result = "00.00"
            NUMtotal = "00.00"
        }
        setTimeout(SETdisplay)
    }
    
    function Computing50(){   
        if(People !== 0 && People !== ""){
            Result = ( Number(Bill) /  Number(People) * 50 / 100 ).toFixed(2)
            NUMtotal = parseFloat(Result) + (Bill) / (People)
        }
        else{
            Result = "00.00"
            NUMtotal = "00.00"
        }
        setTimeout(SETdisplay)
    }


    function WorkWindow(){

        window.onload = function () {

            document.getElementById("BTNreset").addEventListener("click",RESET)

            // ............................Change color BTNs.............................//
            
            let BTN = document.querySelectorAll(".BTNtip")
            let CustomBTN = document.getElementById('CustomBTN')

            for(let i=0;i<BTN.length;i++){
                BTN[i].addEventListener('click',()=>{
                    for(let j=0 ;j<BTN.length;j++){
                        BTN[j].classList.remove('BTNtipSelect')
                    }
                    BTN[i].classList.add('BTNtipSelect')  
                } )
            }
            CustomBTN.addEventListener("click",()=>{
                for(let j=0 ;j<BTN.length;j++){
                    BTN[j].classList.remove('BTNtipSelect')
                }
            })

        // ..............................inputS CHECK AND invalid Message...........................//

            let Bill = document.getElementById('Bill')
            let MessageBill = document.getElementById('MessageBill')

            Bill.addEventListener("change",cheackBill)
            function cheackBill(){
                if(Bill.value == 0 || (Number(Bill.value) !== parseFloat(Bill.value)) ){
                    MessageBill.style.display= "block"
                    Bill.classList.add('inputBOXinvalid')
                    setBill("")
                
                }
                else{
                    MessageBill.style.display= "none"
                    Bill.classList.remove('inputBOXinvalid')
                }
            }

            let People = document.getElementById('People')
            let MessageNUM = document.getElementById('MessageNUM')

            People.addEventListener("change",cheackPeople)
            function cheackPeople(){
                if(People.value == 0 || (Number(People.value) !== parseFloat(People.value)) ){
                    MessageNUM.style.display= "block"
                    People.classList.add('inputBOXinvalid')
                    setPeople("")
                }
                else{
                    MessageNUM.style.display= "none"
                    People.classList.remove('inputBOXinvalid')
                }
            }    

        };
    }
    
}

export default Keyboard ;
