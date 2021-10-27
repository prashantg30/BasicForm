import React from "react";
import "./table.css";
import axios from "axios";

export default function TABLE() {
let [data, setData]=React.useState([]);
  // let dummyData = [
    
  //      { gender: male,
  //       auditons: modelling,
  //       full_name: Sam,
  //       father_name: Aakash Chauhan,
  //       dob: 05-06-1999,
  //       contact: 9015284797,
  //       address: Priyadarshni Vihar, Nirman Vihar, Delhi,
  //       email: samchauhanftv@gmail.com,
  //     },
  //     { gender: female,
  //       auditons: dancing,
  //       full_name: Tanya,
  //       father_name: Ashish Mehra,
  //       dob: 08-10-2004,
  //       contact: 7669393398,
  //       address: Adarsh Nagar, Roorkee, Uttarakhand,
  //       email: tanyamehra12@gmail.com,
  //     },
  //     { gender: others,
  //       auditons: Singing,
  //       full_name: Siddharth,
  //       father_name: Manish Singh,
  //       dob: 26-09-2002,
  //       contact: 6395548657,
  //       address: 7/A, Sonalipuram, Roorkee, Uttarakhand,
  //       email: sid1245@gmail.com,
  //     },
  // ]
  React.useEffect(()=>{
    getData();
  },[])
  
  let url = 'http://65.2.148.239:8000/test/api/show'
  async function getData(){
    try{
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    console.log(response.data)
    setData(response.data);}
    catch(e){
      console.log(e)
    }
  
  }
  return (
    <div className="candidates">
      
      <table className="tables">
      <tr><th colSpan="10" style={{fontSize:"42px", fontWeight:"600", padding:"24px 0px", color:"white", background:"#e3363c"}}>CANDIDATE DETAILS</th></tr>
        <tr>
          <th>Full Name</th>
          <th>Father's Name</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
          <th>Audition For</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {data.filter((el)=>el.full_name!=="undefined").map((ele)=><tr>
          <td style={{fontWeight:"bold"}}>{ele.full_name!=="undefined"?ele.full_name:"Invalid Data"}</td>
          <td>{ele.father_name!=="undefined"?ele.father_name:"Invalid Data"}</td>
          <td>{ele.dob!=="undefined"?ele.dob:"Invalid Data"}</td>
          <td>{ele.gender!=="undefined"?ele.gender:"Invalid Data"}</td>
          <td>{ele.contact!=="undefined"?ele.contact:"Invalid Data"}</td>
          <td>{ele.email!=="undefined"?ele.email:"Invalid Data"}</td>
          <td>{ele.address!=="undefined"?ele.address:"Invalid Data"}</td>
          <td>{ele.audition!=="undefined"?ele.audition:"Invalid Data"}</td>
          <td><button className="delete_btn">Delete</button></td>
          <td><button className="edit_btn">Edit</button></td>
        </tr>)}
      </table>
    </div>
  );
}
