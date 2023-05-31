import Image from 'next/image';
import { ProjectData } from './page';

interface ProjectItemProps {
  data: ProjectData;
}

export default function ProjectItem({
  data: {
    properties: { Name, GitHub, Demo, Description, Stacks },
    cover,
  },
}: ProjectItemProps) {
  const title = Name ? Name?.title[0]?.plain_text : '';
  const gitHub = GitHub ? GitHub?.url : '';
  const demo = Demo ? Demo?.url : '';
  const description = Description ? Description?.rich_text[0]?.plain_text : '';
  const coverImage = cover ? cover.file?.url || cover.external?.url : '';
  const stacks = Stacks.multi_select;

  return (
    <div className="project-card">
      <div className="relative h-[275px] w-full">
        {coverImage ? (
          <Image
            className="rounded-t-xl object-cover"
            src={coverImage}
            fill
            quality={100}
            alt="Cover Image"
            priority={true}
          />
        ) : (
          <div className="h-[275px] w-full rounded-t-xl bg-slate-400 dark:bg-slate-500" />
        )}
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-lg">{title ? title : '프로젝트 제목'}</h1>
        <h3 className="mt-2">{description ? description : '설명'}</h3>
        <div className="my-2 flex flex-wrap gap-1">
          {stacks &&
            stacks.map((stack) => (
              <span
                className="rounded-md bg-sky-200 px-2 py-1 text-xs tracking-tighter dark:bg-sky-700"
                key={stack.id}
              >
                {stack.name}
              </span>
            ))}
        </div>
        <div className="mt-2 flex flex-col space-y-2 text-sm">
          {gitHub && (
            <a
              className="project-link"
              href={gitHub}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          )}
          {demo && (
            <a
              className="project-link"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
