import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import css from './IPhonePage.module.scss'

const IPhoneDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    const article = useAppSelector((state) =>
        state.AppleItems.IParticles.find((a) => {
            if (id && a.id === +id) {
                return true;
            }
            return false;
        })
    );

    if (!article) {
        //user messed with the url: send him/her back to home
        return <Navigate to="/" />;
    }

    const { nameOfItem, image, capacity, sizeAndWeight, splashWaterAndDustResistant, chip, camera, videoRecording, faceID, price } = article;
    return (
        <>
            <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
                <img
                    className="w-50 shadow-lg p-3 bg-white rounded"
                    src={image}
                    alt={nameOfItem}
                />
                <h3 className={css.name}>{nameOfItem}</h3>
            </div>
            <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Capacity</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{capacity}</p>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Size And Weight</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{sizeAndWeight}</p>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Splash Water & Dust Resistant</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{splashWaterAndDustResistant}</p>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Chip</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{chip}</p>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Camera</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{camera}</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Video Recording</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{videoRecording}</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>FaceID</h4>
                    </div>
                    <div className={css.item7}>
                        <p className={css.itemd}>{faceID}</p>
                    </div>
                </div>
                <p className={css.price}>${price}</p>

                <button
                    className="btn btn-danger w-10 m-2"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </button>
            </div>
        </>
    )
};

export default IPhoneDetails;