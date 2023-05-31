import ProjectItem from './project-item';

export interface ProjectData {
  id: string;
  cover: {
    file: {
      url: string;
    };
    external: {
      url: string;
    };
  };
  properties: {
    GitHub: {
      url: string;
    };
    Demo: {
      url: string;
    };
    Stacks: {
      multi_select: [
        {
          id: string;
          name: string;
          color: string;
        }
      ];
    };
    Description: {
      rich_text: [
        {
          plain_text: string;
        }
      ];
    };
    Year: {
      number: number;
    };
    Name: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
  };
}

interface Projects {
  projects: {
    results: ProjectData[];
  };
}

async function getProjects() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Year',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`,
    options
  );
  const projects: Projects = await response.json();

  return projects;
}

export default async function Projects() {
  const projects: Projects = await getProjects();
  const {
    projects: { results },
  } = projects;

  return (
    <>
      {results.length && (
        <div className="mb-10 flex min-h-screen flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold sm:text-3xl">
            <span>총 프로젝트 : </span>
            <span className="text-blue-500">
              {results.length !== 0 ? results.length : 0}
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-8 py-10 md:mx-10 md:grid-cols-2 lg:w-[75vw] lg:grid-cols-3">
            {results?.map((project) => (
              <ProjectItem data={project} key={project.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
