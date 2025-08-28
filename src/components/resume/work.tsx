import { Briefcase } from 'lucide-react';
import { RoleCard, type Role } from './role-card';
import { Section } from './section';

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

export function Work() {
  return (
    <Section
      title="Work"
      icon={<Briefcase className="h-5 w-5" />}
      className="h-64"
    >
      <ol className="space-y-4">
        {work.map((role, idx) => (
          <RoleCard key={idx} role={role} />
        ))}
      </ol>
    </Section>
  );
}
