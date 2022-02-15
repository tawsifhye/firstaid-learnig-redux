import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = (props) => {

    const [courseList, setCourseList] = useState([]);

    return (
        <div>
            <DataContext.Provider
                value={[
                    courseList,
                    setCourseList,
                ]}
            >
                {props.children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;