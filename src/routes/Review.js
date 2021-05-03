import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Card, Radio, Input, Space } from 'antd'

const Review = ({ setReportFlag, id }) => {

  const [value, setValue] = React.useState(1)
  const [text, setText] = React.useState("")

  const submit = async () => {
    setReportFlag(0)
  }

  return (
    <Style>

      <div className="center_it">
        <h3>View and mark the SPAM below for to earn coins.</h3>
      </div>
      <hr className="horizontal" />
      <div className="center_it">
        <label className="container"><a className="a-decor" href="">Youtube Link</a>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <p style={{ fontSize: '15px' }}>Crypto Scam</p>
        </label>
        <label className="container"><a className="a-decor" href="">Twitter Link</a>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <p style={{ fontSize: '15px' }}>Copyright</p>
        </label>
        <label className="container"><a className="a-decor" href="">Website Link</a>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <p style={{ fontSize: '15px' }}>Spam</p>
        </label>
        <label className="container"><a className="a-decor" href="">Instagram Link</a>
          <input type="checkbox"></input>
          <span className="checkmark"></span>
          <p style={{ fontSize: '15px' }}>Fake Profile</p>
        </label>
      </div>
      <div className="bottomPortion">
        <Button type="primary" onClick={() => { setReportFlag(0) }} >Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={submit} danger>Submit</Button>
      </div>
    </Style>
  );
}

export default Review;

const Style = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  .center_it{
    padding-left: 10px;
    padding-right: 10px;
  }
  .bottomPortion{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .horizontal{
    height: 1px;
    width: 100%;
    background-color: #000;
  }
  .a-decor {
    text-decoration: none;
    font-size: 18px;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
  }
  
  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
