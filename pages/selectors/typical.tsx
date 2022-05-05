import { NextPage } from "next";
import Head from "next/head";
import faker from "faker";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { RootState } from "../../store/configure-store";
import styles from "../../styles/Home.module.css";
import React from "react";
import { userSelector } from "../../store/user-slice";
import { addLike, addPost } from "../../store/posts-slice";

const postsSelector = (state: RootState) => {
  console.log("postsSelector firing");
  return state.posts.posts;
};

const Posts: NextPage = () => {
  const dispatch = useAppDispatch();
  console.log("Posts (typical implementation) rendering");

  const posts = useTypedSelector(postsSelector);
  const user = useTypedSelector(userSelector);

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts: Typical</title>
      </Head>

      <main className={styles.main}>
        <h1>Posts</h1>
        {posts.map((post) => (
          <section
            key={post.id}
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "50px",
              alignItems: "center",
            }}
          >
            <h2>{post.title}</h2>
            <div>Author: {post.userId === user.id ? user.name : "n/a"}</div>
            <div>Likes: {post.likes}</div>
            <button onClick={() => dispatch(addLike(post.id))}>Add Like</button>
          </section>
        ))}
        <button
          onClick={() =>
            dispatch(
              addPost({
                id: posts.length + 1,
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
