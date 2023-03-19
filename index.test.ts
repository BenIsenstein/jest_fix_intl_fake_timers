const isFirstOfMonth = (ianaTimeZone: string, timestamp?: number) => {
    const formatter = Intl.DateTimeFormat(undefined, {
        timeZone: ianaTimeZone
    })

    console.log('Current system date interpreted by formatter: ', formatter.format(timestamp))

    return parseInt(formatter.formatToParts(timestamp)[4].value) === 1
}

describe('Date assertion using Intl class', () => {     
    it('assesses is first of the month without an internal Date()', () => {
        jest.useFakeTimers()

        // June 1 00:00 UTC - Toronto is May 31 20:00 
        jest.setSystemTime(Date.UTC(2022, 5, 1))
        expect(isFirstOfMonth('America/Toronto')).toBe(false)

        // June 1 04:00 UTC - Toronto is June 1 00:00
        jest.setSystemTime(Date.UTC(2022, 5, 1, 4))
        expect(isFirstOfMonth('America/Toronto')).toBe(true)
    })

    it('assesses is first of the month with an internal Date()', () => {
        jest.useFakeTimers()

        // June 1 00:00 UTC - Toronto is May 31 20:00 
        jest.setSystemTime(Date.UTC(2022, 5, 1))
        expect(isFirstOfMonth('America/Toronto', Date.now())).toBe(false)

        // June 1 04:00 UTC - Toronto is June 1 00:00
        jest.setSystemTime(Date.UTC(2022, 5, 1, 4))
        expect(isFirstOfMonth('America/Toronto', Date.now())).toBe(true)
    })
})