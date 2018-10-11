import React from 'react'
import PropTypes from 'prop-types'

//material ui
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    width: 250,
    height: 400,
    padding: 50,
    margin: 50
  },
  media: {
    height: 250
  }
}

const IndBrew = props => {
  const {classes} = props
  const recipe = props.recipe
  return (
    <Grid container justify="center" alignItems="center">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="/no-image.png" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {recipe.name}
            </Typography>
            <Typography component="p">
              Batch Size:
              {recipe.batchSize}
            </Typography>
            <Typography component="p">
              ABV:
              {recipe.ABV}
            </Typography>
            <Typography component="p">
              Temperature:
              {recipe.temp}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Start Recipe!
          </Button>
          <Button size="small" color="primary">
            See Instructions!
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

IndBrew.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IndBrew)
