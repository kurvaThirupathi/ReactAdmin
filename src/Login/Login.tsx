import { apptxt } from "@/context/appCtx";
import React, { useContext,useState } from "react";

import styles from './Login.module.css';
import { Input } from "@/common/components/Input";
import  config  from "./config.json";
export const Login =()=>{
    const loginBody={
            backgroundImage: "URL(images/bg.jpg)",
           backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight:"100vh"
            
         
    }
   const [data,setData] =useState({})
    const context=useContext(apptxt);
    const btnLogin=()=>{
        //context.dispatch({
           // type:"LOGIN",
            //payload:true
        //})
    }
     const handleChange=(eve:any)=>{
        const {id,value}=eve?.target;
         let inputObj:any= config.find((obj)=>{
                    return obj.id===id
              })
              inputObj.hasError=false;
              inputObj.value=value
              if(!value){
                inputObj.hasError=true;
              }
              if(value==""){
                //alert("");
                //inputObj.hasError=true;
              }
              

        setData({
          ...data,
          [id]:value
        })

     }
    return <div style={loginBody}>
        <section className={styles.loginSection}>
        <div className="container-fluid p-3">
        <div className="row">
      <div className={`col-lg-5 ${styles.loginFormData}`}>
       <div className="mt-3">
         <h3>Login</h3>
       </div>
       <div className="mt-4">
         <form>
          {
            config.map((obj)=>{
              return <Input {...obj} handleChange={handleChange}/>
            })
          }
          
          <div className={styles.forgotpassword}>
              <a href='javascript:void(0)'>Forgot Password?</a>
            </div>
           <div className="mb-2">
            
            <input type="checkbox" />
            <span className="ms-2" style={{fontSize:'14px',verticalAlign:'top'}}>Remember Me</span>
           </div>
           <div className="buttonWidth">
             <button type="button" className={`btn  btn-sm form-control ${styles.btnView}`} onClick={btnLogin}>LOGIN</button>
           </div>

         </form>
       </div>
      </div>
      <div className="col-lg-5 offset-lg-1 mt-2">
       <img src="images/login.png" className="w-100" />
      </div>
      
    </div>
    
  </div>
  </section>
    </div>
}