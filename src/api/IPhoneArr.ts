import pic1 from "../images/IPhone-12.jpg"
import pic2 from "../images/IPhone-12-mini.jpg"
import pic3 from "../images/iPhoneSE.jpg"
import pic4 from "../images/IPhone-13.jpg"
import pic5 from "../images/IPhone-13-mini.jpg"
import pic6 from "../images/IPhone-14.jpg"
import pic7 from "../images/IPhone-14-Pro.jpg"
import pic8 from "../images/IPhone-14-Pro-Max.jpg"
import { IPhoneArticle } from "../features/slices/smartphones";

export const IPhoneArr: IPhoneArticle[] = [
    {
        id: 1,
        nameOfItem: "IPhone 12",
        capacity: "64GB\n128GB\n256GB",
        sizeAndWeight: "Height: 146.7 mm(5.78 inches)\nWidth: 71.5 mm(2.82 inches)\nDepth: 7.4 mm(0.29 inch)\nWeight: 162 grams (5.73 ounces)",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A14 Bionic chip\n6-core CPU with 2 performance and 4 efficiency cores\n4-core GPU\n16-core Neural Engine",
        camera: "Dual 12MP camera system: Ultra Wide and Wide cameras\nWide: ƒ / 1.6 aperture\nUltra Wide: ƒ / 2.4\naperture and 120° field of view\n2x optical zoom out\nDigital zoom up to 5x\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nOptical image stabilization(Wide)\nSeven‑element lens(Wide); five‑element lens(Ultra Wide)\nTrue Tone flash with Slow Sync\nPanorama(up to 63MP)\nSapphire crystal lens cover\n100% Focus Pixels(Wide)\nNight mode\nDeep Fusion\nSmart HDR 3 with Scene Detection\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "HDR video recording with Dolby Vision up to 30 fps\n4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps or 60 fps\n720p HD video recording at 30 fps\nOptical image stabilization for video(Wide)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nQuickTake video\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time‑lapse\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic1,
        price: 399.99
    },
    {
        id: 2,
        nameOfItem: "IPhone 12 mini",
        capacity: "64GB\n128GB\n256GB",
        sizeAndWeight: "Height: 131.5 mm(5.18 inches) \nWidth: 64.2 mm(2.53 inches) \nDepth:7.4 mm(0.29 inch)\nWeight: 133 grams (4.70 ounces)",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A14 Bionic chip\n6-core CPU with 2 performance and 4 efficiency cores\n4-core GPU\n16-core Neural Engine",
        camera: "Dual 12MP camera system: Ultra Wide and Wide cameras\nWide: ƒ / 1.6 aperture\nUltra Wide: ƒ / 2.4\naperture and 120° field of view\n2x optical zoom out\nDigital zoom up to 5x\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nOptical image stabilization(Wide)\nSeven‑element lens(Wide); five‑element lens(Ultra Wide)\nTrue Tone flash with Slow Sync\nPanorama(up to 63MP)\nSapphire crystal lens cover\n100% Focus Pixels(Wide)\nNight mode\nDeep Fusion\nSmart HDR 3 with Scene Detection\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "HDR video recording with Dolby Vision up to 30 fps\n4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps or 60 fps\n720p HD video recording at 30 fps\nOptical image stabilization for video(Wide)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nQuickTake video\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time‑lapse\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic2,
        price: 289.99
    },
    {
        id: 3,
        nameOfItem: "IPhone SE",
        capacity: "64GB\n128GB\n256GB",
        sizeAndWeight: "Height: 138.4 mm(5.45 inches)\nWidth: 67.3 mm(2.65 inches)\nDepth: 7.3 mm(0.29 inch)\nWeight: 144 grams (5.09 ounces)",
        splashWaterAndDustResistant: "Rated IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529",
        chip: "A15 Bionic chip\n6-core CPU with 2 performance and 4 efficiency cores\n4-core GPU\n16-core Neural Engine",
        camera: "12MP Wide camera\nƒ/ 1.8 aperture\nDigital zoom up to 5x\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High - Key Mono)\nOptical image stabilization\nSix‑element lens\nLED True Tone flash with Slow Sync\nPanorama(up to 63MP)\nSapphire crystal lens cover\nAutofocus with Focus Pixels\nWide color capture for photos and Live Photos\nDeep Fusion\nSmart HDR 4 for photos\nPhotographic Styles\nAdvanced red - eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nExtended dynamic range for video up to 30 fps\nOptical image stabilization for video\nDigital zoom up to 3x\nLED True Tone flash\nQuickTake video\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time‑lapse\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "doesn't have",
        company: "Apple",
        image: pic3,
        price: 429.99
    },
    {
        id: 4,
        nameOfItem: "IPhone 13",
        capacity: "128GB\n256GB\n512GB",
        sizeAndWeight: "Width: 71.5 mm(2.82 inches)\nHeight: 146.7 mm(5.78 inches)\nDepth: 7.65 mm(0.30 inch)\nWeight: 173 grams (6.10 ounces)",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A15 Bionic chip\nNew 6‑core CPU with 2 performance and 4 efficiency cores\nNew 4‑core GPU\nNew 16‑core Neural Engine",
        camera: "Dual 12MP camera system: Wide and Ultra Wide cameras\nWide: ƒ / 1.6 aperture\nUltra Wide: ƒ / 2.4 aperture and 120° field of view\n2x optical zoom out\nDigital zoom up to 5x\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nSensor‑shift optical image stabilization(Wide)\nSeven‑element lens(Wide); five‑element lens(Ultra Wide)\nTrue Tone flash with Slow Sync\nPanorama(up to 63MP)\nSapphire crystal lens cover\n100% Focus Pixels(Wide)\nNight mode\nDeep Fusion\nSmart HDR 4\nPhotographic Styles\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "Cinematic mode for recording videos with shallow depth of field (in 1080p at 30 fps)\nHDR video recording with Dolby Vision up to 4K at 60 fps\n4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nSensor- shift optical image stabilization for video(Wide)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nQuickTake video\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time - lapse\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "doesn't have",
        company: "Apple",
        image: pic4,
        price: 699.99
    },
    {
        id: 5,
        nameOfItem: "IPhone 13 mini",
        capacity: "128GB\n256GB\n512GB",
        sizeAndWeight: "Width:64.2 mm(2.53 inches)\nHeight:131.5 mm(5.18 inches)\nDepth:7.65 mm(0.30 inch)\nWeight: 140 grams (4.94 ounces)",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A15 Bionic chip\nNew 6‑core CPU with 2 performance and 4 efficiency cores\nNew 4‑core GPU\nNew 16‑core Neural Engine",
        camera: "Dual 12MP camera system: Wide and Ultra Wide cameras\nWide: ƒ / 1.6 aperture\nUltra Wide: ƒ / 2.4 aperture and 120° field of view\n2x optical zoom out\nDigital zoom up to 5x\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nSensor‑shift optical image stabilization(Wide)\nSeven‑element lens(Wide); five‑element lens(Ultra Wide)\nTrue Tone flash with Slow Sync\nPanorama(up to 63MP)\nSapphire crystal lens cover\n100% Focus Pixels(Wide)\nNight mode\nDeep Fusion\nSmart HDR 4\nPhotographic Styles\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "Cinematic mode for recording videos with shallow depth of field (in 1080p at 30 fps)\nHDR video recording with Dolby Vision up to 4K at 60 fps\n4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nSensor- shift optical image stabilization for video(Wide)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nQuickTake video\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time - lapse\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "doesn't have",
        company: "Apple",
        image: pic5,
        price: 459.99
    },
    {
        id: 6,
        nameOfItem: "IPhone 14",
        capacity: "128GB\n256GB\n512GB",
        sizeAndWeight: "Width:71.5 mm(2.82 inches)\nHeight:146.7 mm(5.78 inches)\nDepth:7.80 mm(0.31 inch)\nWeight: 172 grams(6.07 ounces) ",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A15 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine",
        camera: "Dual-camera system\n12MP Main: 26 mm, ƒ/ 1.5 aperture, sensor‑shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP Ultra Wide: 13 mm, ƒ / 2.4 aperture and 120° field of view, five‑element lens\n2x optical zoom out; digital zoom up to 5x\nSapphire crystal lens cover\nTrue Tone flash\nPhotonic Engine\nDeep Fusion\nSmart HDR 4\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nNight mode\nPanorama(up to 63MP)\nPhotographic Styles\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nCinematic mode up to 4K HDR at 30 fps\nAction mode up to 2.8K at 60 fps\nHDR video recording with Dolby Vision up to 4K at 60 fps\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time- lapse\nQuickTake video\nSensor - shift optical image stabilization for video(Main)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic6,
        price: 799.99
    },
    {
        id: 7,
        nameOfItem: "IPhone 14 Plus",
        capacity: "128GB\n256GB\n512GB",
        sizeAndWeight: "Width:78.1 mm(3.07 inches)\nHeight:160.8 mm(6.33 inches)\nDepth:7.80 mm(0.31 inch)\nWeight: 203 grams(7.16 ounces) ",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A15 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine",
        camera: "Dual-camera system\n12MP Main: 26 mm, ƒ/ 1.5 aperture, sensor‑shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP Ultra Wide: 13 mm, ƒ / 2.4 aperture and 120° field of view, five‑element lens\n2x optical zoom out; digital zoom up to 5x\nSapphire crystal lens cover\nTrue Tone flash\nPhotonic Engine\nDeep Fusion\nSmart HDR 4\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)\nNight mode\nPanorama(up to 63MP)\nPhotographic Styles\nWide color capture for photos and Live Photos\nLens correction(Ultra Wide)\nAdvanced red‑eye correction\nAuto image stabilization\nBurst mode\nPhoto geotagging\nImage formats captured: HEIF and JPEG",
        videoRecording: "4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nCinematic mode up to 4K HDR at 30 fps\nAction mode up to 2.8K at 60 fps\nHDR video recording with Dolby Vision up to 4K at 60 fps\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time- lapse\nQuickTake video\nSensor - shift optical image stabilization for video(Main)\n2x optical zoom out\nDigital zoom up to 3x\nAudio zoom\nTrue Tone flash\nCinematic video stabilization(4K, 1080p, and 720p)\nContinuous autofocus video\nTake 8MP still photos while recording 4K video\nPlayback zoom\nVideo formats recorded: HEVC and H.264\nStereo recording",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic6,
        price: 899.99
    },
    {
        id: 8,
        nameOfItem: "IPhone 14 Pro",
        capacity: "128GB\n256GB\n512GB\n1TB",
        sizeAndWeight: "Width:71.5 mm(2.81 inches)\nHeight:147.5 mm(5.81 inches)\nDepth:7.85 mm(0.31 inch)\nWeight: 206 grams(7.27 ounces)",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A16 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine",
        camera: "Pro camera system\n48MP Main: 24 mm, ƒ/ 1.78 aperture, second - generation sensor - shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP Ultra Wide: 13 mm, ƒ / 2.2 aperture and 120° field of view, six‑element lens, 100 % Focus Pixels\n12MP 2x Telephoto(enabled by quad - pixel sensor): 48 mm, ƒ / 1.78 aperture, second - generation sensor - shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP 3x Telephoto: 77 mm, ƒ / 2.8 aperture, optical image stabilization, six - element lens\n3x optical zoom in, 2x optical zoom out; 6x optical zoom range; digital zoom up to 15x\nSapphire crystal lens cover\nAdaptive True Tone flash\nPhotonic Engine\nDeep Fusion\nSmart HDR 4\nPortrait mode with advanced bokeh and Depth Control",
        videoRecording: "4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nCinematic mode up to 4K HDR at 30 fps\nAction mode up to 2.8K at 60 fps\nHDR video recording with Dolby Vision up to 4K at 60 fps\nProRes video recording up to 4K at 30 fps(1080p at 30 fps for 128GB storage)\nMacro video recording, including slo- mo and time - lapse\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time - lapse\nQuickTake video\nSecond‑generation sensor‑shift optical image stabilization for video(Main)\nDual optical image stabilization for video(Main and Telephoto)\n3x optical zoom in, 2x optical zoom out; 6x optical zoom range\nDigital zoom up to 9x",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic7,
        price: 999.99
    },
    {
        id: 9,
        nameOfItem: "IPhone 14 Pro Max",
        capacity: "128GB\n256GB\n512GB\n1TB",
        sizeAndWeight: "Width:77.6 mm(3.05 inches)\nHeight:160.7 mm(6.33 inches)\nDepth:7.85 mm(0.31 inch)\nWeight: 240 grams(8.47 ounces) ",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        chip: "A16 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine",
        camera: "Pro camera system\n48MP Main: 24 mm, ƒ/ 1.78 aperture, second - generation sensor - shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP Ultra Wide: 13 mm, ƒ / 2.2 aperture and 120° field of view, six‑element lens, 100 % Focus Pixels\n12MP 2x Telephoto(enabled by quad - pixel sensor): 48 mm, ƒ / 1.78 aperture, second - generation sensor - shift optical image stabilization, seven‑element lens, 100 % Focus Pixels\n12MP 3x Telephoto: 77 mm, ƒ / 2.8 aperture, optical image stabilization, six - element lens\n3x optical zoom in, 2x optical zoom out; 6x optical zoom range; digital zoom up to 15x\nSapphire crystal lens cover\nAdaptive True Tone flash\nPhotonic Engine\nDeep Fusion\nSmart HDR 4\nPortrait mode with advanced bokeh and Depth Control\nPortrait Lighting with six effects(Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono)",
        videoRecording: "4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps\n1080p HD video recording at 25 fps, 30 fps, or 60 fps\n720p HD video recording at 30 fps\nCinematic mode up to 4K HDR at 30 fps\nAction mode up to 2.8K at 60 fps\nHDR video recording with Dolby Vision up to 4K at 60 fps\nProRes video recording up to 4K at 30 fps(1080p at 30 fps for 128GB storage)\nMacro video recording, including slo- mo and time - lapse\nSlo‑mo video support for 1080p at 120 fps or 240 fps\nTime‑lapse video with stabilization\nNight mode Time - lapse\nQuickTake video\nSecond‑generation sensor‑shift optical image stabilization for video(Main)\nDual optical image stabilization for video(Main and Telephoto)\n3x optical zoom in, 2x optical zoom out; 6x optical zoom range\nDigital zoom up to 9x\nAudio zoom",
        faceID: "Enabled by TrueDepth camera for facial recognition",
        company: "Apple",
        image: pic8,
        price: 1099.99
    }
]