// Explicit icon registry — import only the icons the site uses so the bundle
// stays small (avoids pulling the entire lucide-react set). Add new icons here
// when you reference them by name from a data file.
import {
  Circle,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  ClipboardCheck,
  Cog,
  Cpu,
  Crown,
  Factory,
  FileCheck2,
  Gauge,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Map,
  MessagesSquare,
  Microscope,
  Milestone,
  PhoneCall,
  Presentation,
  Route,
  ScanLine,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'

const registry = {
  Circle,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  ClipboardCheck,
  Cog,
  Cpu,
  Crown,
  Factory,
  FileCheck2,
  Gauge,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Map,
  MessagesSquare,
  Microscope,
  Milestone,
  PhoneCall,
  Presentation,
  Route,
  ScanLine,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
  Wrench,
  Zap,
}

/**
 * Icon — renders a lucide icon by string name (e.g. name="Gauge").
 * Falls back to a neutral circle if the name is not registered above.
 */
export default function Icon({ name, className = '', strokeWidth = 1.6, ...props }) {
  const Cmp = registry[name] || Circle
  return <Cmp className={className} strokeWidth={strokeWidth} {...props} />
}
