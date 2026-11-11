import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import desk from "@/assets/cozy-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keri Gagnow — CS + Data Science Portfolio" },
      { name: "description", content: "Keri Gagnow, CS + Data Science student at the University of St. Thomas. Projects, skills and a cozy desk to explore." },
      { property: "og:title", content: "Keri Gagnow — CS + Data Science Portfolio" },
      { property: "og:description", content: "Projects, skills and a cozy desk to explore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const greetings = ["Hi there!", "Bonjour !", "Welcome in!", "Hello, world."];

const hotspots = [
  { id: "laptop", x: 32, y: 42, label: "Laptop", note: "Where the debugging happens. Currently deep in algorithms, databases and computer architecture." },
  { id: "flute", x: 45, y: 75, label: "Flute", note: "Weekly flute lessons keep me practicing patience — a skill that transfers nicely to debugging." },
  { id: "oats", x: 63, y: 58, label: "Overnight oats", note: "Meal-prepped every week. Small systems that save time are my favorite kind." },
  { id: "mug", x: 80, y: 57, label: "Coffee", note: "Fuel for the daily campus commute and the early elliptical workout." },
  { id: "books", x: 92, y: 40, label: "Books", note: "Proud member of the Association of Women in Science and the French Club." },
];

const projects = [
  {
    emoji: "📊",
    title: "Mental Health Data Analysis",
    blurb: "Exploratory data analysis and visualization on mental health datasets for DASC360.",
    detail: "Extracted demographic trends and deployed interactive findings to showcase risk factor correlations.",
    tags: ["R", "Python", "Data Analysis"],
    link: "https://github.com/KeriGagnow/DASC360_FinalProject_GroupG",
  },
  {
    emoji: "🌱",
    title: "Sustainability Quiz",
    blurb: "An interactive, educational Java app about environmental sustainability.",
    detail: "Built with the Office of Sustainability Initiatives. Tracks user progress with a friendly interface and engaging content.",
    tags: ["Java", "GUI", "Sustainability"],
    link: "https://github.com/KeriGagnow/UST-Sustainability-Quiz",
  },
];

const highlights = [
  {
    emoji: "💼",
    tag: "Leadership",
    title: "Treasurer, Computer Science Club",
    text: "I manage the club's finances and budgets while building connections with tech alumni and fellow members. I'm also building a Python/SQL app that speeds up semester budget requests using past attendance data.",
  },
  {
    emoji: "✨",
    tag: "Hackathon",
    title: "Lovable SheBuilds AI Hackathon",
    text: "Took part in Lovable's SheBuilds AI Hackathon, building with AI alongside women in tech.",
  },
  {
    emoji: "🎟️",
    tag: "Selected",
    title: "Grace Hopper Celebration 2026",
    text: "Selected to attend GHC 2026, the world's largest gathering of women and non-binary technologists.",
  },
];

const skills: Record<string, string> = {
  Python: "Data wrangling and analysis in DASC360.",
  R: "Visualizations for the mental health project.",
  Java: "Built the Sustainability Quiz GUI.",
  SQL: "Normalized schemas in Database Design.",
  JavaScript: "Interactive bits on the web — like this page.",
  "HTML/CSS": "Layouts that feel like home.",
  "Machine Learning": "Models from my ML coursework.",
  "Data Mining": "Finding patterns in messy data.",
  "Statistical Modeling": "Applied Regression & Multivariate Analysis.",
  "Data Visualization": "Turning numbers into stories.",
  "Normalized DB Design": "Clean tables, happy queries.",
};

const coursework = [
  { title: "Data Science & Analytics", items: "Machine Learning, Multivariate Data Analysis, Applied Regression, Introductory Statistics II" },
  { title: "Software Engineering Core", items: "Algorithms, Data Structures, Object-Oriented Programming, Discrete Mathematics" },
  { title: "Systems & Architecture", items: "Database Design, Computer Architecture, Information Security" },
];

function Index() {
  const [g, setG] = useState(0);
  const [active, setActive] = useState<string | null>("laptop");
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [skill, setSkill] = useState<string | null>(null);
  const [found, setFound] = useState<Set<string>>(new Set(["laptop"]));

  useEffect(() => {
    const t = setInterval(() => setG((i) => (i + 1) % greetings.length), 2600);
    return () => clearInterval(t);
  }, []);

  const spot = hotspots.find((h) => h.id === active);
  const open = (id: string) => {
    setActive(id);
    setFound((f) => new Set(f).add(id));
  };

  return (
    <main className="mx-auto max-w-5xl px-5 pb-20">
      <nav className="sticky top-3 z-20 mt-3 flex items-center justify-between rounded-full border-2 border-border bg-card/90 px-5 py-2 backdrop-blur">
        <a href="#top" className="font-display text-lg font-bold text-primary">kg.</a>
        <div className="flex gap-4 text-sm font-semibold text-muted-foreground">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#highlights" className="hover:text-primary">Highlights</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="grid items-center gap-10 pt-14 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p key={g} className="animate-pop-in font-hand text-3xl text-primary">{greetings[g]}</p>
          <h1 className="mt-1 text-5xl font-bold leading-tight md:text-6xl">I'm Keri Gagnow.</h1>
          <p className="mt-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">
            CS + Data Science @ University of St. Thomas
          </p>
          <p className="mt-5 text-lg text-muted-foreground">
            A long-time passion for creating innovative solutions for our ever-changing modern world —
            ideally with a warm drink nearby.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/resume-keri-gagnow.pdf" download className="card-cozy card-cozy-hover bg-primary px-5 py-3 font-bold text-primary-foreground">
              Download Resume
            </a>
            <a href="https://github.com/KeriGagnow" target="_blank" rel="noreferrer" className="card-cozy card-cozy-hover px-5 py-3 font-bold">
              GitHub ↗
            </a>
          </div>
        </div>

        <div>
          <div className="card-cozy relative overflow-hidden p-2">
            <img src={desk} alt="Keri's cozy desk with laptop, flute, oats and coffee" width={1280} height={960} className="rounded-2xl" />
            {hotspots.map((h) => (
              <button
                key={h.id}
                onClick={() => open(h.id)}
                aria-label={h.label}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className={`absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-card font-bold shadow-lg transition hover:scale-125 ${
                  active === h.id ? "bg-primary text-primary-foreground" : found.has(h.id) ? "bg-secondary text-secondary-foreground" : "animate-floaty bg-accent text-accent-foreground"
                }`}
              >
                {found.has(h.id) ? "✓" : "?"}
              </button>
            ))}
            {active === "mug" && (
              <span className="animate-steam pointer-events-none absolute left-[80%] top-[45%] text-2xl">☁️</span>
            )}
          </div>
          {spot && (
            <div key={spot.id} className="animate-pop-in card-cozy mt-4 p-4">
              <p className="font-hand text-2xl text-primary">{spot.label}</p>
              <p className="text-sm">{spot.note}</p>
            </div>
          )}
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Click around my desk · {found.size}/{hotspots.length} found {found.size === hotspots.length && "— you know me now! 🎉"}
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pt-24">
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="font-hand text-2xl text-primary">passionate about technology, embraced by innovative solutions</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="card-cozy p-6">
            <p>
              I'm an undergraduate studying Computer Science and Data Science, currently diving deep into
              algorithms, database design, and computer architecture. Beyond the terminal, I serve as Treasurer of the
              Computer Science Club, focused on technical growth and community building.
            </p>
          </div>
          <div className="card-cozy -rotate-1 bg-accent p-6 text-accent-foreground">
            <p>
              Balancing a rigorous curriculum, a daily commute and campus life takes real discipline. I'm a proud
              member of the Association of Women in Science and the French Club. Off the keyboard: early elliptical
              workouts, weekly overnight oats, and flute practice.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="pt-24">
        <h2 className="text-4xl font-bold">Highlights</h2>
        <p className="font-hand text-2xl text-primary">a few things I'm proud of</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <article key={h.title} className={`card-cozy card-cozy-hover p-6 ${i === 1 ? "md:rotate-1" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{h.emoji}</span>
                <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">{h.tag}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pt-24">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-muted-foreground">Tap a card to peek inside.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              onClick={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))}
              className="card-cozy card-cozy-hover flex min-h-64 cursor-pointer flex-col p-6"
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <p key={String(!!flipped[i])} className="animate-pop-in mt-2 flex-1 text-muted-foreground">
                {flipped[i] ? p.detail : p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">{t}</span>
                ))}
                <a href={p.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="ml-auto font-bold text-primary hover:underline">
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pt-24">
        <h2 className="text-4xl font-bold">Skills & coursework</h2>
        <p className="text-muted-foreground">Click a skill to see where I've used it.</p>
        <div className="card-cozy mt-6 p-6">
          <div className="flex flex-wrap gap-2">
            {Object.keys(skills).map((s) => (
              <button
                key={s}
                onClick={() => setSkill(s)}
                className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition hover:-translate-y-0.5 ${
                  skill === s ? "animate-wiggle border-primary bg-primary text-primary-foreground" : "border-border bg-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <p key={skill ?? "none"} className="animate-pop-in mt-5 font-hand text-2xl text-primary">
            {skill ? `${skill}: ${skills[skill]}` : "↑ pick one!"}
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {coursework.map((c) => (
            <details key={c.title} className="card-cozy card-cozy-hover group p-5">
              <summary className="cursor-pointer list-none font-display text-lg font-bold">
                {c.title} <span className="inline-block transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{c.items}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="pt-24 text-center">
        <p className="font-hand text-3xl text-primary">thanks for stopping by ☕</p>
        <p className="mt-1 text-sm text-muted-foreground">© {new Date().getFullYear()} Keri Gagnow</p>
      </footer>
    </main>
  );
}
