import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  GoogleScholarIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi, I’m Saifullah.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Saifullah. 
            </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
<p>
  I&apos;ve loved computers and video games for as long as I can remember, so programming came naturally. I started coding in 2012 with a C/C++ course at university, building a GUI-based Reversi game, and soon got into robotics—first aerial robotics with MATLAB, then humanoid robots for my Bachelor&apos;s and Master&apos;s projects.
</p>
<p>
  At the RISE Lab, I worked on motion control, kinematics, computer vision, SLAM, and behavior planning. I also led my university&apos;s RoboCup team, designing autonomous humanoid robots to play football and gaining hands-on experience in C++ and Python across robotics systems.
</p>
<p>
  After my Master&apos;s, I joined NCAI, Pakistan, leading projects in UAVs, robotics, and computer vision. I worked on real-time object tracking, GPU-accelerated obstacle avoidance, and full backend/frontend pipelines—bringing together complex systems from low-level code to real-time applications.
</p>
<p>
  Now, as a PhD student in Germany, I focus on deep learning, document analysis, explainable AI, and privacy-preserving ML. With over 12 years of programming experience, I enjoy turning challenging problems into working solutions, whether in robotics, AI, or computer vision.
</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */} 
            <SocialLink href="https://github.com/saifullah3396" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/saifullah3396/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://scholar.google.com/citations?user=3OOMugoAAAAJ&hl=en"
              icon={GoogleScholarIcon}
              className="mt-4"
            >
              Google Scholar
            </SocialLink>
            <SocialLink
              href="mailto:saifullah.saifullah@dfki.de"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              saifullah.saifullah@dfki.de
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
