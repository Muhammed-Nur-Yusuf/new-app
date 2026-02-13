import { useState } from "react";
import './first.css';
import { useNavigate } from "react-router-dom";










function One(){

    const [ user, setUser ] = useState("");
    const [ address, setAddress] = useState("");
    const [phone,setPhone] = useState("");


    const navigate = useNavigate();





    
    
    function navigateToPlan(){
            if(user==="mohamed" && address==="mmhhoo" && phone==="1234"){
                navigate("/two")
    }else{
        alert("please enter correct information")
    }
    }













    return(
        <div className="body">
        

            <div className="container">



        

        
            

                <form>



                <h1>Personal info</h1>
                <p>Please provide your name, email address,and phone number.</p>



                <label htmlFor="name">Name</label>

                <input type="text" name="name" value={user}
                onChange={(e)=>setUser(e.target.value)} 
                placeholder="your name" 
                ></input>


                <label>Email Adderss</label>
                <input type="text" name="address" value={address}
                onChange={(e)=>setAddress(e.target.value)} 
                placeholder="your address" 
                ></input>

                <label>Phone Number</label>
                <input type="text" name="phone" value={phone}
                onChange={(e)=>setPhone(e.target.value)} 
                placeholder="your phone" 
                ></input>


                <div className="button">
                    <button type="button" onClick={()=>navigateToPlan()}className="submit">
                        Next Step
                    </button>
                </div>

                </form>  




            </div>


        
        
        
        </div>
    )
}




export default One;