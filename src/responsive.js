import { css } from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 420px) {
        ${props}
    }
    `;
}

export const iphone10 = (props) => {
    return css`
    @media only screen and (max-width: 420px) {
        ${props}
    }
    `;
}

export const resolution1024 = (props) => {
    return css`
    @media screen and (min-device-width: 1024px) {
        ${props}
    }
    `;
}

// @media screen and (min-device-width: 1366px) {
//         ${props}
//     }
//     `;
//     @media screen and (min-device-width: 1440px) {
//         ${props}
//     }
//     `;
//     @media screen and (min-device-width: 1920px) {
//         ${props}
//     }
//     `;