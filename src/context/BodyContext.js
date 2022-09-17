import { createContext, useContext, useState } from "react";

const BodyContext = createContext();

export function BodyContextProvider(props) {
   const [abs1, setAbs1] = useState(false);
   const [abs2, setAbs2] = useState(false);
   const [abs3, setAbs3] = useState(false);
   const [abs4, setAbs4] = useState(false);
   const [abs5, setAbs5] = useState(false);
   const [abs6, setAbs6] = useState(false);
   const [abs7, setAbs7] = useState(false);

   const [finger1, setFinger1] = useState(false);
   const [finger2, setFinger2] = useState(false);
   const [finger3, setFinger3] = useState(false);

   const manageStateAnd = abs1 && abs2 && abs3 && abs4 && abs5 && abs6 && abs7;
   const manageStateOr = abs1 || abs2 || abs3 || abs4 || abs5 || abs6 || abs7;

   const manageStateAndFinger = finger1 && finger2 && finger3;
   const manageStateOrFinger = finger1 || finger2 || finger3;

   return (
      <BodyContext.Provider
         value={{
            manageStateAnd,
            manageStateOr,
            manageStateAndFinger,
            manageStateOrFinger,
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
         }}
      >
         {props.children}
      </BodyContext.Provider>
   );
}

export const useBody = () => useContext(BodyContext);

export default BodyContext;
