import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Image from 'components/Image'
import { styles } from './styles'
import { parts } from 'data/parts'
import slugify from 'slugify'

class ItemDetails extends Component {

    constructor(props, context) {
        super(props, context)

        const item = parts.filter(p => slugify(p.name) === props.match.params.item)[0]

        this.state = {
            item: item
        }
    }

    render() {
        const { item } = this.state
        const { classes } = this.props
        return (
            <Image
                className={classes.image}
                src={item.images[0]}
            />
        )
    }
}

ItemDetails.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemDetails)