export function getFirebase(asString = false) {
    const local = JSON.parse(localStorage.getItem('firebase') || '{}');
    const config = window.location.search.substring(1).split('&').reduce((acc, part) => {
        const [key, value] = part.split('=').map(decodeURIComponent)
        if (!(key && value)) return acc;
        return ({ ...acc, [key]: value })
    }, local);

    return asString ? '?' + urlEncode(config) : config;
}
export function urlEncode(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
}
