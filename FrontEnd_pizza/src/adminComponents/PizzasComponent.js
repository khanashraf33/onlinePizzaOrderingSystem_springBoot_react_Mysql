
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import AdminNav from '../AdminNav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PizzasComponent()
{
    var [userName, setuserName] = useState("");
    const [allpizza, setAllPizza] = useState([
        {
            id: "",
            name: "",
            price:"" ,
            avg_rating:"" ,
            summary: "",
            inStock: "",
            pizzaCategory: {
                id: "" ,
                categoryName: "",
                description: ""
            },
            veg: ""
        }
    ]);
    var history = useHistory();

    
    useEffect(()=>{
        // axios.get("http://13.233.168.239:8080/pizzadelivery/pizzas").then((res) =>{
            
        //     setAllPizza(res.data)})
        //     console.log("This is pizza");
        axios.get("http://13.233.168.239:8080/pizzadelivery/pizzas")
        .then((res) => {
          setAllPizza(res.data);
          console.log("This is pizza");
        })
        .catch((error) => {
          console.error("Error fetching pizza:", error);
        });
      
    }, []);

    // var  Remove=(no)=>{
    //     axios.delete(`http://13.233.168.239:8080/pizzadelivery/pizza/${no}`);
    //     var filterPizza = allpizza.filter((pizza)=>{
    //                                 return (pizza.id != no);
    //                             });
    //     setAllPizza(filterPizza);
    // }

    var Remove = async (no) => {
        try {
          await axios.delete(`http://13.233.168.239:8080/pizzadelivery/pizza/${no}`);
          var filterPizza = allpizza.filter((pizza) => {
            return pizza.id != no;
          });
          setAllPizza(filterPizza);
          toast.success("pizza Deleted Successfully")
        } catch (error) {
          console.error("Error removing pizza:", error);
        }
      };



    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        history.push("/login");
    }

    return(
        <div style={{marginTop:"70px"}}>
            <AdminNav/>
            <ToastContainer autoClose={1000} />
        <div class="container mt-4">
        <div style={{float: "right"}}>
        <br></br>
        {/* <button type="button" class="btn btn-outline-info"> */}
        <a href="/addproduct" className="btn btn-info">ADD PRODUCT</a>
        {/* <Link to={`/AddProductsComponent`}>ADD PRODUCT</Link> */}
        {/* </button> */}
        {"  "}{"  "}{"  "}
 Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
</div>
<br></br>
<figure class="text-center"><h1>MY PRODUCT LIST</h1></figure>
            
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>avg_rating</th>
                            <th>summary</th>
                            <th>inStock</th>
                            {/* <th>pizzaCategory</th> */}
                            {/* <th>reviews</th> */}
                            <th>veg</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allpizza.map((pizza)=>{
                                return(
                                    <tr key = {pizza.id}>
                                    <td>{pizza.id}</td>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.price}</td>
                                    <td>{pizza.avg_rating}</td>
                                    <td>{pizza.summary}</td>
                                    <td>{pizza.inStock ? 'Instock' : 'Out of Stock'}</td>
                                    {/* <td>{pizza.reviews}</td> */}
                                    <td>{pizza.veg ? 'Yes' : 'No'}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(pizza.id)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-outline-warning">
                                    <Link to={`/updateproduct/${pizza.id}`}>Edit</Link>
                                    </button>
                                    </td>
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

export default PizzasComponent;