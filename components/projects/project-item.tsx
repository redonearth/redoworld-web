import Image from 'next/image';
import { IProjectData } from 'pages/projects';

interface IProps {
  data: IProjectData;
}

export default function ProjectItem({
  data: {
    properties: { Name, GitHub, Demo, Description, Stacks },
    cover,
  },
}: IProps) {
  const title = Name.title[0].plain_text;
  const gitHub = GitHub?.url;
  const demo = Demo?.url;
  const description = Description.rich_text[0].plain_text;
  const coverImage = cover ? cover.file?.url || cover.external?.url : '';
  const stacks = Stacks.multi_select;

  return (
    <div className="m-3 flex w-full flex-col rounded-xl bg-slate-100 dark:bg-slate-700">
      <div className="relative h-[275px] w-full">
        {coverImage ? (
          <Image
            className="rounded-t-xl object-cover"
            src={coverImage}
            layout="fill"
            quality={100}
            alt="Cover Image"
            priority={true}
          />
        ) : (
          <div className="h-[275px] w-full rounded-t-xl bg-slate-400 dark:bg-slate-500" />
        )}
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-lg">{title}</h1>
        <h3 className="mt-2">{description}</h3>
        <div className="mt-2 flex space-x-2">
          {stacks.map((stack) => (
            <span
              className="rounded-md bg-sky-200 px-2 py-1 text-sm dark:bg-sky-700"
              key={stack.id}
            >
              {stack.name}
            </span>
          ))}
        </div>
        <a href={gitHub}>GitHub Repository</a>
        <a href={demo}>Demo</a>
      </div>
    </div>
  );
}
