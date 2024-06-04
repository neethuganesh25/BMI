

import React, { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';



function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBmi] = useState()
  const [result,setResult] = useState()

  const handleReset =()=>{
    setHeight(0);
    setWeight(0);
    setBmi();
    setResult('');
  }
  
  const calculate = ()=>{
    let str=''
    let heightinmeters = height/100
    let bmi= weight/(heightinmeters**2)
    setBmi(bmi.toFixed(2))

    if(bmi < 18.5){
      str='Underweight'
       }
    else if(bmi>=18.5 && bmi <24.9){
      str='Normal Weight'
    }
    else if(bmi>=25 && bmi< 29.9){
      str='Overweight'

    }
    else if(bmi >=30){
      str='Obese'
    }
    setResult(str)
  }

  return (
    <>
    <div className="row w-100">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        
        <img style={{marginLeft:'47%',width:'50px',marginTop:'20px'}} src="https://cdn-icons-png.flaticon.com/128/10476/10476452.png" alt="" />
        <h3 className='text-center '>BMI Calculator </h3>
        <form action="" className='shadow- border rounded-4 p-5' onSubmit={(e)=>e.preventDefault()}>
          <div className='d-flex'> <TextField className=' mt-5 ms-5 ' value={height ||""} id="outlined-basic"  label="Height" variant="outlined" onChange={(e)=>setHeight(e.target.value)} />
          <TextField className=' mt-5 ms-5' value={weight ||""} id="outlined-basic" label="Weight"  variant="outlined" onChange={(e)=>setWeight(e.target.value)} />
        </div>

       
       <div className=' flex-column rounded  d-flex justify-content-center align-items-center w-50 mt-5' style={{marginLeft:'20%'}}>
          <p className='fs-5 text-center fw-bolder text-danger'>  {bmi}</p>
          <p className='fs-3 text-center text-danger'>{result}</p>
       
        
        </div>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <button className='btn btn-outline-danger' onClick={calculate}>CALCULATE</button>
          <button className='btn btn-outline-danger ms-3' onClick={handleReset}>RESET</button>
        </div>
       </form>
      </div>
      <div className="col-md-3"></div>
    </div>
      </>
  )
}

export default App
