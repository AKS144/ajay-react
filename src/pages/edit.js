import {useEffect, useState} from "react";
import http from '../http'
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props){

    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});  
    //const [users,setUsers] = useState([]); 
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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        //console.log(inputs);
        http.patch('/users/'+id,inputs).then((res)=>{
            navigate('/');
        })
    }

    
    return (
        <div>
            <h1>Edit User</h1>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control mb-2" 
                            value={inputs.name || ''}
                            onChange={handleChange}
                    />

                    <label>Email</label>
                    <input type="text" name="email" className="form-control mb-2" 
                              value={inputs.email || ''}
                              onChange={handleChange}
                    />
                  
                    <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                </div>

            </div>
        </div>
    )
}