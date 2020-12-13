export const numFormatter = new Intl.NumberFormat('en-US', {});

export const capitalize = (str) => {
    return typeof str === 'string' ? str && str[0].toUpperCase() + str.slice(1) : '';
}

export const fromCamelCase = (str) => {
    return typeof str === 'string' ? str.replace(/([a-z])([A-Z])/g, '$1 $2') : '';
}

// https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
