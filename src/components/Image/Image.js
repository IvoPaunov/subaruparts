import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

class Img extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    handleToggle = () => {
        let active = this.state.active
        this.setState({ active: !active })
    }

    img = ({ dialogClassName } = {}) => {

        const { className, classes, src } = this.props

        const cName = dialogClassName || className
        return (
            <div
                draggable='false'
                className={classnames(cName, classes.img)}
                onDragStart={(event) => event.preventDefault() /*Firefox*/}
                style={{ backgroundImage: `url("${src}")` }}
            >
            </div>
        )
    }

    renderFullscreenDialog() {
        const { classes } = this.props

        return (
            <span>
                <Button
                    variant='fab'
                    mini
                    color='secondary'
                    className={classnames(classes.fullscreenIcon)}
                    onClick={() => { this.handleToggle() }}
                >
                    <ZoomInIcon />
                </Button>
                <Dialog
                    open={this.state.active}
                    type={this.props.type || 'normal'}
                    maxWidth={false}
                    onClose={this.handleToggle}
                    classes={{ paper: classes.dialog }}
                >
                    <DialogContent
                        classes={{ root: classes.dialogContent }}
                        className={classes.dialogImageParent}
                    >
                        {this.img({ dialogClassName: classes.dialogImage })}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleToggle}
                            color='primary'
                        >
                            {'Затвори'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        )
    }

    render() {
        const { classes } = this.props
        return (

            <span className={classnames(classes.imgParent)}>
                {this.img()}
                {this.renderFullscreenDialog()}
            </span>
        )
    }
}

Img.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string
}

export default withStyles(styles)(Img)