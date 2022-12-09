import {useEffect, useState} from "react";
import http from '../http'
import { useParams } from "react-router-dom";

export default function View(props){

   // const navigate = useNavigate();
    const [inputs,setInputs] = useState({}); 
   
    const {id} = useParams();

    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }




    return (
        <div>
            <h1>User Details</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card-p-4">
                        <h3>Name</h3>
                        <p>{ inputs.name }</p>
                        <h3>Email</h3>
                        <p>{ inputs.email }</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}