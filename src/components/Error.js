import {useRouterError} from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
           <h1>Oops!!!</h1>
           <h1>Something went wrong</h1>
           <h3>
            {err.status}:{err.statusText}
           </h3>
        </div>
        );
};
export default Error;