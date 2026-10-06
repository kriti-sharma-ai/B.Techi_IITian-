import { Brain, Briefcase, ChartColumn, Code, Database, Presentation, Sheet, Sigma, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";

/** Icon per skill course (SkillCourse.icon). Kept separate so client menus can import it cheaply. */
export const skillIcons: Record<string, LucideIcon> = {
  code: Code,
  database: Database,
  sheet: Sheet,
  chart: ChartColumn,
  sigma: Sigma,
  brain: Brain,
  sparkles: Sparkles,
  presentation: Presentation,
  trending: TrendingUp,
  briefcase: Briefcase,
};
