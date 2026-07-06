# VarSys Dashboard Components

Reusable bento-grid dashboard components for VarSys frontend projects.

## Usage

```bash
# Copy into your project
cp -r packages/varsys-ui/dashboard your-project/src/components/ui/
```

In your `src/index.css`, import the theme:

```css
@import "./components/ui/theme.css";
:root {
  --brand-primary: #YOUR_COLOR;
  --brand-rgb: R, G, B;
}
```

Compose a dashboard:

```tsx
import { BentoGrid, PanelShell, StatCard, AreaChartWidget } from "./components/ui";
import { DollarSign, TrendingUp } from "lucide-react";

export function MyDashboard() {
  return (
    <BentoGrid>
      <StatCard label="Revenue" value="$12,430" change="+8%" icon={<DollarSign />}
        className="col-span-12 md:col-span-3 row-span-1" />
      <PanelShell title="Trend" className="col-span-12 lg:col-span-6 row-span-3">
        <AreaChartWidget data={myData} />
      </PanelShell>
    </BentoGrid>
  );
}
```

## Components

| Component | Purpose |
|-----------|---------|
| `BentoGrid` | 12-col x 6-row CSS grid wrapper |
| `PanelShell` | Card with border, header, gradient surface |
| `StatCard` | Icon + label + value + change |
| `MetricRow` | Label + value + unit row |
| `StatusDot` | Colored dot with glow |
| `AreaChartWidget` | Inline SVG sparkline area chart |
| `ThermometerBar` | Label + colored fill bar |
| `IndicatorTable` | Multi-column status table |
| `Badge` | Pill badge (success/danger/warning/info/primary) |
| `SplitColumn` | Two columns with vertical divider |
| `NavPills` | Rounded pill navigation chips |

## Styling

All components use CSS custom properties from `theme.css`.

Override `--brand-primary` and `--brand-rgb` in your project for the accent color.

Three themes: light (default), dark (`.dark`), aurora (`.aurora`).
