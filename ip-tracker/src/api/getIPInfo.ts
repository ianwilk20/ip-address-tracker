import { IPInfo } from '../types/IPInfo'

export const getIPInfo = async (ip_address: string): Promise<IPInfo | null> => {
    try {
        const result = await fetch(`http://ip-api.com/json/${ip_address}`)
        const response_json: IPInfo = await result.json()
        return response_json
    } catch (error) {
        console.error(error)
    }
    return null
}
