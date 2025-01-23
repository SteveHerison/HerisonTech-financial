"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(200, 80%, 50%)", // Nova cor para Chrome
  },
  safari: {
    label: "Safari",
    color: "hsl(120, 60%, 50%)", // Nova cor para Safari
  },
  firefox: {
    label: "Firefox",
    color: "hsl(30, 60%, 50%)", // Nova cor para Firefox
  },
  edge: {
    label: "Edge",
    color: "hsl(150, 60%, 50%)", // Nova cor para Edge
  },
  other: {
    label: "Other",
    color: "hsl(300, 60%, 50%)", // Nova cor para Other
  },
} satisfies ChartConfig;

export function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full text-white border-none shadow-xl bg-blue-950">
      <CardHeader className="items-center p-2">
        <CardDescription className="text-white">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full p-0 px-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-auto max-h-[300px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={0}
              strokeWidth={0} // Aumentando a largura da borda
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-foreground font-custom"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className=" font-custom"
                        >
                          of $975 limit
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
