import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  {
    name: 'Atria',
    description:
      'Atria Core is a PyTorch-based toolkit designed for training and testing machine learning and deep learning models at scale.',
    link: {
      href: 'https://github.com/saifullah3396/atria',
      label: 'github.com',
    },
  },
  {
    name: 'TorchXAI',
    description:
      'TorchXAI provides efficient implementations of several XAI (Explainable AI) metrics that seamlessly integrate with the Captum library. ',
    link: {
      href: 'https://github.com/saifullah3396/torchxai',
      label: 'github.com',
    },
  },
  {
    name: 'DP-DocLDM',
    description:
      'An approach to generate differentially private document image datasets using layout-conditioned latent diffusion models',
    link: {
      href: 'https://github.com/saifullah3396/dpdocldm',
      label: 'github.com',
    },
  },
  {
    name: 'DocXClassifier',
    description:
      'An approach for augmenting existing CNN-based classifiers with pyramid-attention modules to introduce inherent interpretability.',
    link: {
      href: 'https://github.com/saifullah3396/docxclassifier',
      label: 'github.com',
    },
  },
  {
    name: 'ColDBin',
    description:
      'An approach to document image binarization through cold diffusion.',
    link: {
      href: 'https://github.com/saifullah3396/vfh3d',
      label: 'github.com',
    },
  },
  {
    name: 'DocAL',
    description:
      'A complete toolkit for active learning for deep learning classification tasks.',
    link: {
      href: 'https://github.com/saifullah3396/doc_al',
      label: 'github.com',
    },
  },
  {
    name: 'DocRobustness',
    description:
      'Toolkit for generating and evaluating corruptness robustness benchmark for document images.',
    link: {
      href: 'https://github.com/saifullah3396/doc_robustness',
      label: 'github.com',
    },
  },
  {
    name: 'DocXAI',
    description:
      'Toolkit for explainable AI for document image classification.',
    link: {
      href: 'https://github.com/saifullah3396/docxai',
      label: 'github.com',
    },
  },
  {
    name: 'Mavros/MoveIt',
    description:
      'A complete toolkit for integrating MoveIt motion planning with MAVROS-based aerial robots in ROS.',
    link: {
      href: 'https://github.com/saifullah3396/mavros_moveit',
      label: 'github.com',
    },
  },
  {
    name: 'RosGym',
    description:
      'A toolkit for integrating Gym with ROS for training reinforcement learning agents on robots in ROS/AirSim-based simulated environments.',
    link: {
      href: 'https://github.com/saifullah3396/ros_gym',
      label: 'github.com',
    },
  },
  {
    name: 'VFH3D+',
    description:
      'An octomap based VFH+ algorithm in 3D for local planning of UAVs (or any robot in 3D).',
    link: {
      href: 'https://github.com/saifullah3396/vfh3d',
      label: 'github.com',
    },
  },
  {
    name: 'AutoFortnite',
    description:
      'AutoFortnite project was about controlling a fortnite player with external controller' +
      'inputs autonomously with realtime streamed visual game inputs handled by NVIDIA DeepStream SDK.',
    link: {
      href: 'https://github.com/saifullah3396/auto_fortnite',
      label: 'github.com',
    },
  },
  {
    name: 'Irl2DRos',
    description:
      'A ros based navigation package for 2d mobile robots (focused on Pioneer 3AT) developed at IRL Robotics Lab, NUST.',
    link: {
      href: 'https://github.com/saifullah3396/irl_2d_ros',
      label: 'github.com',
    },
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
};
export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've worked on over the years."
      intro="I’ve worked on tons of research projects over the years. Many of them are open-source, so if you see something that piques your interest, check it out."
    >
      <ul
        role="list"
        className="grid h-128 grid-cols-1 gap-x-12 gap-y-16 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li key={project.name}>
            <Card className="flex h-full flex-col border-0">
              <CardHeader>
                <CardTitle>
                  <Link href={project.link.href} className="hover:underline">
                    {project.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <CardDescription>{project.description}</CardDescription>
                <Link
                  href={project.link.href}
                  className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
