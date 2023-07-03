import { Route } from "react-router-dom";
import Login from "./LoginComponent";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProtectedRouteComponent(props)
{
    const history = useHistory();
    var isLoggedIn = false; //Code is yet to be written

    var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn");
    if(isLoggedInFromSessionStorage!=null)
    {
        if(isLoggedInFromSessionStorage=="True")
        {
            isLoggedIn = true;
        }
    }


    if(isLoggedIn) //check for sessionStorage values
    {
        return <Route  path={props.path} exact   
                        component={props.component} />;
    }
    else
    {
       return history.push("/login");
       //<Login></Login>
    }
}

export default ProtectedRouteComponent;