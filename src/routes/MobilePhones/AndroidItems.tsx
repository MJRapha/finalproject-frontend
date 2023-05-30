import { Link } from 'react-router-dom';
import css from './MobilePhones.module.scss'
import { AndroidItemProps } from '../../@types/@types';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Button } from 'react-bootstrap';

const AndroidItems = ({ id, nameOfItem, image, price }: AndroidItemProps) => {
    //using all the cart's options
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    //giving to the quantity the option of the number of products we have inside the cart
    const quantity = getItemQuantity(id)
    return (
        <div className="d-flex flex-column border-5 border-dark rounded w-25">
            <img className={css.Img}
                src={image} alt="Card cap" style={{
                    objectFit:
                        "cover",
                    width: "100%", height: "250px", border: "1px solid black"
                }} />
            <div style={{
                backgroundColor: "black", width: "100%", borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px"
            }}>
                <div className="m-2">
                    <h5 className={css.Name}>{nameOfItem}</h5>
                </div>
                <div className="ms-2 text-muted">
                    <h6 className={css.Price}>${price}</h6>
                </div>
                <Link className={css.link} to={`/phones/Samsung/${id}`}>
                    Read More
                </Link>
                <div className="mt-2 mb-1">
                    {quantity === 0 ? (
                        <Button className="w-10" onClick={() => increaseCartQuantity(id)}>+ Add To Basket</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem", color: "white" }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className="fs-3" style={{ color: "white" }}>{quantity}</span> in Basket
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">cancel</Button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
};

export default AndroidItems;