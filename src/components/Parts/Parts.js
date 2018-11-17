import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import { parts } from 'data/parts'
import ItemCard from 'components/ItemCard'

class Parts extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                {
                    parts.map(part => <ItemCard key={part.name} part={part} />)
                }
            </div>
        )
    }
}

Parts.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Parts)