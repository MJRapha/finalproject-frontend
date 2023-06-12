import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import css from './MultiCarousel.module.scss'

const MCarouselDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const article = useAppSelector((state) =>
        state.OtherItems.OIarticles.find((a) => {
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


    const { nameOfItem, image, launch, body, display, platform, memory, sound, comms, features, battery, price } = article;
    //if we got thus far: article is not undefined
    let announced, status, dimensions, weight, type, size, multitouch, resolution, OS, chipset, CPU, GPU, cardSlot, internal, loudspeaker, threeAndHalfmmJack, bluetooth, USB, sensors, messaging, browser, radio, colors;
    if (launch) {
        announced = launch.announced;
        status = launch.status;
    }
    if (body) {
        dimensions = body.dimensions;
        weight = body.weight;
    }
    if (display) {
        type = display.type;
        size = display.size;
        if (!multitouch) {
            multitouch = display.multitouch;
        }
        if (!resolution) {
            resolution = display.resolution;
        }
    }
    if (platform) {
        OS = platform.OS;
        chipset = platform.chipset;
        CPU = platform.CPU;
        GPU = platform.GPU;
    }
    if (memory) {
        cardSlot = memory.cardSlot;
        internal = memory.internal;
    }
    if (sound) {
        loudspeaker = sound.loudspeaker;
        threeAndHalfmmJack = sound.threeAndHalfmmJack;
    }
    if (comms) {
        bluetooth = comms.bluetooth;
        USB = comms.USB;
    }
    if (features) {
        sensors = features.sensors;
        if (!messaging) {
            messaging = features.messaging;
        }
        if (!browser) {
            browser = features.browser;
        }
        if (!radio) {
            radio = features.radio;
        }
        if (!colors) {
            colors = features.colors;
        }
    }
    return (
        <>
            <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
                <img
                    className="w-25 shadow-lg p-3 bg-white rounded"
                    src={image}
                    alt={nameOfItem}
                />
                <h3 className={css.name}>{nameOfItem}</h3>
            </div>
            <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
                {!launch ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Launch</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <div className={css.p}>Announced</div>
                            </div>
                            <div className={css.box2}>
                                <div className={css.p}>Status</div>
                            </div>
                        </div>
                        <div className={css.item5}>
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
                        <div className={css.item6}></div>
                    </div>
                }
                {!body ? <></> : <>
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Body</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Dimensions</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>Weight</h4>
                            </div>
                        </div>
                        <div className={css.item5}>
                            <div className={css.box3}>
                                <p className={css.itemd}>{dimensions}</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className={css.box3}>
                                {body ? <p className={css.itemd}>{weight}</p> : null}
                            </div>
                        </div>
                        <div className={css.item6}></div>
                    </div>
                    <br />
                </>
                }
                {!display ? <></> : <>
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Display</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Type</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>Size</h4>
                            </div>
                            <div className={css.box2}>
                                {multitouch ? <h4 className={css.p}>Multitouch</h4> : null}
                            </div>
                            <div className={css.box2}>
                                {resolution ? <h4 className={css.p}>Resolution</h4> : null}
                            </div>
                        </div>
                        <div className={css.item5}>
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
                                {multitouch ? <p className={css.itemd}>{multitouch}</p> : null}
                                {multitouch ? <br /> : null}
                                {multitouch ? <br /> : null}
                                {multitouch ? <br /> : null}
                            </div>
                            <div className={css.box3}>
                                {resolution ? <p className={css.itemd}>{resolution}</p> : null}
                            </div>
                        </div>
                        <div className={css.item6}></div>
                    </div>
                    <br />
                    <br />
                    <br />
                </>
                }
                {!platform ? <></> : <>
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Platform</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>OS</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>Chipset</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>CPU</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>GPU</h4>
                            </div>
                        </div>
                        <div className={css.item5}>
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
                        <div className={css.item6}></div>
                    </div>
                    <br />
                    <br />
                    <br />
                </>
                }
                <br />
                {!memory ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Memory</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Card Slot</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>Internal</h4>
                            </div>
                        </div>
                        <div className={css.item5}>
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
                        <div className={css.item6}></div>
                    </div>
                }
                {!features ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Features</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Sensors</h4>
                            </div>
                            <div className={css.box2}>
                                {messaging ? <h4 className={css.p}>Messaging</h4> : null}
                            </div>
                            <div className={css.box2}>
                                {browser ? <h4 className={css.p}>Browser</h4> : null}
                            </div>
                            <div className={css.box2}>
                                {radio ? <h4 className={css.p}>Radio</h4> : null}
                            </div>
                            <div className={css.box2}>
                                {colors ? <h4 className={css.p}>Colors</h4> : null}
                            </div>
                        </div>
                        <div className={css.item5}>
                            <div className={css.box3}>
                                <p className={css.itemd}>{sensors}</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className={css.box3}>
                                {messaging ? <p className={css.itemd}>{messaging}</p> : null}
                            </div>
                            {messaging ? <br /> : null}
                            {messaging ? <br /> : null}
                            {messaging ? <br /> : null}
                            <div className={css.box3}>
                                {browser ? <p className={css.itemd}>{browser}</p> : null}
                            </div>
                            {browser ? <br /> : null}
                            {browser ? <br /> : null}
                            {browser ? <br /> : null}
                            <div className={css.box3}>
                                {radio ? <p className={css.itemd}>{radio}</p> : null}
                            </div>
                            {radio ? <br /> : null}
                            {radio ? <br /> : null}
                            {radio ? <br /> : null}
                            <div className={css.box3}>
                                {colors ? <p className={css.itemd}>{colors}</p> : null}
                            </div>
                        </div>
                        <div className={css.item6}></div>
                    </div>
                }
                {!sound ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Sound</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Loudspeaker</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>3.5mm Jack</h4>
                            </div>
                        </div>
                        <div className={css.item5}>
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
                        <div className={css.item6}></div>
                    </div>
                }
                {!comms ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Comms</h4>
                        </div>
                        <div className={css.item4}>
                            <div className={css.box2}>
                                <h4 className={css.p}>Bluetooth</h4>
                            </div>
                            <div className={css.box2}>
                                <h4 className={css.p}>USB</h4>
                            </div>
                        </div>
                        <div className={css.item5}>
                            <div className={css.box3}>
                                <p className={css.itemd}>{bluetooth}</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className={css.box3}>
                                <p className={css.itemd}>{USB}</p>
                            </div>
                        </div>
                        <div className={css.item6}></div>

                    </div>
                }
                {!battery ? <></> :
                    <div className={css.container}>
                        <div className={css.box}>
                            <h4 className={css.p}>Battery</h4>
                        </div>
                        <div className={css.item7}>
                            <div>
                                <p className={css.itemd}>{battery}</p>
                            </div>
                        </div>
                    </div>
                }
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

export default MCarouselDetails;