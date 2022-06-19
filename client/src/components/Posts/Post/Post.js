import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay} style={{textAlign:"center"}}>
      <Typography className={classes.title} gutterBottom variant="h4" component="h2">{post.title}</Typography>
      </div>

        <Typography variant="h6">{post.creator} </Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
       <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">{post.message}</Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant="body2" color="textPrimary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};
export default Post;