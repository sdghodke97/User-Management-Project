import React,{useState, useEffect} from "react";
import UserService from "../service/UserService";

import { Link } from "react-router-dom";


function ProfilePage(){
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(()=> {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async ()=> {
        try{
            const token = localStorage.getItem('token');
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        }catch(error){
            console.log('Error while fetching the profile information :', error);
        }
    }
    return(
        <div className="profile-page-container">
            <h2>Profile Information</h2>
            <p>Name: {profileInfo.name}</p>
            <p>Email: {profileInfo.email}</p>
            <p>City: {profileInfo.city}</p>
            
            {profileInfo.role === 'ADMIN' && (
                <button><Link to={`/update-user/${profileInfo.id}`}>Update this Profile</Link></button>
            )}
        </div>
    );

}
export default ProfilePage;