import Image, { type ImageProps } from 'next/image';

export interface Role {
  company: string;
  title: string;
  logo?: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

export function RoleCard({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;
  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      {role.logo && (
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border bg-muted">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
      )}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium">{role.company}</dd>
        <dd className="text-xs text-muted-foreground">{role.title}</dd>
        <dd
          className="ml-auto text-xs text-muted-foreground"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time> —{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}
