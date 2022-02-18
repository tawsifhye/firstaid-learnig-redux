import { useContext } from "react"
import { DataContext } from "../Context/DataProvider"

const useDataProvider = () => {
    return useContext(DataContext);
}

export default useDataProvider;