import styles from "./app.module.scss";
import React, { useState } from "react";
import { FirstMenu } from "../FirstMenu/FirstMenu";
import { Route, Routes, Outlet } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Contacts } from "../Contacts/Contacts";
import { Projects } from "../Projects/Projects";
import bubble1 from '../../images/bubble.png';
import bubble2 from '../../images/bubble2.png';
import bubble3 from '../../images/bubble3.png';
import { Background } from "../Background/Background";
export const App = () => {
  const [menu, setMenu] =  useState<boolean>(false)

  return <div className={styles.container}>
    <Background/>
    <FirstMenu/>
    <Routes>
    <Route path='/profile' element={<Profile/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Outlet />
  </div>;
};