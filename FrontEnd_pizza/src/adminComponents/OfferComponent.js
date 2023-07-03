import { useState } from "react";
import axios from "axios";
import AdminNav from "../AdminNav";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom/cjs/react-router-dom";


function OfferComponent(){

    const [id,setId]=useState('');
    const [name,setName]=useState("");
    const [discount,setDiscount]=useState("");
    const[valid_upto,setValid_upto]=useState("");
    const[valid_from,setValid_from]=useState("");
    const[code,setCode]=useState("");
    const[terms_conditions,setTerms_conditions]=useState("");



    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://13.233.168.239:8080/pizzadelivery/offer",
        {
        id:id,
        name: name,
        discount: discount,
        valid_upto: valid_upto,
        valid_from: valid_from,
        code : code,
        terms_conditions : terms_conditions
        
        });
        toast.success("offer added Successfully")
          //alert("offer added Successfully");
          setId("");
          setName("");
          setDiscount("");
          setValid_upto("");
          setValid_from("");
          setCode("");
          setTerms_conditions("");
        }
    catch(err)
        {
          //alert("Failed to add offer");
          toast.error("Failed to add offer")
        }
   }



    return(
        <div>
            <AdminNav/>
        <div class="container mt-4">
        <ToastContainer autoClose={1000} />
        <form>
                <div class="container mt-4">
                <label>name</label>
                <input type="text" class="form-control"placeholder="enter name"
                value={name}
                onChange={(event)=>{
                    setName(event.target.value);
                }}
                />
                </div>

                <div class="form-group">
                <label>discount</label>
                <input type="text" class="form-control"placeholder="enter discount"
                value={discount}
                onChange={(event)=>{
                    setDiscount(event.target.value);
                }}
                />
                </div>

                <div class="form-group">
                <label>valid_upto</label>
                <input type="date" class="form-control"placeholder="enter valid upto"
                value={valid_upto}
                onChange={(event)=>{
                    setValid_upto(event.target.value);
                }}
                />
                </div>


                <div class="form-group">
                <label>valid_from</label>
                <input type="date" class="form-control"placeholder="enter valid from"
                value={valid_from}
                onChange={(event)=>{
                    setValid_from(event.target.value);
                }}
                />
                </div>

                <div class="form-group">
                <label>code</label>
                <input type="text" class="form-control"placeholder="enter code"
                value={code}
                onChange={(event)=>{
                    setCode(event.target.value);
                }}
                />
                </div>

                <div class="form-group">
                <label>terms_conditions</label>
                <input type="text" class="form-control"placeholder="enter terms and conditions"
                value={terms_conditions}
                onChange={(event)=>{
                    setTerms_conditions(event.target.value);
                }}
                />
                </div>
        
                <button class="btn btn-primary mt-4" onClick={save}>Register</button>
                {"        "}<Link to="/adminofferdisplay">
  <button className="btn btn-primary mt-4">Show Category</button>
</Link>
        </form>
        </div>
    </div>
    );
}
export default OfferComponent;