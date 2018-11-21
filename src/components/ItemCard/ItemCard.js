import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Anchor from 'components/Anchor'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classnames from 'classnames'
import { styles } from './styles'
import slugify from 'slugify'
import RRLink from 'components/RRLink'

const RRBtn = RRLink(Button)
const RRCardMedia = RRLink(CardMedia)

class ItemCard extends Component {

  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, part } = this.props
    const to = '/' + slugify(part.name)

    return (
      <Card className={classes.card}>
        <CardHeader
          title={part.name}
          subheader={part.oem[0]}
        />
        <RRCardMedia
          className={classes.media}
          image={part.images[0]}
          title={part.name}
          to={to}
        />
        <CardContent>
          <Typography variant='h5' component='h3'>
            {part.price + ' ' + part.currency}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <RRBtn size="small" color="primary" to={to}>
            Още
          </RRBtn>
          <Anchor
            href={part.info_url}
            target='_blank'
          >
            <IconButton aria-label="Car Info">
              <InfoIcon />
            </IconButton>
          </Anchor>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{part.description}</Typography>
          </CardContent>
        </Collapse>

      </Card>
    )
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemCard)