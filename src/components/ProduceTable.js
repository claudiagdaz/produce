import ProduceCategory from "./ProduceCategory";
import ProduceItem from "./ProduceItem";


function ProduceTable ({ items, filterText, availableOnly }) {
    let renderedItems = [];
    let lastCategory = null;
    
    items.forEach((item) => {
        const matchText = item.name.toLowerCase().includes(filterText.toLowerCase())
        if (!matchText) {
            return
        };

        if (availableOnly && item.availability === false) { 
            return
        };

        if (item.category !== lastCategory) {
            renderedItems.push(
                <ProduceCategory
                    key={item.category}
                    category={item.category}
                />)
        };
        
        renderedItems.push(
            <ProduceItem 
                key={item.name}
                item={item}
        />)

            lastCategory = item.category
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{renderedItems}</tbody>
            </table>
            <span> Note: all products in red are not available</span>
        </div>
    )
}

export default ProduceTable;