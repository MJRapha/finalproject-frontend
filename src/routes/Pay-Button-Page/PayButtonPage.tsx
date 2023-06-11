import { Stack } from "react-bootstrap";
import CartItem from "../../components/card-item/CartItem";
import { useShoppingCart } from "../../context/ShoppingCartContext"
import css from "./PayButtonPage.module.scss"

const PayButtonPage = () => {
    const { cartItems } = useShoppingCart()

    const shopItems =
        cartItems.map(item => {
            /* console.log('item', item) */
            return <CartItem key={item.id} {...item} />
        });
    return (
        <>
            <h2 className={css.title} style={{ textDecoration: "underline", textAlign: "left" }}>Checkout</h2>
            <div className={css.container}>
                <Stack gap={3} className={css.firstPageSide}>
                    {shopItems}
                </Stack>
                <div className={css.secondPageSide}>

                </div>
            </div>
        </>
    )
}

export default PayButtonPage