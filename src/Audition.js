import React, { useState } from "react";
import "./auditon.css";
import axios from "axios";

export default function Audition() {
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);
  const [fathers_name, setFathers_name] = useState(null);
  const [dob, setDob] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [auditons, setAuditons] = useState(null);
  const [email, setEmail] = useState(null);

function resetValue(){
    setAuditons(null);
    setGender(null);
    setName('');
    setFathers_name('');
    setDob('');
    setContact('');
    setAddress('');
    setEmail('');
    alert(`Data reset successfully`)
}

console.log(auditons)

function checkValidation(){
  let jsonData = {};
  if(gender === null || name === null || fathers_name === null || dob === null || contact === null || auditons === null ||
    address === null || email === null){
      alert(`Fields can't be empty`)
      
  }
  else {
  jsonData={
    gender: gender,
    auditon: auditons,
    full_name: name,
    father_name: fathers_name,
    dob: dob,
    contact: contact,
    address: address,
    email: email,
  }
}
return jsonData;
}





  

  let url = 'http://65.2.148.239:8000/test/api/insert'

  //funciton to post data to backend
async function postData(){
  let data = checkValidation()
  let response;
  if(data){
  response = await axios.post(url, data)
  }
  if(response.status === 200){
    alert('Data Submitted Succesfully') 
  }
  resetValue();
}


  return (
    <div className="audition_form"> 
      <h1>MEGA-AUDITION FORM</h1>
      <form className="submission_form">
        {/* <label>Full Name</label> */}
        <input
          type="text"
          value={name}
          className="text_box"
          placeholder="FULL NAME*"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        {/* <label>Father's Name</label> */}
        <input
          type="text"
          className="text_box"
          placeholder="Father's Full Name*"
          value={fathers_name}
          onChange={(e) => setFathers_name(e.target.value)}
        ></input>
        <br />
        {/* <label>Gender</label> */}
        <div className="radios">
          
          <input
            type="radio"
            style={{ marginRight: "10px", marginLeft: "30px" }}
            checked={gender === "male" ? true : false}
            onChange={() => setGender("male")}
          />
          <label style={{ fontSize: "22px", marginRight: "25px" }}>Male</label>
          <input
            type="radio"
            style={{ marginRight: "10px" }}
            checked={gender === "female" ? true : false}
            onChange={() => setGender("female")}
          />
          <label style={{ fontSize: "22px", marginRight: "25px" }}>
            Female
          </label>
          <input
            type="radio"
            style={{ marginRight: "10px" }}
            checked={gender === "others" ? true : false}
            onChange={() => setGender("others")}
          />
          <label style={{ fontSize: "22px", marginRight: "25px" }}>
            Others
          </label>
          <br />
        </div>
        {/* <label>DOB</label> */}
        <input
          type="date"
          className="text_box"
          placeholder="Your DOB*"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        ></input>
        <br />
        {/* <label>Contact</label> */}
        <input
          type="text" maxlength="10"
          className="text_box"
          placeholder="Mobile No.*"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>
        <br />
        {/* <label>E-Mail</label> */}
        <input
          type="text"
          className="text_box"
          placeholder="Your Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        {/* <label for="Auditions">Audition For</label> */}
        <select
          name="Auditions"
          id="Auditons"
          className="dropdown"
          onChange={(e) => setAuditons(e.target.value)}
        >
          <option value="Choose Your Talent">Choose Your Talent</option>
          <option value="Dancing">Dancing</option>
          <option value="Acting">Acting</option>
          <option value="Modelling">Modelling</option>
          <option value="Singing">Singing</option>
        </select>
        <br />
        {/* <label>Address</label> */}
        <textarea
          id="address_box"
          className="text_box"
          placeholder="Complete Address*"
          rows="4"
          cols="50"
          style={{ height: "120px"}}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <button
          type="button"
          className="submit_btn"
          onClick={() => postData()}
        >
          Submit
        </button>
        <button type="button" className="reset_btn" onClick={() => resetValue()}>
          Reset
        </button>
        {/* <input type="button" className="submit_btn">Submit</input>
        <input type="button" className="Reset_btn">Reset</input> */}
      </form>
    </div>
  );
}
