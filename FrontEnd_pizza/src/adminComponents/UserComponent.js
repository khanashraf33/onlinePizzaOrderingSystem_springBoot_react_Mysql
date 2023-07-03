
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import AdminNav from '../AdminNav';
import { addToUserList } from './../actions/userListAction';
import { useDispatch } from 'react-redux';

function UserComponent()
{
    const dispatch = useDispatch()
    var [userName, setuserName] = useState("");
    const [users, setusers] = useState([
        {
            first_name : "",
            last_name : "",
            email : "",
            password : "",
            mobile_no : "",
            userRole : ""
        }
    ]);
    var history = useHistory();

    const addToUserList1 = (user) => {
        dispatch(addToUserList(user))
    }

    useEffect(()=>{
        axios.get("http://13.233.168.239:8080/pizzadelivery/users").then((res) =>{
            setusers(res.data)})
            console.log("This is user");
    }, []);



    var  Remove=(no)=>{
        ////////////////////////////////////
        //we have to implement this method//
        ////////////////////////////////////
 axios.delete(`http://13.233.168.239:8080/pizzadelivery/pizza/order/${no}`)
.then(response => {
  console.log(response.data);
}) 
        var filterusers = users.filter((user)=>{
                                    return (user.id != no);
                                });
        setusers(filterusers);
    }
    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        history.push("/login");
    }

    return(
        <div>
            <AdminNav/>
        <div class="container mt-4">
        <div style={{float: "right"}}>
 Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
</div>
<figure class="text-center"><h1>MY USER LIST</h1></figure>
            
            <div className="row">
                {
                    users.forEach((user) => dispatch(addToUserList(user)))
                }
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                            {/* <th>password</th> */}
                            <th>mobile_no</th>
                            <th>userRole</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return(
                                    <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    {/* <td>{user.password}</td> */}
                                    <td>{user.mobile_no}</td>
                                    <td>{user.userRole}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            addToUserList1(user)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                    </td>
                                    {/* <td>
                                    <button type="button" class="btn btn-outline-warning">
                                    <Link to={`/EditUserComponent/${user.id}`}>Edit</Link>
                                                </button>
                                    </td> */}
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default UserComponent;
