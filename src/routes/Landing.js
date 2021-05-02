import React from 'react'
import styled from 'styled-components'
import { Button, Rate } from 'antd'
import axios from 'axios'
import Report from './Report'
import { getStorageData, setStorageData, getCurrentTabUrl } from "../chrome/utils";

const Landing = () => {

  //global chrome
  //document.title
  //window.location.href
  const [reportFlag, setReportFlag] = React.useState(false)
  const [url, setUrl] = React.useState('');
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
      console.log(data)
      setStorageData(data)
    }
    setId(data)
    //console.log(data)
    /*const queryInfo = {active: true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });*/
    /*const response = await axios({
      url: `http://localhost:3001/addUser`,
      method:"POST",
      headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json'
      },
      data:{userId:id}
    })
    response = await axios({
      url: `http://localhost:3001/getUser`,
      method:"GET",
      headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json'
      },
    })
    console.log(response)*/
  },[])

  const add_rating = async () => {
    const data = {
      "userId": id,
      "url": url,
      "rating": rate,
    }
    console.log(data)
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
              <p className="heading cent">0xC88C....CE7b</p>
              <div className="centerPortion">
                <p className="token cent">
                  100.0
                </p>
                <p className="cent">
                  $1.0
                </p>
              </div>
              <p className="cent">
                <Rate value={rate} onChange={setRate} />
              </p>
              <div className="bottomPortion">
                <Button type="primary" onClick={add_rating} >Rate</Button>&nbsp;&nbsp;
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
  
  .heading{
    padding-top: 10px;
    font-size: 18px;
  }
  .cent{
    text-align: center;
  }
  .token{
    font-weight: 600;
    font-size: 18px;
  }
  .centerPortion{
    padding-top: 5px;
  }
  .bottomPortion{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
