import { useState } from "react";
import ProduceTable from "./components/ProduceTable";
import SearchBar from "./components/SearchBar";

function App () {
    const [filterText, setFilterText] = useState('');
    const [availableOnly, setAvailableOnly] = useState(false);

    const items = [
        {category: "Fruits", name: "Apple", price: 2, availability: true},
        {category: "Fruits", name: "Orange", price: 1, availability: false},
        {category: "Fruits", name: "Banana", price: 3, availability: false},
        {category: "Veggies", name: "Kale", price: 3, availability: true},
        {category: "Veggies", name: "Carrot", price: 1, availability: false},
        {category: "Veggies", name: "Potato", price: 1, availability: true},
    ] 


    return (
        <>
        <SearchBar 
            filterText={filterText} 
            availableOnly={availableOnly} 
            onFilterTextChange={setFilterText}
            onAvailabilityChange={setAvailableOnly}
            />
        <ProduceTable 
            items={items} 
            filterText={filterText} 
            availableOnly={availableOnly}
            />
        </>
    )
}

export default App;