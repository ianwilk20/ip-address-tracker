import mobilePattern from '../assets/images/pattern-bg-mobile.png'
import desktopPattern from '../assets/images/pattern-bg-desktop.png'
import iconArrow from '../assets/images/icon-arrow.svg'
import iconLocation from '../assets/images/icon-location.svg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useIpTracker } from '../hooks/useIPTracker'
import { useState } from 'react'
import { formatTimezone, secondsToHours, validIPAddress } from '../utils'
import { Icon } from 'leaflet'

const defaultIP = '192.212.174.101'

const IPTracker = () => {
    const [address, setAddress] = useState<string>('')
    const [validAddress, setValidAddress] = useState<string>(defaultIP)

    const { data, error } = useIpTracker(validAddress)

    const handleSubmission = () => {
        if (validIPAddress(address)) {
            setValidAddress(address)
        }
    }

    if (error && address !== '' && validAddress !== '') {
        setValidAddress('')
        setAddress('')
    }

    const icon = new Icon({ iconUrl: iconLocation, iconSize: [46, 56] })
    const formattedLocation = () => {
        let location = ''
        if (data) {
            location =
                (data.city && data.city + (data.region ? ', ' : '')) +
                (data.region && data.region + (data.zip ? ', ' : '')) +
                data.zip
            return location
        }
        return 'Unknown'
    }

    return (
        <div className="relative w-full h-full flex flex-col">
            <div className="absolute z-[1000] flex flex-col items-center pt-6 pb-4 px-6 md:pt-3 w-full gap-5">
                <h1 className="font-medium text-2xl text-white">
                    IP Address Tracker
                </h1>
                <div className="flex w-full sm:max-w-[80%] md:max-w-[30rem]">
                    <input
                        type="text"
                        className="w-full rounded-tl-xl rounded-bl-xl h-12 px-4 overflow-ellipsis"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Search for any IP address or domain"
                    />
                    <button
                        onClick={handleSubmission}
                        className="flex items-center justify-center bg-black rounded-tr-xl rounded-br-xl w-14 hover:bg-gray-700"
                    >
                        <img src={iconArrow} alt="Arrow pointing right" />
                    </button>
                </div>
                <ul className="flex flex-col gap-4 md:grid md:grid-cols-4 p-4 items-center w-full bg-white rounded-xl justify-center sm:max-w-[80%] xl:max-w-[70%] shadow-lg">
                    <li className="relative h-full md:px-4 md:after:border-r md:after:border-solid md:after:border-slate-300 md:after:absolute md:after:right-0 md:after:h-[70%] md:after:top-4">
                        <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center md:text-start md:py-1">
                            ip address
                        </p>
                        <p className="text-base text-black font-medium text-center md:text-start break-words">
                            {data && data.query}
                        </p>
                    </li>
                    <li className="relative h-full md:px-4 md:after:border-r md:after:border-solid md:after:border-slate-300 md:after:absolute md:after:right-0 md:after:h-[70%] md:after:top-4">
                        <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center md:text-start md:py-1">
                            location
                        </p>
                        <p className="text-base text-black font-medium text-center md:text-start">
                            {data && formattedLocation()}
                        </p>
                    </li>
                    <li className="relative h-full md:px-4 md:after:border-r md:after:border-solid md:after:border-slate-300 md:after:absolute md:after:right-0 md:after:h-[70%] md:after:top-4">
                        <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center md:text-start md:py-1">
                            timezone
                        </p>
                        <p className="text-base text-black font-medium text-center md:text-start">
                            {data &&
                                formatTimezone(secondsToHours(data?.offset))}
                        </p>
                    </li>
                    <li className="md:px-4">
                        <p className="uppercase text-[0.6rem] text-[#757575] font-bold tracking-widest text-center md:text-start md:py-1">
                            isp
                        </p>
                        <p className="text-base text-black font-medium text-center md:text-start">
                            {data && data.isp}
                        </p>
                    </li>
                </ul>
            </div>
            {/* <div className="background-pattern"></div> */}
            <picture className="">
                <source srcSet={mobilePattern} media="(max-width: 375px)" />
                <source srcSet={desktopPattern} media="(min-width: 375px)" />
                <img
                    src={desktopPattern}
                    alt="Abstract pattern with lines and shades of blue and purple"
                    className="w-full h-full xs:h-[300px] md:h-[225px] lg:h-[200px] object-cover"
                />
            </picture>
            {data && (
                <MapContainer
                    key={data.query}
                    center={[data.lat, data.lon]}
                    zoom={13}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    className="w-full flex-grow"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[data.lat, data.lon]} icon={icon}>
                        <Popup>
                            Pinned location for IP Address: {data.query}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    )
}

export default IPTracker
