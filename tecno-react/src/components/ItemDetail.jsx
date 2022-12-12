import React from "react";

const ItemDetail = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=peugeot%20208&limit=1')
        .then((resp) => resp.json())
        .then((data) => {
            setItems(data.results.id)
        })
    }, [])

    return (
        <div className="row">
            <h1>Detalle</h1>
                <div className="col-md-2" key={items.id}>
                    <img src={items.thumbnail} alt={items.title} width={160} /><br />
                    <h3>{items.title}</h3><br />
                    <b>${items.price}</b><br />
                </div>
        </div>
    )
}

export default ItemDetail;