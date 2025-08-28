import { Container } from '@/components/Container';
import { Education } from '@/components/resume/education';
import { Publications } from '@/components/resume/publications';
import { Skills } from '@/components/resume/skills';
import { Work } from '@/components/resume/work';
import {
  GitHubIcon,
  GoogleScholarIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/social-icons';
import { SocialLink } from '@/components/social-links';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Resume() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Research Software Engineer | AI & Robotics Enthusiast | Gamer
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          Hi, I&apos;m Saifullah, a research software developer and PhD
          candidate at the German Research Center for Artificial Intelligence
          (DFKI) GmbH, Kaiserslautern, Germany. My current research work
          interests include Explainable AI, Privacy-Preserving Machine Learning,
          and Model Robustness in Document Intelligence. Outside of research, I
          enjoy robotics and gaming.
        </p>
        <div className="mt-6 flex justify-between gap-4">
          <div className="flex gap-4">
            <SocialLink
              href="https://github.com/saifullah3396"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/saifullah3396/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://scholar.google.com/citations?user=3OOMugoAAAAJ&hl=en"
              icon={GoogleScholarIcon}
            >
              Google Scholar
            </SocialLink>
            <SocialLink
              href="mailto:saifullah.saifullah@dfki.de"
              icon={MailIcon}
            >
              saifullah.saifullah@dfki.de
            </SocialLink>
          </div>
          <Button asChild variant="secondary" className="-mt-1">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Container>

      <Container className="mt-12">
        <div className="flex h-full flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <Publications />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <div className="space-y-8">
              <Work />
              <Education />
              <Skills />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
