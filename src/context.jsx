import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const defaultData = {
  path:"home",
  aviableRoutes:[],
  fallback:"404",
  appearance:"light"
}

const GlobalContext = createContext(defaultData);

const GlobalProvider = ({ children }) => {
  const [data, Data] = useState(defaultData);
  
  const go = (path) => {
    if (data.aviableRoutes.includes(path)) Data(e=>({...e,path}))
    else Data(e=>({...e,path:e.fallback}));
  }

  const Appearance = (appearance) => {
    Data(e=>({...e,appearance}));
  }

  return (
    <GlobalContext.Provider value={{ ...data, setGlobalData:Data, Appearance, go }}>
      {children}
    </GlobalContext.Provider>
  );
};

const GetRoutes = ({children,fallback="404",index="home"}) => {
  const {setGlobalData} = useContext(GlobalContext)

  useEffect(()=>{
    const rc = children.props?.children
    if (rc?.[0]) {
      setGlobalData(e=>({...e,fallback,index,
        aviableRoutes:rc.map(e=>e.props?.id)
      }))
    }
  },[])

  return <>{children}</>
}

export { GlobalContext, GlobalProvider, GetRoutes };
