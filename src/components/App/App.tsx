import styles from "./app.module.scss";
import React, { useState } from "react";
import { FirstMenu } from "../FirstMenu/FirstMenu";
import { Route, Routes, Outlet } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Projects } from "../Projects/Projects";
import { Background } from "../Background/Background";
import { useLocation } from "react-router";
import { SmallMenu } from "../SmallMenu/SmallMenu";

export const App = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Background />
      {location.pathname != "/" && <SmallMenu />}
      <Routes>
        <Route path="/" element={<FirstMenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
