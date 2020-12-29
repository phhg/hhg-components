export const theme = {
  colors: {
    primaryBase: '#2d87f3',
    primaryHover: '#2c74df',
    primaryActive: '#2b62cd',
    primaryVisited: '#5e38ba',

    secondaryBase: '#284a75',
    secondaryDark: '#1b3250',

    success: '#00b16a',
    error: '#f71210',

    gray100: '#f2f2f2',
    gray200: '#d9d9d9',
    gray300: '#bfbfbf',
    gray400: '#8c8c8c',
    gray500: '#737373',
    gray600: '#595959',
    gray800: '#262626',

    blue50: '#e3f2ff',
    blue100: '#bcdeff',
    blue200: '#91caff',
    blue300: '#65b5ff',
    blue400: '#45a4ff',
    blue500: '#2b94ff',
    blue600: '#2d87f3',
    blue700: '#2c74df',
    blue800: '#2b62cd',
    blue900: '#2743ad',

    alertWarning: '#fe921d',

    green50: '#e0f8ee',
    green100: '#b3eed5',
    green200: '#7ce2b9',
    green300: '#2ed69e',
    green400: '#00CB8A',
    green500: '#00C076',
    green600: '#00B16A',
    green700: '#009E5C',
    green800: '#008C50',
    green900: '#006C39',

    yellow50: '#fff8e2',
    yellow100: '#ffecb6',
    yellow200: '#ffe187',
    yellow300: '#ffd658',
    yellow400: '#ffc326',
    yellow500: '#fe921d',
    yellow600: '#ffb521',
    yellow700: '#fea21e',
    yellow800: '#fe921d',
    yellow900: '#fc7419',

    red50: '#fae9e8',
    red100: '#feccbf',
    red200: '#ff5331',
    red300: '#f44d2c',
    red400: '#ff6f4d',
    red500: '#ff5331',
    red600: '#f44d2c',
    red700: '#e64728',
    red800: '#d84023',
    red900: '#bf331b',

    neutral50: '#f8f9fc',
    neutral100: '#e4e8ec',
    neutral200: '#d2d6dc',
    neutral300: '#bfc5cc',
    neutral400: '#adb3bc',
    neutral500: '#9aa2ac',
    neutral600: '#87909c',
    neutral700: '#757f8c',
    neutral800: '#626d7c',

    teal50: '#e0f7fc',
    teal100: '#b1ebf8',
    teal200: '#7ddff3',
    teal300: '#44d1ec',
    teal400: '#00c77e6',
    teal500: '#00bee0',
    teal600: '#00aecd',
    teal700: '#0099b2',
    teal800: '#008599',
    teal900: '#00626c',

    pink50: '#fff1f6',
    pink100: '#fec7dc',
    pink200: '#fec7dc',
    pink300: '#fec2cf',
    pink400: '#fe9dc2',
    pink500: '#fd877b4',
    pink600: '#fd72a7',
    pink700: '#fc5d9a',
    pink800: '#fc488d',

    violet50: '#f5edff',
    violet100: '#e7d2f7',
    violet200: '#d8b7f0',
    violet300: '#ca9ce8',
    violet400: '#bb82e1',
    violet500: '#ad67d9',
    violet600: '#9e4cd1',
    violet700: '#9031ca',
    violet800: '#8116c2',

    indigo700: '#35639c',
    indigo800: '#284a75',
    indigo900: '#1b3250',

    brown50: '#faecde',
    brown100: '#ecd8c5',
    brown200: '#dec5ab',
    brown300: '#d0b192',
    brown400: '#c39d79',
    brown500: '#b5895f',
    brown600: '#a77646',
    brown700: '#99622c',
    brown800: '#8b4e13',

    white: '#fff',
  },
  sizes: {
    fwBold: '700',
    fwSemiBold: '600',
    fsCaption2: '13px',
    fsHeading2: '28px',
    fsHeading6: '16px',
    fsParagraph4: '14px',
    fwRegular: '400',
  },
}

export type ThemeType = typeof theme

export type ThemeProps = {
  theme: ThemeType
}
