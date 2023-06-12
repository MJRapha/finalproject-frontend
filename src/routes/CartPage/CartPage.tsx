import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency';
import { IPhoneArr } from "../../api/IPhoneArr";
import { AndroidArr } from "../../api/AndroidArr";
import { CarouselArr } from "../../api/OtherItemsArr";
import CartItem from '../../components/card-item/CartItem';
import css from "./CartPage.module.scss"
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

type ShoppingCartProps = {
    isOpen: boolean;
}

const CartPage = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const shopItems =
        cartItems.map(item => {
            /* console.log('item', item) */
            return <CartItem key={item.id} {...item} />
        });
    console.log(cartItems)

    return (
        //something from bootstrap, this is the slide effect of the basket
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* An easy way to stack things either vertically or horizontally */}
                <Stack gap={3}>
                    {shopItems}
                    {/* the Total of all products inside the basket */}
                    <div className={css.totalAndBuy}>
                        <div className="ms-auto fw-bold fs-5">
                            Total {formatCurrency(cartItems.reduce((total, CardItem) => {
                                const IPhoneItem = IPhoneArr.find(i => i.id === CardItem.id)
                                const AndroidItem = AndroidArr.find(i => i.id === CardItem.id)
                                const CarouselItem = CarouselArr.find(i => i.id === CardItem.id)
                                //returns the total + all the price of all the games according to the categories
                                return total + (IPhoneItem?.price || 0) * CardItem.quantity + (AndroidItem?.price || 0) * CardItem.quantity + (CarouselItem?.price || 0) * CardItem.quantity
                            }, 0)
                            )}
                        </div>
                        <div>
                            {!isLoggedIn &&
                                <Button className="ms-auto fw-bold fs-5 w-10 m-2" onClick={() => navigate("/login")}>
                                    Login before
                                </Button>
                            }
                            {isLoggedIn &&
                                <Button className="ms-auto fw-bold fs-5 w-10 m-2" onClick={() => navigate("/pay")}>
                                    Buy
                                </Button>
                            }
                        </div>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CartPage