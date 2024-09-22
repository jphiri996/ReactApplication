import React from 'react'
import homeStyles from '../styles/Home.module.css';
import { PostCardProps } from '../types/PostCardProps';

//write keys things you are getting: Change latter the interfcace and the function below to blog posts





export default function PostCard(props: PostCardProps) {
  return (
    <div className={homeStyles.movie}>
        <img className={homeStyles.poster} src={props.Images[1]} alt={props.Title} />
        <div className={homeStyles.title}>{props.Title}</div>
  </div>
  )
}
