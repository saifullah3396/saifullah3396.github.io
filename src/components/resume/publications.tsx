import { BookOpen } from 'lucide-react';
import { Section } from './section';

const publications = [
  {
    title:
      'Are Deep Models Robust against Real Distortions? A Case Study on Document Image Classification.',
    authors: 'Saifullah, S., Siddiqui, S. A., Agne, S., Dengel, A., Ahmed, S.',
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

export function Publications() {
  return (
    <Section
      title="Publications"
      icon={<BookOpen className="h-5 w-5" />}
      className="h-296"
    >
      <ol className="space-y-4">
        {publications.map((pub, idx) => (
          <li key={idx}>
            <div className="text-sm font-semibold">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </div>
            <div className="text-xs text-muted-foreground">{pub.authors}</div>
            <div className="text-xs text-muted-foreground">{pub.venue}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
