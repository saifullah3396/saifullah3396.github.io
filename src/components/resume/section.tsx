import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils'; // Make sure to import your cn utility

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
}

export function Section({
  title,
  icon,
  children,
  scrollable = true,
  className,
}: SectionProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        {icon}
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {scrollable ? (
          <ScrollArea className={cn('max pr-2', className)}>
            {children}
          </ScrollArea>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}
