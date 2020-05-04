import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogCard from './../../components/BlogCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    gridCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }))

export default function BlogsContainer() {

    const classes = useStyles()

    return (
        <Grid container spacing={3} className={classes.gridCenter}>
            <Grid item xs={3}>
                <BlogCard name={"Scripting resources"} />
            </Grid>
            <Grid item xs={3}>
                <BlogCard name={"Other topics, include stats"} />
            </Grid>
            <Grid item xs={3}>
                <BlogCard name={"Blog Title 3"} />
            </Grid>
        </Grid>
    )
}