export interface IPInfo {
    as: string
    city: string
    isp: string
    lat: number
    lon: number
    query: string
    region: string
    status: 'success' | 'fail'
    offset: number
    zip: string
}
