import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ketqua1,setketqua1]=useState(0);
  const [ketqua2,setketqua2]=useState(0);
  const[inputValue, setInputValue]= useState(0);
  function hanleClick(){
    //code here
    let sum:number = 0;
    for(let i=1; i<=inputValue;i++){
      sum+=1;
    }
    setketqua1(sum);
  }
  return(
    <div>
      <h1>Bài tập React ngày 14-03</h1>
      Nhập vào số tự nhiên: &nbsp;&nbsp;<input type = "number" value ={inputValue}
      onChange={(e)=>{
        setInputValue(Number(e.currentTarget.value));
      }}
      />
      <button onClick={hanleClick}>Xử lý</button>
      <br />
      Kết quả:<br />
      <p style={{marginLeft:'20px'}}>a/ {ketqua1}</p>
      <p style={{marginLeft:'20px'}}>b/ {ketqua2}</p>
    </div>
  );
}
export default App;