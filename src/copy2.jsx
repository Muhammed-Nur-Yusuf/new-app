import React from "react";
import { Navigate, useNavigate } from "react-router-dom";







function Copy2(){



    const navigate = useNavigate();



    function confirm(){
        navigate("/four")
    } 



    function goback2(){
        navigate("/two");
    }

    







    return(
        <div className="body3">
            <div className="container3">
                <div className="form3">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>

                    <div className="boxs2">
                        <div className="finish">
                            <h3>Arcade (Yearly)</h3>
                            <h4>$90/mo</h4>
                        </div>
                        
                        <div className="buttons2">
                            <button onClick={goback2} className="goback2">Go Back</button>
                            <button onClick={confirm} className="confirm">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Copy2;