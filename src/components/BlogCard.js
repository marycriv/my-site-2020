import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div><p>BlogCard</p></div>
  );
}