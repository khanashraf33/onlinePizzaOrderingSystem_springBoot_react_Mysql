import React, { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";
import AdminNav from "../AdminNav";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DisplayCategoryComponent(){
    var [userName, setUserName] = useState("");
    const [category,setCategory]=useState([]);
    var history = useHistory();

    useEffect( ()=>{
        const getCategory=async()=>{
            const reqData=await fetch("http://13.233.168.239:8080/pizzadelivery/categories");
            const resData=await reqData.json();
            setCategory(resData);
            console.log(reqData);
        }
        getCategory();
    },[]);

    var  Remove=(id)=>{
        axios.delete(`http://13.233.168.239:8080/pizzadelivery/category/${id}`);
        var filterCategory = category.filter((category)=>{
                                    return (category.id != id);
                                });
        setCategory(filterCategory);
        toast.success("Category deleted")

    }


    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        history.push("/login");
    }

    return(
        <React.Fragment>
        <div>
        <ToastContainer autoClose={1000} />
        <AdminNav/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <figure class="text-center"><h1>ALL CATEGORIES</h1></figure>
                <div style={{float: "right"}}>
                <a href="/addcategory" className="btn btn-info">ADD CATEGORY</a>
                Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
                </div>
                <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>sr. no</th>
                    <th>categoryName</th>
                    <th>description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {category.map((category,index)=>(
                    <tr key={index}>

                            <td>{index+1}</td>
                            <td>{category.categoryName}</td>
                            <td>{category.description}</td>



                            <td>
                            <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(category.id)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                            </td>
                            <td>
                                    <button type="button" class="btn btn-outline-warning">
                                    <Link to={`/editcategory/${category.id}`}>Edit</Link>
                                                </button>
                                    </td>
                        </tr>
                   ))
                }
                </tbody>
              </table>

                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
        
    );

}
export default DisplayCategoryComponent;