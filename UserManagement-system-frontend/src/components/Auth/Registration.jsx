import React, {useState} from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";

function RegistrationPage(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        role:'',
        city:''
    });


    const HandleInput = (e) =>{
        const {name , value} = e.target;
        setFormData({...formData, [name]: value });
    };

    const HandleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const token = localStorage.getItem('token')
            await  UserService.register(formData, token);

            setFormData({
                name:'',
                email:'',
                password:'',
                role:'',
                city:''
            });
            alert('User registered Successfully!');
            navigate('/admin/user-management');

        }catch(error){
            console.log('Error registering User :' ,error);
            alert('An Error Occured while registering user');
        }
    };

    return(
        <div className="auth-container">
            <h2>Register Page</h2>
            <form onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={HandleInput} required/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={HandleInput} required/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={HandleInput} required/>
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={HandleInput} placeholder=" ENTER ROLE"/>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={HandleInput} placeholder="ENTER CITY"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default RegistrationPage;


