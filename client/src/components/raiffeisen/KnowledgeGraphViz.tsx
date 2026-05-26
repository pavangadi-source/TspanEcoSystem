import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { knowledgeGraphNodes, knowledgeGraphEdges } from "@/lib/raiffeisen-mock-data";

const GROUP_COLORS: Record<string, { fill: string; ring: string; text: string }> = {
  bank: { fill: "fill-amber-400", ring: "stroke-amber-500", text: "text-neutral-900" },
  person: { fill: "fill-neutral-900", ring: "stroke-neutral-900", text: "text-white" },
  client: { fill: "fill-sky-100", ring: "stroke-sky-500", text: "text-sky-900" },
  portfolio: { fill: "fill-violet-100", ring: "stroke-violet-500", text: "text-violet-900" },
  asset: { fill: "fill-emerald-100", ring: "stroke-emerald-500", text: "text-emerald-900" },
  esg: { fill: "fill-lime-100", ring: "stroke-lime-600", text: "text-lime-900" },
  risk: { fill: "fill-rose-100", ring: "stroke-rose-500", text: "text-rose-900" },
  data: { fill: "fill-cyan-100", ring: "stroke-cyan-500", text: "text-cyan-900" },
  value: { fill: "fill-amber-100", ring: "stroke-amber-500", text: "text-amber-900" },
  exec: { fill: "fill-neutral-200", ring: "stroke-neutral-700", text: "text-neutral-900" },
  strategy: { fill: "fill-indigo-100", ring: "stroke-indigo-500", text: "text-indigo-900" },
};

export function KnowledgeGraphViz() {
  const [active, setActive] = useState<string | null>(null);
  const nodeMap = useMemo(() => Object.fromEntries(knowledgeGraphNodes.map((n) => [n.id, n])), []);
  const W = 1000;
  const H = 560;
  const px = (v: number, range: number) => (v / 100) * range;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white p-4 shadow-sm" data-testid="knowledge-graph">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-neutral-200/40 blur-3xl" />
      <svg viewBox={`0 0 ${W} ${H}`} className="relative h-[520px] w-full">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" />

        {knowledgeGraphEdges.map((e, i) => {
          const from = nodeMap[e.from];
          const to = nodeMap[e.to];
          if (!from || !to) return null;
          const x1 = px(from.x, W);
          const y1 = px(from.y, H);
          const x2 = px(to.x, W);
          const y2 = px(to.y, H);
          const activeEdge = active && (active === e.from || active === e.to);
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={activeEdge ? "#f59e0b" : "#cbd5e1"}
              strokeWidth={activeEdge ? 2.2 : 1.2}
              strokeDasharray={activeEdge ? "0" : "4 4"}
              markerEnd="url(#arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
            />
          );
        })}

        {knowledgeGraphNodes.map((n, i) => {
          const c = GROUP_COLORS[n.group] ?? GROUP_COLORS.data;
          const cx = px(n.x, W);
          const cy = px(n.y, H);
          const isActive = active === n.id;
          const r = n.group === "bank" ? 44 : n.group === "person" ? 36 : 30;
          return (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.03, type: "spring", stiffness: 110 }}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
            >
              <circle
                cx={cx}
                cy={cy}
                r={r + (isActive ? 6 : 0)}
                className={`${c.fill} ${c.ring}`}
                strokeWidth={isActive ? 3 : 1.5}
                opacity={0.95}
              />
              <foreignObject x={cx - 70} y={cy + r + 4} width={140} height={40}>
                <div className="text-center text-[11px] font-semibold leading-tight text-neutral-800">
                  {n.label}
                </div>
              </foreignObject>
            </motion.g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
        {Object.entries(GROUP_COLORS).map(([k, v]) => (
          <span key={k} className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">
            <svg width="10" height="10"><circle cx="5" cy="5" r="4" className={`${v.fill} ${v.ring}`} strokeWidth="1.5" /></svg>
            <span className="capitalize text-neutral-600">{k}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
