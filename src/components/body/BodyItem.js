import Card from "../ui/Card";
import classes from "./BodyItem.module.css";
import { useBody } from "../../context/BodyContext";
import AbsText1 from "../textBox/absText/AbsText1";
import AbsText2 from "../textBox/absText/AbsText2";
import AbsText3 from "../textBox/absText/AbsText3";
import AbsText4 from "../textBox/absText/AbsText4";
import AbsText5 from "../textBox/absText/AbsText5";
import AbsText6 from "../textBox/absText/AbsText6";
import AbsText7 from "../textBox/absText/AbsText7";
import FingerText from "../textBox/fingerText/FingerText";
import FingerDiv1 from "../divBox/fingerDiv/FingerDiv1";
import FingerDiv2 from "../divBox/fingerDiv/FingerDiv2";
import FingerDiv3 from "../divBox/fingerDiv/FingerDiv3";

function BodyItem(props) {
   const { title, image, detail, id } = props;
   const {
      abs1,
      abs2,
      abs3,
      abs4,
      abs5,
      abs6,
      abs7,
      setAbs1,
      setAbs2,
      setAbs3,
      setAbs4,
      setAbs5,
      setAbs6,
      setAbs7,
      finger1,
      finger2,
      finger3,
      setFinger1,
      setFinger2,
      setFinger3,
      manageStateAnd,
      manageStateAndFinger,
   } = useBody();

   const handleClickAllAbs = () => {
      abs1 || setAbs1((prev) => !prev);
      abs2 || setAbs2((prev) => !prev);
      abs3 || setAbs3((prev) => !prev);
      abs4 || setAbs4((prev) => !prev);
      abs5 || setAbs5((prev) => !prev);
      abs6 || setAbs6((prev) => !prev);
      abs7 || setAbs7((prev) => !prev);

      if (manageStateAnd) {
         setAbs1(false);
         setAbs2(false);
         setAbs3(false);
         setAbs4(false);
         setAbs5(false);
         setAbs6(false);
         setAbs7(false);
      }
   };

   const handleClickAllFinger = () => {
      finger1 || setFinger1((prev) => !prev);
      finger2 || setFinger2((prev) => !prev);
      finger3 || setFinger3((prev) => !prev);

      if (manageStateAndFinger) {
         setFinger1(false);
         setFinger2(false);
         setFinger3(false);
      }
   };

   return (
      <li className={classes.item}>
         <Card>
            {id === 1 ? (
               <>
                  <div className={classes.content}>
                     <h1>{title}</h1>
                  </div>
                  <div className={classes.image}>
                     <img src={image} alt="" />
                     {abs1 && (
                        <div className={classes.abs1}>
                           <AbsText1 />
                        </div>
                     )}
                     {abs2 && (
                        <div className={classes.abs2}>
                           <AbsText2 />
                        </div>
                     )}
                     {abs3 && (
                        <div className={classes.abs3}>
                           <AbsText3 />
                        </div>
                     )}

                     {abs4 && (
                        <div className={classes.abs4}>
                           <AbsText4 />
                        </div>
                     )}

                     {abs5 && (
                        <div className={classes.abs5}>
                           <AbsText5 />
                        </div>
                     )}

                     {abs6 && (
                        <div className={classes.abs6}>
                           <AbsText6 />
                        </div>
                     )}

                     {abs7 && (
                        <div className={classes.abs7}>
                           <AbsText7 />
                        </div>
                     )}

                     <div
                        className={
                           abs1 ? classes.abs_div_1_active : classes.abs_div_1
                        }
                        onClick={() => setAbs1((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs2 ? classes.abs_div_2_active : classes.abs_div_2
                        }
                        onClick={() => setAbs2((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs3 ? classes.abs_div_3_active : classes.abs_div_3
                        }
                        onClick={() => setAbs3((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs4 ? classes.abs_div_4_active : classes.abs_div_4
                        }
                        onClick={() => setAbs4((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs5 ? classes.abs_div_5_active : classes.abs_div_5
                        }
                        onClick={() => setAbs5((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs6 ? classes.abs_div_6_active : classes.abs_div_6
                        }
                        onClick={() => setAbs6((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           abs7 ? classes.abs_div_7_active : classes.abs_div_7
                        }
                        onClick={() => setAbs7((prev) => !prev)}
                     ></div>
                     <div
                        className={
                           manageStateAnd
                              ? classes.actions_button
                              : classes.actions
                        }
                     >
                        <button onClick={handleClickAllAbs}>
                           <p>{detail}</p>
                        </button>
                     </div>
                  </div>
               </>
            ) : (
               <>
                  <div className={classes.content}>
                     <h1>{title}</h1>
                  </div>
                  <div className={classes.image}>
                     <div
                        className={classes.finger_div1}
                        onClick={() => setFinger1((prev) => !prev)}
                     >
                        <FingerDiv1 />
                     </div>
                     <div
                        className={classes.finger_div2}
                        onClick={() => setFinger2((prev) => !prev)}
                     >
                        <FingerDiv2 />
                     </div>
                     <div
                        className={classes.finger_div3}
                        onClick={() => setFinger3((prev) => !prev)}
                     >
                        <FingerDiv3 />
                     </div>
                     <img src={image} alt="" />
                     {finger1 && (
                        <div className={classes.finger1}>
                           <FingerText text={"ข้อนิ้วมือส่วนปลาย"} />
                        </div>
                     )}
                     {finger2 && (
                        <div className={classes.finger2}>
                           <FingerText text={"ข้อนิ้วมือส่วนต้น"} />
                        </div>
                     )}
                     {finger3 && (
                        <div className={classes.finger3}>
                           <FingerText text={"ข้อโคนนิ้วมือ"} />
                        </div>
                     )}
                     <div
                        className={
                           manageStateAndFinger
                              ? classes.actions_finger
                              : classes.actions_default
                        }
                     >
                        <button onClick={handleClickAllFinger}>
                           <p>{detail}</p>
                        </button>
                     </div>
                  </div>
               </>
            )}
         </Card>
      </li>
   );
}

export default BodyItem;
