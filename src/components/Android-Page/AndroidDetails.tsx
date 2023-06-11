import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import css from './AndroidPage.module.scss'

const AndroidDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const article = useAppSelector((state) =>
        state.SamsungItems.Anarticles.find((a) => {
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

    const { nameOfItem, network: { technology, twoGBands, threeGBands, speed, fourGBands, fiveG }, image, launch: { announced, status }, body: { dimensions, weight, build, SIM }, display: { type, size, protection, resolution }, platform: { OS, chipset, CPU, GPU }, memory: { cardSlot, internal }, sound: { loudspeaker, threeAndHalfmmJack }, price } = article;
    //if we got thus far: article is not undefined
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
                        <h4 className={css.p}>Network</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>Technology</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>3G Bands</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>3G Bands</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>4G Bands</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>5G</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Speed</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{technology}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{twoGBands}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{threeGBands}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{fourGBands}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{fiveG}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{speed}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
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
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Launch</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>Announced</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Status</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{announced}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{status}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
                </div>
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Body</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>Dimensions</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Weight</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Build</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>SIM</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{dimensions}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{weight}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{build}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{SIM}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
                </div>
                <br />
                <br />
                <br />
                <br />
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Display</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>Type</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Size</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Protection</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Resolution</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{type}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{size}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{protection}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{resolution}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
                </div>
                <br />
                <br />
                <br />
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Platform</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>OS</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Chipset</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>CPU</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>GPU</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{OS}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{chipset}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{CPU}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{GPU}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
                </div>
                <br />
                <br />
                <br />
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Memory</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>CardSlot</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>Internal</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{cardSlot}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{internal}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
                </div>
                {/*  */}
                <div className={css.container}>
                    <div className={css.box}>
                        <h4 className={css.p}>Sound</h4>
                    </div>
                    <div className={css.item}>
                        <div className={css.box2}>
                            <p className={css.p}>Loudspeaker</p>
                        </div>
                        <div className={css.box2}>
                            <p className={css.p}>3.5mm Jack</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box3}>
                            <p className={css.itemd}>{loudspeaker}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={css.box3}>
                            <p className={css.itemd}>{threeAndHalfmmJack}</p>
                        </div>
                    </div>
                    <div className={css.item3}></div>
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
            </div >
        </>
    )
};

export default AndroidDetails;