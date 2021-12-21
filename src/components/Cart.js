const Cart = ({cart}) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <td>Item Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </tr>

            </thead>
            <tbody>
                {cart.items.map(item => <tr key={item.itemId}>
                    <td>{item.itemId}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                </tr>)}
            <tr>
                <td colSpan="4">Total price: {cart.totalPrice}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Cart;