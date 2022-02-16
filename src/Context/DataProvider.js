import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <div>
            <DataContext.Provider
                value={[
                    cart,
                    setCart,
                ]}
            >
                {props.children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;