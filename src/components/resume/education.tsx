import { GraduationCap } from 'lucide-react';
import { RoleCard, type Role } from './role-card';
import { Section } from './section';

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
    company: 'National University of Sciences and Technology (NUST)',
    title: 'MS Robotics & Intelligent Machine Engineering (RIME) · GPA: 1.0',
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

export function Education() {
  return (
    <Section
      title="Education"
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
