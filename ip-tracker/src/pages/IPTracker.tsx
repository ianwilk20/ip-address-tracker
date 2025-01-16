import mobilePattern from '../assets/images/pattern-bg-mobile.png'
import desktopPattern from '../assets/images/pattern-bg-desktop.png'
import iconArrow from '../assets/images/icon-arrow.svg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const IPTracker = () => {
    const tempInfo = {
        ip: '192.212.174.101',
        location: 'Brooklyn, NY 10001',
        timezone: 'UTC -05:00',
        isp: 'SpaceX Starlink',
    }

    return (
        <main className="w-[100vw]">
            <div className="relative w-full">
                <div className="absolute z-10 flex flex-col items-center p-6 w-full gap-4">
                    <h1 className="font-medium text-2xl text-white mb-2">
                        IP Address Tracker
                    </h1>
                    <div className="flex w-full">
                        <input
                            type="text"
                            className="w-full rounded-tl-xl rounded-bl-xl h-12 px-4"
                        />
                        <button className="flex items-center justify-center bg-black rounded-tr-xl rounded-br-xl w-14">
                            <img src={iconArrow} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 p-4 items-center w-full bg-white rounded-xl justify-center">
                        <li>
                            <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center">
                                ip address
                            </p>
                            <p className="text-base text-black font-medium">
                                {tempInfo.ip}
                            </p>
                        </li>
                        <li>
                            <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center">
                                location
                            </p>
                            <p className="text-base text-black font-medium">
                                {tempInfo.location}
                            </p>
                        </li>
                        <li>
                            <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center">
                                timezone
                            </p>
                            <p className="text-base text-black font-medium">
                                {tempInfo.timezone}
                            </p>
                        </li>
                        <li>
                            <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center">
                                isp
                            </p>
                            <p className="text-base text-black font-medium">
                                {tempInfo.isp}
                            </p>
                        </li>
                    </ul>
                </div>
                <picture className="absolute top-0 z-0 h-full">
                    <source srcSet={mobilePattern} media="(max-width: 375px)" />
                    <source
                        srcSet={desktopPattern}
                        media="(min-width: 375px)"
                    />
                    <img src={desktopPattern} alt="TODO" />
                </picture>
                {/* <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="w-full h-96"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}
            </div>
        </main>
    )
}

export default IPTracker
