import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';
import ProductCard from '../layout/ProductCard';
import NavBar from '../layout/NavBar';

function Home() {
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState([])
    const [catId, setCatId] = useState(0);
    const [filteredList,setFilteredList] = useState(products);

    console.log("Filtered List")
    console.log(filteredList)    

    useEffect(()=>{
        loadProducts();
        console.log("List of products: ")
        console.log(products)
    },[]);

    // const loadProducts= async ()=>(
        
    //     await axios.get("http://13.233.168.239:8080/pizzadelivery/pizzas").then((res)=>{
    //         setProducts(res.data)
    //         console.log("Inside loadProducts")
    //         console.log("res.data")
    //         console.log(res.data)
    //         console.log("res")
    //         console.log(res)
    //         console.log("products")
    //         console.log(products)
    //     })
    // );


    const loadProducts = async () => {
        try {
            const response = await axios.get("http://13.233.168.239:8080/pizzadelivery/pizzas");
            setProducts(response.data);
            console.log("Inside loadProducts");
            console.log("response.data");
            console.log(response.data);
            console.log("response");
            console.log(response);
            console.log("products");
            console.log(products);
        } catch (error) {
            console.error("Error loading products:", error);
        }
    };
    

    useEffect(()=>{
        // setFilteredList(catId==0?(products):(products.filter(item => item.pizzaCategory.id=={catId})));
        if(catId!=0){
        setFilteredList(products.filter(i=>i.pizzaCategory.id==catId))
        console.log("FilteredList in use effect")
        console.log(filteredList)
        }else{
            setFilteredList(products)
        }
    })

  return (
   
    <div className='main-area'>
        <NavBar selectCat={setCatId}/>

        {
             
products?.length>0?(
     <>
      <div className='dumy'>
                        {
            filteredList.map((product)=>{
                return(
                    <div>
                        <ProductCard product={product}/>
                    </div>
                )
            }) 
        }
    </div>


    </>
    ):(
        <>
   
   <h1 id="maintenance-text">We apologize for the inconvenience. Our website is currently undergoing maintenance.</h1>



    
     
<div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60" className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">Pepperoni Pizza </h5>
        <h6>Rating: 9 </h6>
        <h6>Price : ₹ 1299</h6>
        <p className="card-text">biting into a crispy, salty round of pepperoni</p>
        <button type="button" class="btn btn-primary" >Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>


    <div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-recipe-1-500x500.jpg " className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">Margherita Pizza </h5>
        <h6>Rating: 8</h6>
        <h6>Price : ₹ 1199</h6>
        <p className="card-text">The toppings contain, basil, fresh mozzarella cheese, a drizzle of olive oil, and fresh tomato sauce.</p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>


    <div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://theorangecuisinehome.files.wordpress.com/2019/05/9j925zalp4o01.jpg" className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">Chicken Sausage Pizza</h5>
        <h6>Rating: 8</h6>
        <h6>Price : ₹ 1099</h6>
        <p className="card-text">variety of ingredients like sliced chicken sausages, grated moz   </p>
        <button type="button" class="btn btn-primary" >Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>

    <div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://media.cnn.com/api/v1/images/stellar/prod/220505113531-06-body-pambazo-worlds-best-sandwiches.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp " className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">Pambazo, Mexico</h5>
        <h6>Rating: 9</h6>
        <h6>Price : ₹ 800</h6>
        <p className="card-text">potatoes and Mexican chorizo inside, topped with lettuce, cheese and cream.     </p>
        <button type="button" class="btn btn-primary" >Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>


    <div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://cdn.tasteatlas.com//images/dishes/168a337bde5c40ea8fbe8b8eddd6259e.jpg?w=905&h=510     " className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">CAKE Icebox Cake</h5>
        <h6>Rating: 8</h6>
        <h6>Price : ₹ 600</h6>
        <p className="card-text">with added pineapples, bananas, or chocolate pudding  </p>
        <button type="button" class="btn btn-primary" >Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>


    <div>
    <div className="card" style={{"width": "18rem"}}>
    <img src = "https://cdn.tasteatlas.com//Images/Dishes/cd276b9fad0541c4bf1cd11c30fd5044.jpg?w=905&h=510  " className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">CAKE Lagkage  </h5>
        <h6>Rating: 8</h6>
        <h6>Price : ₹ 600</h6>
        <p className="card-text">at least three layers of sponge intertwined with pastry creams, fresh fruit, or fruit preserves.</p>
        <button type="button" class="btn btn-primary" >Add To Cart</button>
        <br/>
    </div>
    </div>
    </div>



        </>
    )
}
    </div>
  )
}

export default Home