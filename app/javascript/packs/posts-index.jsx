import React, { useCallback, useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import renderComponent from './utils/renderComponent';
import * as GqlQueries from './graphql_queries';

const PostsIndex = () => {
  const [errors, setErrors] = useState([]);
  const { data, loading, error, refetch } = useQuery(GqlQueries.POSTS_QUERY);
  const [changeVote] = useMutation(GqlQueries.UPDATE_VOTE);


  const handleVoteClick = useCallback(async (e) => {
    const postId = e.target.dataset.id;
    const { data: { voteMutation: { errors } } } = await changeVote({ variables: { postId } });
  
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
    <div>
      {errors.map((error) => (
        <div key={error} className="notice">
          {error}
        </div>
      ))}
      {data.posts.map((post) => (
        <article className="post box" key={post.id}>
          <h2>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </h2>
          <div className="url">
            <a href={post.url}>{post.url}</a>
          </div>
          <div className="tagline">{post.tagline}</div>
          <footer>
            <button onClick={handleVoteClick} data-id={post.id} className={post.voted ? 'voted-btn' : ''}>
              {post.voted ? '🔼' : '🔽' } {post.noOfVotes}
            </button>
            <button>💬 {post.commentsCount}</button>
          </footer>
        </article>
      ))}
    </div>
  );
};

renderComponent(PostsIndex);
