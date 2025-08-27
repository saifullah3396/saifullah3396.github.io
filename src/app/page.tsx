import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  GoogleScholarIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import { BookOpen, BookOpenIcon, WandSparklesIcon } from 'lucide-react';

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

interface Role {
  company: string;
  title: string;
  logo?: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      {role.logo && (
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
      )}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}
function Education() {
  const education: Array<Role> = [
    {
      company: 'RPTU University of Kaiserslautern-Landau',
      title: 'Doctorate (PhD) in Computer Science (CS)',
      start: '2021',
      end: {
        label: 'Ongoing',
        dateTime: '',
      },
      logo: undefined,
    },
    {
      company: 'Oxford Machine Learning Summer School (OxML) 2023',
      title: 'Summer School Participant',
      start: '2023',
      end: '2023',
      logo: undefined,
    },
    {
      company: 'National University of Sciences and Technology (NUST)',
      title:
        'Master of Science (MS) in Robotics & Intelligent Machine Engineering (RIME) · GPA: 1.0',
      start: '2016',
      end: '2019',
      logo: undefined,
    },
    {
      company: 'National University of Sciences and Technology (NUST)',
      title: 'Bachelors (BS) in Mechanical Engineering · GPA: 1.31',
      start: '2012',
      end: '2016',
      logo: undefined,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        <BookOpenIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol
        className="mt-6 max-h-64 space-y-4 overflow-y-auto pr-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {education.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

function Skills() {
  const skills = [
    {
      category: 'Deep Learning',
      items: ['PyTorch', 'Transformers', 'Diffusion Models'],
    },
    { category: 'Frontend/Backend', items: ['React', 'NextJS', 'FastAPI'] },
    { category: 'LLM Frameworks', items: ['vLLM', 'LangChain', 'RAG'] },
    { category: 'Optimization / Edge AI', items: ['TensorRT', 'Jetson'] },
    { category: 'Programming', items: ['Python', 'C++', 'Javascript'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB'] },
    { category: 'Operating Systems', items: ['Linux', 'Windows', 'Docker'] },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        <WandSparklesIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <div className="mt-6 flex max-h-64 flex-col space-y-4 overflow-y-auto pr-2">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {skill.category}
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume() {
  const work: Array<Role> = [
    {
      company: 'German Research Centre for Artificial Intelligence (DFKI) GmbH',
      title: 'PhD Researcher',
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company:
        'Intelligent Robotics Lab (IRL), National Center of Artificial Intelligence (NCAI)',
      title: 'Technical Lead / Research Associate',
      start: '2019',
      end: '2021',
    },
    {
      company: 'Ingenio',
      title: 'Lead Robotics',
      start: '2020',
      end: '2020',
    },
    {
      company: 'Robotics & Intelligent Systems Engineering (RISE) Lab, NUST',
      title: 'Team Lead Project RoboCup',
      start: '2017',
      end: '2019',
    },
    {
      company: 'Robotics & Intelligent Systems Engineering (RISE) Lab, NUST',
      title: 'Robotics Software Intern',
      start: '2015',
      end: '2015',
    },
    {
      company: 'NUST Aerial Robotics (NUSTAR) Lab, NUST',
      title: 'Junior Researcher',
      start: '2013',
      end: '2015',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol
        className="mt-6 max-h-64 space-y-4 overflow-y-auto pr-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {work.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

function Publications() {
  const publications = [
    {
      title:
        'Are Deep Models Robust against Real Distortions? A Case Study on Document Image Classification.',
      authors:
        'Saifullah, S., Siddiqui, S. A., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        '26th International Conference on Pattern Recognition (ICPR), 2022, IEEE',
      pages: 'pp. 1628--1635',
      link: 'https://ieeexplore.ieee.org/abstract/document/9956167/',
    },
    {
      title:
        'Analyzing the Potential of Active Learning for Document Image Classification.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Journal on Document Analysis and Recognition (IJDAR), vol. 26, no. 3, pp. 187--209, 2023. Springer.',
      link: 'https://link.springer.com/article/10.1007/s10032-023-00429-8',
    },
    {
      title:
        'DocXClassifier: Towards a Robust and Interpretable Deep Neural Network for Document Image Classification.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Journal on Document Analysis and Recognition (IJDAR), pp. 1--27, 2024. Springer.',
      link: 'https://link.springer.com/article/10.1007/s10032-024-00483-w',
    },
    {
      title: 'ColDBin: Cold Diffusion for Document Image Binarization.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Conference on Document Analysis and Recognition, pp. 207--226, 2023. Springer Nature Switzerland, Cham.',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-41734-4_13',
    },
    {
      title:
        'PrIeD-KIE: Towards Privacy Preserved Document Key Information Extraction.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue: 'arXiv preprint arXiv:2310.03777, 2023.',
      link: 'https://arxiv.org/pdf/2310.03777',
    },
    {
      title:
        'The Privacy–Explainability Trade-off: Unraveling the Impacts of Differential Privacy and Federated Learning on Attribution Methods.',
      authors: 'Saifullah, S., Mercier, D., Lucieri, A., Dengel, A., Ahmed, S.',
      venue:
        'Frontiers in Artificial Intelligence, vol. 7, 1236947, 2024. Frontiers Media SA.',
      link: 'https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1236947/full',
    },
    {
      title:
        'Towards Privacy Preserved Document Image Classification: A Comprehensive Benchmark.',
      authors: 'Saifullah, S., Mercier, D., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Journal on Document Analysis and Recognition (IJDAR), pp. 1--25, 2024. Springer.',
      link: 'https://link.springer.com/article/10.1007/s10032-024-00469-8',
    },
    {
      title:
        'The Reality of High Performing Deep Learning Models: A Case Study on Document Image Classification.',
      authors: 'Agne, S., Dengel, A., Ahmed, S.',
      venue: 'IEEE Access, 2024. IEEE.',
      link: 'https://ieeexplore.ieee.org/abstract/document/10591981/',
    },
    {
      title:
        'DocXplain: A Novel Model-Agnostic Explainability Method for Document Image Classification.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue: 'arXiv preprint arXiv:2407.03830, 2024.',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-70546-5_7',
    },
    {
      title:
        'StylusAI: Stylistic Adaptation for Robust German Handwritten Text Generation.',
      authors: 'Riaz, N., Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Conference on Document Analysis and Recognition, pp. 429--444, 2024. Springer Nature Switzerland, Cham.',
      link: 'https://arxiv.org/pdf/2407.15608?',
    },
    {
      title: 'Latent Diffusion for Guided Document Table Generation.',
      authors:
        'Hamdani, S. J. H., Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue:
        'International Conference on Document Analysis and Recognition, pp. 368--383, 2024. Springer Nature Switzerland, Cham.',
      link: 'https://arxiv.org/pdf/2408.09800?',
    },
    {
      title:
        'DocVCE: Diffusion-based Visual Counterfactual Explanations for Document Image Classification.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue: 'arXiv preprint arXiv:2508.04233, 2025.',
      link: 'https://arxiv.org/abs/2508.04233',
    },
    {
      title:
        'DP-DocLDM: Differentially Private Document Image Generation using Latent Diffusion Models.',
      authors: 'Saifullah, S., Agne, S., Dengel, A., Ahmed, S.',
      venue: 'arXiv preprint arXiv:2508.04208, 2025.',
      link: 'https://arxiv.org/abs/2508.04208',
    },
  ];

  return (
    <section className="scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 max-h-304 overflow-y-auto">
      <h2 className="mb-4 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BookOpen className="h-5 w-5 flex-none stroke-zinc-400 dark:stroke-zinc-500" />
        <span className="ml-2">Publications</span>
      </h2>
      <ol className="space-y-6">
        {publications.map((pub, idx) => (
          <li key={idx}>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </div>
            <div className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">
              {pub.authors}
            </div>
            <div className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">
              {pub.venue}
              {pub.pages ? `, ${pub.pages}` : ''}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-3xl">
          <div className="flex items-center justify-between gap-12">
            <h1 className="flex-1 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Research Software Engineer | AI & Robotics Enthusiast | Gamer
            </h1>
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Saifullah, a research software developer and PhD
            candidate at the German Research Center for Artificial Intelligence
            (DFKI) GmbH. My work explores Explainable AI, Privacy-Preserving
            Machine Learning, and Model Robustness in Document Intelligence.
            Outside of research, I enjoy robotics and gaming.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/saifullah3396"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/saifullah3396/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://scholar.google.com/citations?user=3OOMugoAAAAJ&hl=en"
              icon={GoogleScholarIcon}
            >
              Google Scholar
            </SocialLink>
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Publications />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Education />
            <Skills />
            <Button
              href="/resume.pdf"
              variant="secondary"
              className="group -mt-12 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
