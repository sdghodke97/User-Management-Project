import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import RegistrationPage from "./components/Auth/Registration";
import UserManagement from "./components/userspage/UserManagement";
import UpdateUser from "./components/userspage/UpdateUser";
import LoginPage from "./components/Auth/LoginPage";
import ProfilePage from "./components/userspage/ProfilePage";
import UserService from "./components/service/UserService";


function App(){
   return(
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<LoginPage />}/>
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/profile" element={<ProfilePage/>} />
              
              {UserService.AdminOnly() && (
                <>
                  <Route path="/register" element = {<RegistrationPage/>}/>
                  <Route path="/admin/user-management" element={<UserManagement />} />
                  <Route path="/update-user/:userId" element = {<UpdateUser/>}/>
                  
                </>
              )}
              <Route path="*" element={<Navigate to={<LoginPage/>}/>} />
            </Routes>

          </div>
        
      </div>
    </BrowserRouter>
   )
}
export default App;