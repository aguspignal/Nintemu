const pallete = {
    black0: "#202020",
    black1: "#343434",
    black2: "#434343",
    white: "#FEFEFE",
    gray: "#B0B0B0",
    violet: "#892CDC",
    pink: "#BC6FF1",
    red: "#E53944",
    yellow: "#FFCC00",
}

export const theme = {
    colors: {
        text: pallete.white,
        textDark: pallete.black0,

        background: pallete.black1,

        primary: pallete.violet,
        secondary: pallete.pink,

        gray: pallete.gray,
        danger: pallete.red,
        warning: pallete.yellow
    },

    spacing: {
        xxxs: 4,
        xxs: 8,
        xs: 12,
        s: 16,
        m: 24,
        l: 32,
        xl: 48,
        xxl: 56,
        xxxl: 64
    },

    fontSize: {
        xs: 14,
        s: 18,
        m: 24,
        l: 32,
        xl: 42,
        xxl: 48,
    }
}