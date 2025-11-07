import { PostLink, Post } from "../components/content";

export const MainPage = () => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header>
          <h1 className="text-3xl dark:text-white">Posts</h1>
        </header>
        <ul>
          <PostLink
            href="post/1"
            title="First post"
            month="October"
            date={6}
            year={2025}
          />
        </ul>
      </div>
    </>
  );
};

export const PostPage = () => {
  return (
    <>
      <Post
        month="October"
        date={1}
        year={2026}
        title="Post title"
        content="gjkdffgjdfkgjkdf
      gfdlgjkfhj
      sdgpklkdfjgkfdlg
      gfkhjkfghjgf"
      />
    </>
  );
};
