import { useBody } from "../../../context/BodyContext";
import classes from "./FingerDiv3.module.css";

function FingerDiv3() {
   const { finger3 } = useBody();
   return (
      <div className={classes.wrapper}>
         <div className={finger3 ? classes.div1_active : classes.div1}></div>
         <div className={finger3 ? classes.div2_active : classes.div2}></div>
         <div className={finger3 ? classes.div3_active : classes.div3}></div>
         <div className={finger3 ? classes.div4_active : classes.div4}></div>
         <div className={finger3 ? classes.div5_active : classes.div5}></div>
      </div>
   );
}

export default FingerDiv3;
