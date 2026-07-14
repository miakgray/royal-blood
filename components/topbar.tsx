import { ThemeToggle } from "./theme-toggle";

export function Topbar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="flex items-center justify-between border-b border-border px-8 py-5">
      <div>
        <h1 className="text-lg font-semibold text-ink-primary">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-ink-muted">{subtitle}</p>
        ) : null}
      </div>
      <ThemeToggle />
    </header>
  );
}
