import { PostLink, Post } from "../components/content";
import data from "../assets/data.json";

export const MainPage = () => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header>
          <h1 className="text-3xl dark:text-white">Posts</h1>
        </header>
        <ul>
          {data.map((i) => (
            <PostLink
              key={i.id}
              href={`post/${i.id}`}
              title={i.title}
              month={i.month}
              date={i.date}
              year={i.year}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export const PostPage = () => {
  return (
    <>
      {data.map((i) => (
        <Post
          key={i.id}
          month={i.month}
          date={i.date}
          year={i.year}
          title={i.title}
          content={i.content}
        />
      ))}
    </>
  );
};
