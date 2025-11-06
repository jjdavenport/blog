import { Post } from "../components/content";

export const MainPage = () => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header>
          <h1 className="text-3xl">Posts</h1>
        </header>
        <ul>
          <Post
            href=""
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
