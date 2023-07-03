import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import AdminNav from '../AdminNav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

// id: "",
// totalItems: "",
// totalOrderPrice:"" ,
// orderOreatedOn:"" ,
// cartOwner: "",
// orderItems: "",
// placedOn: "",
// status: "",
// address: ""


const EditCategoryComponent = () => {
// const [id,setId]=useState('');
const [categoryName,setCategoryName]=useState("");
const [description,setDescription]=useState("");

    const history = useHistory();
    const { id } = useParams();
 
    const updateCategory = async (e) => {
        e.preventDefault(); 
        console.log(id);
        debugger;
        try{
        await axios.put(`http://13.233.168.239:8080/pizzadelivery/category`,{
            id:id,
            categoryName: categoryName,
            description: description,
        }).then((res)=>{
            if(res.data != null){
              debugger;
            //   alert("category updated successfully");
            toast.success("category updated successfully")
              console.log("category updated successfully")
              
            } else {
            //   alert("Could not be updadated category");
            toast.error("Could not be updadated category")
              console.log("Could not be updated category")
        }})
    }catch(e){
        console.log(e);
    } 
        history.push("/displaycategories");
    }
 
    useEffect(() => {
        getCategoryById();
    }, []);
 

    const getCategoryById = async () => {
        debugger;
        try{
        const response = await axios.get(`http://13.233.168.239:8080/pizzadelivery/categories/${id}`);
        setCategoryName(response.data.categoryName);
        setDescription(response.data.description);
        }catch(error){
            console.log(error)
        }
    }
 
    return (
        <div>
            <AdminNav/>
            <ToastContainer autoClose={1000} />
            <form onSubmit={ updateCategory }>

                <div className="form-group">
                    <label className="label">categoryName</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="categoryName"
                        value={ categoryName }
                        onChange={ (e) => setCategoryName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">description</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                
 
                <div className="form-group">
                <button className="btn btn-primary mt-4">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditCategoryComponent