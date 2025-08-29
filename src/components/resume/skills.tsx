import { Badge } from '@/components/ui/badge';
import { WandSparklesIcon } from 'lucide-react';
import { Section } from './section';

const skills = [
  {
    category: 'Deep Learning',
    items: [
      'PyTorch',
      'PyTorch Ignite',
      'Explainable AI',
      'Private ML',
      'Document AI',
      'CNNs',
      'Transformers',
      'Diffusion Models',
    ],
  },
  {
    category: 'Frontend/Backend',
    items: [
      'FastApi',
      'React',
      'NextJS',
      'S3',
      'LakeFS',
      'SQL-Alchemy',
      'Supabase',
      'RabbitMQ',
      'PySpark',
      'Docker',
      'Git',
    ],
  },
  { category: 'LLM Frameworks', items: ['LangChain', 'RAG', 'vLLM'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB'] },
  { category: 'Programming', items: ['Python', 'C++', 'C', 'Javascript'] },
  {
    category: 'Operating Systems',
    items: ['Linux', 'Docker', 'Windows', 'Gentoo'],
  },
  {
    category: 'Robotics',
    items: [
      'ROS',
      'Gazebo',
      'VREP',
      'OpenCV',
      'Multi-body Dynamics',
      'Motion Planning',
      'SLAM',
    ],
  },
  {
    category: 'Edge AI',
    items: ['NVIDIA Deepstream', 'NVIDIA Jetson', 'TensorRT'],
  },
  { category: 'Graphics Designs', items: ['Adobe Photoshop'] },
];

export function Skills() {
  return (
    <Section
      title="Skills"
      icon={<WandSparklesIcon className="h-5 w-5" />}
      className="h-48"
    >
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="mb-1 text-sm font-medium">{skill.category}</div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <Badge key={i} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
