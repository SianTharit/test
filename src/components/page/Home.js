import BodyList from "../body/BodyList";
import absImage from "../../assets/default-abs.png";
import fingerImage from "../../assets/default-finger.png";
import classes from "./Home.module.css";
import { useState } from "react";
import { useBody } from "../../context/BodyContext";
import FingerDiv1 from "../divBox/fingerDiv/FingerDiv1";

const MockDataBody = [
   {
      id: 1,
      title: "ปวดท้องบริเวณใดมากที่สุด ?",
      image: absImage,
      detail: "ปวดทั่วท้อง",
   },
   {
      id: 2,
      title: "จุดไหนที่คุณปวดนิ้วมากที่สุด ?",
      image: fingerImage,
      detail: "ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ",
   },
];

function Home() {
   const [getBody, setGetBody] = useState(MockDataBody);
   const [isShow, setIsShow] = useState(false);
   const {
      manageStateOr,
      manageStateOrFinger,
      setAbs1,
      setAbs2,
      setAbs3,
      setAbs4,
      setAbs5,
      setAbs6,
      setAbs7,
      setFinger1,
      setFinger2,
      setFinger3,
   } = useBody();

   const handleClick = () => {
      if (manageStateOr) {
         setIsShow((prev) => !prev);
      }
   };

   console.log(isShow, "show");
   console.log(manageStateOr, "manage");
   return (
      <section className={classes.container}>
         <BodyList datas={getBody} isShow={isShow} />
         <div
            className={
               manageStateOr || manageStateOrFinger
                  ? classes.actions
                  : classes.actions_button
            }
         >
            <button onClick={handleClick}>ต่อไป</button>
         </div>
         {/* <FingerDiv1 /> */}
      </section>
   );
}

export default Home;
