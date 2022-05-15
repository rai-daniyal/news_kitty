import React, { useState, useCallback } from 'react';
import renderComponent from './utils/renderComponent';
import { useQuery, useMutation } from 'react-apollo';

import { format } from 'date-fns';
import * as GqlQueries from './graphql_queries';

const PostsShow = ({ postId }) => {
  const [errors, setErrors] = useState([]);

  const {
    data: { post: post } = {},
    loading,
    error,
    refetch
  } = useQuery(GqlQueries.POST_QUERY, { variables: { postId: postId.toString()}});
  const [updateVote] = useMutation(GqlQueries.UPDATE_VOTE);

  const handleVoteClick = useCallback(async (e) => {
    const { data: { voteMutation: { errors } } } = await updateVote({ variables: { postId: postId.toString() } });
    if (errors.length) {
      if (errors.includes('current user is missing')) {
        window.location.href = '/users/sign_in'
      }
      setErrors(errors);
    } else {
      refetch();
    }
  }, []);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="post">
        {errors.map((error) => (
          <div key={error} className="notice">
            {error}
          </div>
        ))}
        <article className="box">
          <h2>
            <p class="titles">{post.title}</p>
          </h2>
          <div className="url">
            <a href={post.url} target="_blank">
              {post.url}
            </a>
          </div>
          <div className="tagline">{post.tagline}</div>
          <footer>
            <button onClick={handleVoteClick} data-id={post.id} className={post.voted ? 'voted-btn' : ''}>
              {post.voted ? '🔼' : '🔽' } {post.noOfVotes}
            </button>
            {post.commentsCount} comments | author:{' '}
            {post.user.name}
          </footer>
        </article>
      </div>
      <div className="box">
        <h4>Comments:</h4>
        {post.comments.map((comment) => (
          <div key={comment.id} className="card mb-1">
            <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{comment.body}</p>
              <footer className="blockquote-footer">
                <span class="titles" title="Source Title">{comment.user.name}</span>
                <span className="commented-at">{format(new Date(comment.createdAt), 'dd-MMM-yyyy HH:mm')}</span>
              </footer>
            </blockquote>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

renderComponent(PostsShow);
