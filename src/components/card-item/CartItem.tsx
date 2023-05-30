import { Fragment } from "react"
import { Button, Stack } from "react-bootstrap"
import { IPhoneArr } from "../../api/IPhoneArr";
import { AndroidArr } from "../../api/AndroidArr";
import { CarouselArr } from "../../api/OtherItemsArr";
import { useAppSelector } from "../../app/hooks"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"

//creating type props for the card's product
type CardItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CardItemProps) => {
    //using hook of selector for every article we made
    const { IParticles } = useAppSelector((state) => state.AppleItems);
    const { Anarticles } = useAppSelector((state) => state.SamsungItems);
    const { OIarticles } = useAppSelector((state) => state.OtherItems);
    //pushing all the articles inside a variable
    let allArticles = [...IParticles, ...Anarticles, ...OIarticles]
    const { removeFromCart } = useShoppingCart()

    //looking form every games's array for every product that is connected with him
    const IPhoneItem = IPhoneArr.find(i => i.id === id)

    const AndroidItem = AndroidArr.find(i => i.id === id)

    const CarouselItem = CarouselArr.find(i => i.id === id)

    console.log(allArticles)

    return (
        <>
            {/* using map for the variable we made */}
            {/* {allArticles.map((a) => ( */}
            <Fragment>
                {
                    //sreaching for which company the product belongs to
                    (
                        IPhoneItem &&
                        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
                            <div className="me-auto">
                                <div>
                                    {IPhoneItem.nameOfItem} {quantity > 1 && (
                                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                                            {quantity}x
                                        </span>
                                    )}
                                </div>
                                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                    {formatCurrency(IPhoneItem.price)}
                                </div>
                            </div>
                            <div>{formatCurrency(IPhoneItem.price * quantity)}</div>
                            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(IPhoneItem.id)}>
                                &times;
                            </Button>
                        </Stack>
                    )
                    ||
                    (AndroidItem &&
                        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                            <div className="me-auto">
                                <div>
                                    {AndroidItem.nameOfItem} {quantity > 1 && (
                                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                                            {quantity}x
                                        </span>
                                    )}
                                </div>
                                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                    {formatCurrency(AndroidItem.price)}
                                </div>
                            </div>
                            <div>{formatCurrency(AndroidItem.price * quantity)}</div>
                            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(AndroidItem.id)}>
                                &times;
                            </Button>
                        </Stack>
                    ) ||
                    (CarouselItem &&
                        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                            <div className="me-auto">
                                <h3 style={{ fontSize: ".90rem" }}>
                                    {CarouselItem.nameOfItem} {quantity > 1 && (
                                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                                            {quantity}x
                                        </span>
                                    )}
                                </h3>
                                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                    {formatCurrency(CarouselItem.price)}
                                </div>
                            </div>
                            <div>{formatCurrency(CarouselItem.price * quantity)}</div>
                            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(CarouselItem.id)}>
                                &times;
                            </Button>
                        </Stack>
                    )
                }
            </Fragment>

            {/* } */}
        </>
    )
}

export default CartItem;