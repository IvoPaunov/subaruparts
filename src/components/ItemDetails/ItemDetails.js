import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Image from 'components/Image'
import Grid from '@material-ui/core/Grid'
import { styles } from './styles'
import { parts } from 'data/parts'
import slugify from 'slugify'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const mapImages = (imgs) => {
    return imgs.map(img => {
        return {
            img: img,
            title: img
        }
    })
}

class ItemDetails extends Component {

    constructor(props, context) {
        super(props, context)

        const item = parts.filter(p => slugify(p.name) === props.match.params.item)[0]

        this.state = {
            item: item,
            images: (item && item.images) ? mapImages(item.images) : null
        }
    }

    images = ({ classes, images }) =>
        <Grid container spacing={8}>
            {
                images.map((img, idx) =>
                    <Grid key={img + idx} item xs={12} sm={6} md={4} xl={3} className={classes.imageGridItem}>
                        <Image
                            key={img + idx}
                            className={classes.image}
                            src={img.img}
                        />
                    </Grid>
                )
            }
        </Grid>

    details = ({ classes, item }) =>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color='textSecondary' gutterBottom variant='h6'>
                    {item.name}
                </Typography>
                <Typography variant='h5' component='h2' gutterBottom>
                    {item.price + ' ' + item.currency}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {'наличност: ' + item.availability}
                </Typography>
                <Typography variant='subtitle2' component='p'>
                    {'OEM: ' + item.oem.join(', ')}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary' component='p' gutterBottom>
                    {'OEM съвместими: ' + item.oem_similar.join(', ')}
                </Typography>
                <Typography variant='body2' component='p'>
                    {'Описание: ' + item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' href={item.info_url} target='_blank' size='small'>{'CATCAR.INFO'}</Button>
            </CardActions>
        </Card>


    render() {
        const { item, images } = this.state
        const { classes } = this.props

        if (!item) return null

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <this.details classes={classes} item={item} />
                </Grid>
                <Grid item xs={12}>
                    <this.images classes={classes} images={images} />
                </Grid>
            </Grid>
        )
    }
}

ItemDetails.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemDetails)