export type IPhoneArticle = {
    id: number;
    nameOfItem: string;
    capacity: string;
    sizeAndWeight: string;
    splashWaterAndDustResistant: string;
    chip: string;
    camera: string;
    videoRecording: string;
    faceID: string;
    company: string;
    image: string;
    price: number;
}

export type AndroidArticle = {
    id: number;
    nameOfItem: string;
    network: {
        technology: string;
        twoGBands: string;
        threeGBands: string;
        speed: string;
        fourGBands: string;
        fiveG: string;
    }
    launch: {
        announced: string;
        status: string;
    }
    body: {
        dimensions: string;
        weight: string;
        build: string;
        SIM: string;
    }
    display: {
        type: string;
        size: string;
        protection: string;
        resolution: string;
    }
    platform: {
        OS: string;
        chipset: string;
        CPU: string;
        GPU: string;
    }
    memory: {
        cardSlot: string;
        internal: string;
    }
    sound: {
        loudspeaker: string;
        threeAndHalfmmJack: string;
    }
    company: string;
    image: string;
    price: number;
}

export type CarouselArticle = {
    id: number;
    nameOfItem: string;
    launch?: {
        announced?: string;
        status?: string;
    }
    body?: {
        dimensions?: string;
        weight?: string;
    }
    display?: {
        type?: string;
        size?: string;
        multitouch?: string;
        resolution?: string;
    }
    platform?: {
        OS?: string;
        chipset?: string;
        CPU?: string;
        GPU?: string;
    }
    memory?: {
        cardSlot?: string;
        internal?: string;
    }
    sound?: {
        loudspeaker?: string;
        threeAndHalfmmJack?: string;
    }
    comms?: {
        bluetooth?: string;
        USB?: string;
    }
    features?: {
        sensors?: string;
        messaging?: string;
        browser?: string;
        radio?: string;
        colors?: string;
    }
    battery?: string;
    company: string;
    image: string;
    price: number;
}