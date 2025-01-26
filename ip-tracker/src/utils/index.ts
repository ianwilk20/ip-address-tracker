const validIPAddress = (IP: string): boolean => {
    if (!IP) return false
    else if (IP.length > 15) return false // 255.255.255.255 == 15 characters
    else if (IP.length < 7) return false // 0.0.0.0 == 7 characters
    else if (IP.split('.').length !== 4)
        return false // ['1', '255', '255', '255', '255']
    else if (
        IP.split('.').find(
            (ipPart) => Number(ipPart) > 255 || Number(ipPart) < 0
        )
    )
        return false // ['10', '256', '12', '90']
    return true
}

const secondsToHours = (value: number): number => {
    return value / 3600
}

const formatTimezone = (timezoneOffset: number): string => {
    const plusOrMinus = timezoneOffset > 0 ? '+' : '-'
    const hour = Math.abs(Math.floor(timezoneOffset))
    const formattedHour = hour > 9 ? hour.toString() : `0${hour}`
    const decimal = timezoneOffset - Math.floor(timezoneOffset)
    const min = decimal > 0 ? (60 * decimal).toString() : '00'
    return `UTC ${plusOrMinus}${formattedHour}:${min}`
}

export { validIPAddress, secondsToHours, formatTimezone }
