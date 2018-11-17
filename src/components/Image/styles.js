export const styles = theme => ({
    img: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    imgParent: {
        top: 0,
        left: 0,
        width: 'auto',
        height: 'auto',
        position: 'relative',
        display: 'inline-block'
    },
    fullscreenIcon: {
        position: 'absolute',
        top: theme.spacing.unit,
        right: theme.spacing.unit,
        cursor: 'pointer'
    },
    dialogContent: {
        display: 'flex'
    },
    dialog: {
            width: `calc(100vw - ${theme.spacing.unit * 2}px)`,
            height: `calc(100vh - ${theme.spacing.unit * 2}px)`,
    },
    dialogImageParent: {
        '@media(max-width:1080px)': {
            width: '80vw',
            height: '100vw',
            display: 'block',
            margin: 'auto',
        },
        '@media(max-width:744px)': {
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    dialogImage: {
        flex: '1 1 auto',
        backgroundSize: 'contain'
    }
})