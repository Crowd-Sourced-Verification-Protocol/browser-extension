import React from 'react'
import styled from 'styled-components'
import { Button, Rate } from 'antd'
import axios from 'axios'
import Report from './Report'
import { getStorageData, setStorageData, getCurrentTabUrl } from "../chrome/utils";
import Info from './info.svg'
import Verify from './verified.svg'

const Landing = () => {

  const [reportFlag, setReportFlag] = React.useState(false)
  const [token, setToken] = React.useState(100)
  const [dollar, setDollar] = React.useState(2)
  const [url, setUrl] = React.useState('')
  const [rate, setRate] = React.useState(0)
  const [id, setId] = React.useState("")

  const getRandomToken = () =>{
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
    return hex.toString();
  }

  React.useEffect(async ()=>{
    getCurrentTabUrl((url) => {
      setUrl(url || 'undefined');
    })
    let data = getStorageData()
    console.log(data)
    if(!data){
      data = getRandomToken()
      setStorageData(data)
      const response = await axios({
        url: `https://icdrive-backend.herokuapp.com/addUser`,
        method:"POST",
        headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        },
        data:{userId:id}
      })
    }
    setId(data)
  },[])

  const add_rating = async () => {
    const data = {
      "userId": id,
      "url": url,
      "rating": rate,
    }
    
    try{
      const response = await axios({
        url: `https://icdrive-backend.herokuapp.com/addRating`,
        method:"POST",
        headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        },
        data:data
      })
      setRate(0)
      setToken(token+1)
      setDollar(dollar+0.1)
    } catch(error){
      console.log(error)
    }
  }

  return (
      <Style>
        <div className="landing">
          {
            reportFlag?
            <Report setReportFlag={setReportFlag} id={id}/>
            :
            <div>
              <div className="topBar">
                <img src={Verify}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="heading">0xC88C....CE7b</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Info}/>
              </div>
              <hr className="horizontal"/>
              <div className="centerPortion">
                <p className="token cent">
                  {token}
                </p>
                <p className="dollar cent">
                  ${dollar}
                </p>
              </div>
              <p className="cent">
                <Rate value={rate} onChange={setRate} />
              </p>
              <div className="bottomPortion">
                <Button type="primary" onClick={add_rating} >Rate</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" onClick={()=>setReportFlag(1)} danger>Report</Button>
              </div>
            </div>
          }
        </div>
      </Style>
  );
}

export default Landing;

const Style = styled.div`
  
  .topBar{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .heading{
    font-size: 18px;
  }
  .horizontal{
    height: 1px;
    width: 100%;
    background-color: #000;
  }
  .centerPortion{
    padding-top: 10px;
  }
  .cent{
    text-align: center;
  }
  .token{
    font-weight: 600;
    font-size: 24px;
  }
  .dollar{
    font-size: 18px;
  }
  .bottomPortion{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
