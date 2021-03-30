import React from 'react'
import { useState } from "react";
import { useParams } from "react-router";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'; 
import './Item.css';

 const Items = () => {

    const [Name, setName] = useState("");
    const [Category, setCategory] = useState("");
    const [pic, setPic] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        const item={Name,Category,pic};
        fetch("http://localhost:3001/items/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          }).then((response) => {
            console.log(response.status);
            
          
          });
               
        }; 
    return (
        <div className=" text-center py-4">
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                
        <form onSubmit ={handleSubmit}>
          <label>Name:</label>
          <input type="text" required value={Name}
          onChange={(e)=> setName(e.target.value)}></input>
  
          <label>Category:</label>
          <input type="text" required value={Category}
          onChange ={(e)=> setCategory(e.target.value)}></input>

           <label>Please add a picture </label>
           <input type="file" value={pic} 
          onChange={(e)=>setPic(e.target.value)} name="picture"></input>
          
          <MDBBtn className="btn btn-outline-purple" type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
          </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
    )
}
export default Items;