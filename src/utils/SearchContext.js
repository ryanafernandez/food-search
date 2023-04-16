import React, { useState, useContext, useEffect } from 'react';
import search from './foodAPI';

export const SearchContext = React.createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
    const [results, setResults] = useState(null);

    const searchFoods = async (query) => {
        await search(query)
            .then((res) => {
                console.log(res.data.foods);
                const result = res.data.foods.map(food => {
                    return {
                        fdcId: food.fdcId,
                        description: food.description,
                        dataType: food.dataType,
                        brandName: food.brandName,
                        foodNutrients: food.foodNutrients.filter(nutrient => (
                            nutrient.nutrientId == 1003 ||  // Protein (g)
                            nutrient.nutrientId == 1004 ||  // Fat (g)
                            nutrient.nutrientId == 1005 ||  // Carbs (g)
                            nutrient.nutrientId == 1008     // Calories (kCal)
                        ))
                    };
                });
                console.log(result);
                setResults(result);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log('new results:', results);
    }, [results])

    return (
        <SearchContext.Provider value={{ results, searchFoods }}>
            {children}
        </SearchContext.Provider>
    );
}