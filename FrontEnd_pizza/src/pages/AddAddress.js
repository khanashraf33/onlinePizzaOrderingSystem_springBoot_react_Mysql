import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
 

const AddAddress = () => {
    const userList = useSelector((store) => store.userList)
    console.log("........................");
    console.log(userList);
const [id,setId]=useState('');
const [city,setCity]=useState("");
const [country,setCountry]=useState("");
const [house_no,setHouse_no]=useState("");
const [pincode,setPincode]=useState("");
const [state,setState]=useState("");
const [street,setStreet]=useState("");
const [user,setUser]=useState({});
    const history = useHistory();

useEffect(()=>{
    var userid = sessionStorage.getItem("userId");
    setId(userid);
},[]);

     function addAddress(event)
    {
        event.preventDefault();
    try
        {
            debugger;
            checkoutHandler();
         axios.post(`http://13.233.168.239:8080/pizzadelivery/address/${id}`,
        {
            city: city,
            country: country,
            house_no: house_no,
            pincode:pincode,
            state:state,
            street:street,
            //user: user
        });
        //history.push("/shipping");
        window.location.href = 'http://13.232.147.37:3000/shipping';
    }
    catch(err)
        {
          alert("pizza added successful");
          //history.push("/shipping");
          window.location.href = 'http://13.232.147.37:3000/shipping';
        }
   }

   const checkoutHandler =()=>{
    var userid = sessionStorage.getItem("userId");
    setId(userid);
    console.log("****************#####************");
console.log(userid);
console.log(userList);
//[...state, action.payload]

const selectedUser = userList.find(use => use.id == userid);
debugger;
console.log("##################")
console.log(selectedUser);
setUser(selectedUser);
console.log(selectedUser);
console.log(selectedUser);
console.log(user);
console.log(selectedUser);
console.log(selectedUser);
}

 
 
//     useEffect(() => {
//         var userid = sessionStorage.getItem("userId");
//         console.log("****************#####************");
// console.log(userid);
// console.log(userList);
// //[...state, action.payload]

// const selectedUser = userList.find(cat => cat.id == userid);
// debugger;
// console.log("##################")
// console.log(selectedUser);
// setUser(selectedUser);

//     }, [userList]);
 

 
    return (
        <div class="container mt-4">
            <h2> </h2>
            <h2>ADD ADDRESS</h2>
            <h2>ADD ADDRESS</h2>
            <form onSubmit={ addAddress }>

                <div  class="form-group">
                    <label>City</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="enter name of city"
                        value={ city }
                        onChange={ (e) => setCity(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="Enter country name"
                        value={ country }
                        onChange={ (e) => setCountry(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <label >House no</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="enter house_no"
                        value={ house_no }
                        onChange={ (e) => setHouse_no(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <label>Pincode</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="pincode"
                        value={ pincode }
                        onChange={ (e) => setPincode(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="enter name of state"
                        value={ state }
                        onChange={ (e) => setState(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <label>Street</label>
                    <input 
                        class="form-control"
                        type="text"
                        placeholder="street"
                        value={ street }
                        onChange={ (e) => setStreet(e.target.value) }
                    />
                </div>

                <div class="form-group">
                    <button className="btn btn-primary">Add Address</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddAddress;