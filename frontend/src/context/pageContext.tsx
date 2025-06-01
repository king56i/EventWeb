import { useState,createContext, type ReactNode } from "react";
const pageContext = createContext<{ page: string | undefined, setPage: React.Dispatch<React.SetStateAction<string|undefined >> }>({
  page: "dashboard",
  setPage: () => {}
}); 
function PageProvider({children}:{children:ReactNode}){
    const [page,setPage] = useState<string|undefined>("dashboard");
    return <>
        <pageContext.Provider value={{page,setPage}}>
            {children}
        </pageContext.Provider>
    </>
}
export {PageProvider,pageContext}