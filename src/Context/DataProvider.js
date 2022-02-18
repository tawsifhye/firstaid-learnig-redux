import { createContext } from "react";
import useData from "../hooks/useData";


export const DataContext = createContext();

const DataProvider = (props) => {

    const allContext = useData()


    return (
        <div>
            <DataContext.Provider
                value={allContext}
            >
                {props.children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;