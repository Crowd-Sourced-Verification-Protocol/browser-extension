import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Radio, Input, Space } from 'antd'

const Report = ({setReportFlag, id, url}) => {

  const [value, setValue] = React.useState(1)
  const [text, setText] = React.useState("")

  const submit = async() =>{
    let reason = ""
    if(value===1){
      reason = "It's Spam"
    }
    if(value===2){
      reason = "Nudity or sexual activity"
    }
    if(value===3){
      reason = "Fake News"
    }
    if(value===4){
      reason = "Copyright"
    }
    if(value===5){
      reason = text
    }
    const data = {
      "reportReason": reason,
      "userId": id,
      "url": url,
      "reasonType": value
    }
    console.log(data)
    try{
      const response = await axios({
        url: `https://icdrive-backend.herokuapp.com/addReport`,
        method:"POST",
        headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        },
        data:data
      })
      setReportFlag(0)
    } catch(error){
      console.log(error)
    }
  }

  return (
    <Style>
      <div className="center_it">
        <Radio.Group onChange={(e)=>setValue(e.target.value)} value={value}>
          <Space direction="vertical">
            <Radio value={1}>It's Spam</Radio>
            <Radio value={2}>Nudity or sexual activity</Radio>
            <Radio value={3}>Fake News</Radio>
            <Radio value={4}>Copyright</Radio>
            <Radio value={5}>
              More...
              {value === 5 ? <Input text={text} onChange={(e)=>setText(e.target.value)} style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
          </Space>
        </Radio.Group>
        </div>
        <div className="bottomPortion">
          <Button type="primary" onClick={()=>{setReportFlag(0)}} >Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={submit} danger>Submit</Button>
        </div>
    </Style>
  );
}

export default Report;

const Style = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  .center_it{
    padding-top: 20px;
    padding-left: 50px;
  }
  .bottomPortion{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
