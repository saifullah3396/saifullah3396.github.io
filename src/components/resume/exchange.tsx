import { GraduationCap } from 'lucide-react';
import { RoleCard, type Role } from './role-card';
import { Section } from './section';

const education: Array<Role> = [
  {
    company: 'Oxford Machine Learning Summer School (OxML) 2023',
    title: 'Summer School Participant',
    start: '2023',
    end: '2023',
    logo: undefined,
  },
  {
    company: 'Sakura Exchange Program in Science, Tohoku University, Japan',
    title: 'Research Exchange Student',
    start: '2017',
    end: '2017',
    logo: undefined,
  },
  {
    company: 'Standard Platform League (SPL), RoboCup 2016',
    title: 'Team Member, Team NUST',
    start: '2016',
    end: '2017',
    logo: undefined,
  },
];

export function Exchange() {
  return (
    <Section
      title="Exchange Programs & Competitions"
      icon={<GraduationCap className="h-5 w-5" />}
      className="h-48"
    >
      <ol className="space-y-4">
        {education.map((role, idx) => (
          <RoleCard key={idx} role={role} />
        ))}
      </ol>
    </Section>
  );
}
