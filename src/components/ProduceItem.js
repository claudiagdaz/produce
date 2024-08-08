function ProduceItem ({ item }) {
    const name = item.availability ? item.name : 
    <span style={{color: 'red'}}>
        {item.name}
    </span>

    return (
            <tr>    
                <td> {name} </td>   
                <td> {`$${item.price}`}</td> 
            </tr>

    )
}

export default ProduceItem;