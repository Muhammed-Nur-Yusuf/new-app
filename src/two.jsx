import './first.css';
import { useState } from 'react';
import icon1 from './imgs/icon-arcade.svg'
import icon2 from './imgs/icon-advanced.svg'
import icon3 from './imgs/icon-pro.svg'
import { useNavigate } from "react-router-dom";



function Two(){

    const navigate = useNavigate();


    const[plan,setPlan]=useState("");
    const[billing, setBilling]=useState("");



    let arcade;
    let advanced;
    let pro;




    


 function next(){
    if(plan==="Arcade" && billing==="Mon"){
        navigate("/copy1")
        }else if(plan==="Arcade" && billing==="Year"){
            navigate("/copy2")
        }else if(plan==="Advanced" && billing==="Mon"){
            navigate("/copy3")
        }else if(plan==="Advanced" && billing==="Year"){
            navigate("/copy4")
        }else if(plan==="Pro" && billing==="Mon"){
            navigate("/copy5")
        }else if(plan==="Pro" && billing==="Year"){
            navigate("/copy6")
        }else{
            alert("Please choose your plan and monthly/yearly option.")
        }
    }
 



    if(plan==="Arcade"){
            arcade={background:"rgba(128, 128, 128, 0.096)",
                    transition: "all 0.0s ease"
            }
        }else{
            arcade={}
        }




    
    if(plan==="Advanced"){
            advanced={background:"rgba(128, 128, 128, 0.096)",
                      transition: "all 0.0s ease"}
        }else{
            advanced={}
        }





    if(plan==="Pro"){
            pro={background:"rgba(128, 128, 128, 0.096)",
                 transition: "all 0.0s ease"
            }
        }else{
            pro={}
        }





    function goback1(){
        navigate("/");
    }   



    return(
        <div className="body2">



            <div className="container2">
                <div className='form2'>


                    <h1>Select your plan</h1>
                    <p className="top-par">your have the option of monthly or yearly billing.</p>

                    <div className='boxs'>
                        <div className='box1' onClick={()=>setPlan("Arcade")} style={arcade}>
                            <img src={icon1} alt="icon1"></img>
                            <h3>Arcade</h3>
                        </div>
                        <div className='box2' onClick={()=>setPlan("Advanced")} style={advanced}>
                            <img src={icon2} alt="icon2"></img>
                            <h3>Advanced</h3>                           
                        </div>
                        <div className='box3' onClick={()=>setPlan("Pro")} style={pro}>
                            <img src={icon3} alt="icon3"></img>
                            <h3>Pro</h3>
                        </div>
                    </div>

                    <div className='monthly-yearly'>

                        <input onClick={()=>setBilling("Mon")} className='mon-year-input' type="radio" name="billing" id="monthly"></input>
                        <label className='mon' htmlFor="monthly">Monthly</label>
                        <div className='div-line'></div>
                        <input onClick={()=>setBilling("Year")} className='mon-year-input' type="radio" name="billing" id="yearly"></input>
                        <label className='year' htmlFor="yearly">Yearly</label>
                    </div>


                    <div className='buttons'>
                        <button onClick={goback1} className='goback'>Go Back</button>
                        <button onClick={next}   className='nextstep'>Next Step</button>
                    </div>

                </div>
            </div>



        </div>
    )
}





export default Two;