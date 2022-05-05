import { NextPage } from "next";
import Head from "next/head";
import faker from "faker";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { RootState } from "../../store/configure-store";
import styles from "../../styles/Home.module.css";
import React, { FC } from "react";
import { userSelector } from "../../store/user-slice";
import { addLike, addPost } from "../../store/posts-slice";
import createCachedSelector from "re-reselect";
import { createSelector } from "reselect";
import { shallowEqual } from "react-redux";

const postsSelector = (state: RootState) => {
  console.log("postsSelector firing");
  return state.posts.posts;
};

const postIdsSelector = createSelector(postsSelector, (posts) => {
  console.log("postIdsSelector firing");
  return posts.map((post) => post.id);
});

export const getPostByIdSelector = createCachedSelector(
  [postsSelector, (_state: RootState, id: number | string) => id],
  (
    posts,
    id
  ):
    | { id: string | number; title: string; author: string; likes: number }
    | undefined => {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      console.error("can't find!");
      return undefined;
    }
    return {
      id: post.id,
      title: post.title,
      author: "na", //post.userId === user.id ? user.name : "n/a",
      likes: post.likes,
    };
  }
)((_state, id) => id);

interface PostProps {
  id: number | string;
}
const PostComponent: FC<PostProps> = ({ id }: PostProps) => {
  const dispatch = useAppDispatch();
  console.log(`Post component rendering ${id}`);

  const post = useTypedSelector(
    (state) => getPostByIdSelector(state, id),
    shallowEqual
  );
  if (!post) {
    return (
      <section>
        <div>Can't find id: {id}</div>
      </section>
    );
  }
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "50px",
        alignItems: "center",
      }}
    >
      <h2>{post.title}</h2>
      <div>Author: {post.author}</div>
      <div>Likes: {post.likes}</div>
      <button onClick={() => dispatch(addLike(post.id))}>Add Like</button>
    </section>
  );
};

const PostsComponent: FC = () => {
  console.log("Posts component rendering");
  const postIds = useTypedSelector(postIdsSelector, shallowEqual);
  return (
    <>
      {postIds.map((id) => (
        <PostComponent key={id} id={id} />
      ))}
    </>
  );
};

const Posts: NextPage = () => {
  const dispatch = useAppDispatch();
  console.log("Posts (optimal) rendering");

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts: Optimium</title>
      </Head>

      <main className={styles.main}>
        <h1>Posts</h1>
        <PostsComponent />

        <button
          onClick={() =>
            dispatch(
              addPost({
                id: faker.datatype.uuid(),
                userId: faker.datatype.number(2),
                title: faker.random.words(3),
                likes: 0,
              })
            )
          }
        >
          Add Post
        </button>
      </main>
    </div>
  );
};

export default Posts;
