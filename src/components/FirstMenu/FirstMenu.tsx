import style from "./firstMenu.module.scss";
import { Link } from "react-router-dom";
import gear from "../../images/gear.svg";
import leftHalfGear from "../../images/leftHalfGear.png";
import rightHalfGear from "../../images/rightHalfGear.png";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { getRotateConfig } from "../../services/gsap/gsapStyleFunc";
import { Background } from "../Background/Background";
import { useNavigate } from "react-router";

export const FirstMenu = () => {
  const [move, setMove] = useState<boolean>(false);
  const navigate = useNavigate()
  const leftHalfGearTr = useRef<any>(null);
  const rightHalfGearTr = useRef<any>(null);
  const navBarTr = useRef<any>(null);


  useEffect(() => {
    if (move) {
      gsap.to(leftHalfGearTr.current, getRotateConfig("right", "0.010em", 450));
      gsap.to(rightHalfGearTr.current, getRotateConfig("left", "-0.010em", 450));
      gsap.to(leftHalfGearTr.current, {
        delay: "1",
        marginBottom: "-15vh",
        marginTop: "-40vh",
      });
      gsap.to(rightHalfGearTr.current, {
        delay: "1",
        marginTop: "25vh",
        marginBottom: "-25vh",
      });
      gsap.to(navBarTr.current, {
        delay: "2",
        visibility: "visible",
        opacity: "1",
      });
    }
  }, [move]);

  const handleGo = async (path: string) => {
    const projectTl = gsap.timeline({onComplete: () => navigate(path)})
    gsap.to(navBarTr.current, {
      visibility: "hidden",
      opacity: "0",
    })
    gsap.to(leftHalfGearTr.current, {
      delay: "1",
      marginBottom: "0vh",
      marginTop: "0vh",
    });
      gsap.to(rightHalfGearTr.current, {
        delay: "1",
        marginTop: "0vh",
        marginBottom: "0vh",
      });
         gsap.to(leftHalfGearTr.current, {
          rotation: '-450', 
          transformOrigin:'right', 
          marginRight: '0.010em',
          marginTop: '10vh',
          delay: '1.9',
          duration: 5,
          scale: 4,
         });
         gsap.to(rightHalfGearTr.current, {
          rotation: '-450', 
          transformOrigin:'left', 
          marginRight: '-0.010em',
          marginTop: '10vh',
          delay: '1.9',
          duration: 5,
          scale: 4,
         });
         gsap.to(rightHalfGearTr.current, {
          delay: "7",
          marginBottom: "-150vh",
          marginTop: "-400vh",
        });
        projectTl.to(leftHalfGearTr.current, {
          delay: "7",
          marginTop: "250vh",
          marginBottom: "-250vh",
        });
      }


  return (
    <div className={style.container}>
      <div className={style.menuButton}>
        <img
          ref={leftHalfGearTr}
          className={!move ? style.leftHalfGear : style.nonStile}
          src={leftHalfGear}
          alt="navigationBar"
        />
        <button
          onClick={() => setMove(true)}
          className={!move ? style.openMenu : style.hidden}
        />
        <img
          ref={rightHalfGearTr}
          className={!move ? style.rightHalfGear : style.nonStile}
          src={rightHalfGear}
          alt="navigationBar"
        />
      </div>
      <div>
        <ul ref={navBarTr} className={style.navBar}>
          <li>
            {" "}
            <button onClick={() => handleGo('/projects')} className={style.navButton}>Projects</button>
          </li>
          <li>
            {" "}
            <button onClick={() => handleGo('/profile')} className={style.navButton}>Profile</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
