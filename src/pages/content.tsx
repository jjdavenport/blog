import { PostLink, Post } from "../components/content";
import data from "../assets/data.json";
import { useParams } from "react-router";

export const MainPage = () => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header>
          <h1 className="text-3xl dark:text-white">Posts</h1>
        </header>
        <ul className="flex flex-col gap-4">
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

type FilteredDataType = {
  id: string;
  month: string;
  date: number;
  year: number;
  title: string;
  content: string[];
};

export const PostPage = () => {
  const param = useParams();
  const id = param.id;

  const filteredData: FilteredDataType | undefined = data.find(
    (i) => i.id === id,
  );

  if (!filteredData) return;

  return (
    <>
      <Post
        key={filteredData.id}
        month={filteredData.month}
        date={filteredData.date}
        year={filteredData.year}
        title={filteredData.title}
        content={filteredData.content}
      />
    </>
  );
};
