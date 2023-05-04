import { createContext, ReactNode, SetStateAction, useState } from "react";
import Cocktails from "../models/cocktailmodel";
import { useQuery } from "react-query";
import getCocktails from "../api/cocktailApi";
import getCocktailById from "../api/singleCocktailApi";
import filterCocktail from "../api/filterCocktailApi";

interface ContextType {
    cocktails: Cocktails[],
    setSearchValue: React.Dispatch<SetStateAction<string>>
}

const defaultValue = {
    cocktails: [],
    setSearchValue: () => { },
}

const CocktailContext = createContext<ContextType>(defaultValue);

export const CocktailProvider = ({children} : {children : ReactNode}) => {

    const [cocktails, setCocktails] = useState<Cocktails[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    const cocktailQuery = useQuery('cocktails', getCocktails, {
        onSuccess: (data) => setCocktails(data)
    })

    const filterQuery = useQuery({
        queryKey: ['filter', searchValue],
        queryFn: () => filterCocktail(searchValue.toString()),
        onSuccess: (data) => setCocktails(data)
    })
    return (
        <CocktailContext.Provider value={{ cocktails, setSearchValue }}>
            {children}
        </CocktailContext.Provider>
    )
}

export default CocktailContext;