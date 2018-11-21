import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 0
            },
            outlined: {
                borderRadius: 0
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: 0
            }
        }
    }
})