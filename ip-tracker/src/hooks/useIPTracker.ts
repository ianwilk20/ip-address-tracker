import { useEffect, useState } from 'react'
import { IPInfo } from '../types/IPInfo'

export const useIpTracker = (ip_address: string) => {
    const [data, setData] = useState<IPInfo | null>(null)
    const [error, setError] = useState<unknown | null>(null)
    const [loading, setLoading] = useState<boolean | null>(null)

    useEffect(() => {
        if (!ip_address) {
            setError(null)
            setLoading(null)
            return
        }
        const handleAPICall = async () => {
            try {
                setLoading(true)
                const result = await fetch(
                    `http://ip-api.com/json/${ip_address}?fields=status,region,city,zip,lat,lon,offset,isp,query`
                )
                const response_json: IPInfo = await result.json()
                if (response_json.status !== 'success') {
                    throw new Error(
                        'Could not find details for the provided address: ' +
                            response_json.query
                    )
                }
                setData(response_json)
            } catch (error) {
                console.log('Error: ', error)
                setError(error)
                alert(error)
            } finally {
                setLoading(false)
            }
        }

        handleAPICall()
    }, [ip_address])

    return { data, error, loading }
}
