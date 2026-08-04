const projects = [
  {
    title: "Marshall's Tailoring",
    description: "A custom tailoring service website for my parents tailoring shop. Features include a gallery of past works, and a contact form for inquiries.",
    tags: ["Next.js", "Tailwind CSS", "Resend", "Cloudflare Turnstile", "Typescript", "HTML5"],
    link: "https://marshallstailoring.com/",
  },
  {
    title: "Wilmington Mental Health",
    description: "A healthcare platform I built for a mental health clinic, with patient resources, service overviews, and a streamlined contact flow to make it easier for people to reach out for support.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Resend", "Cloudflare Turnstile", "Typescript", "HTML5"],
    link: "https://wilmingtonmentalhealth.com/",
  },
  {
    title: "Wilmington Medical Care",
    description: "A medical service website I developed with patient trust and accessibility in mind, laying out primary care services, clinic locations, and provider expertise clearly.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Resend", "Cloudflare Turnstile", "Typescript", "HTML5"],
    link: "https://wilmingtonmedicalcare.com/",
  },
  {
    title: "Wilmington Trauma Center",
    description: "A site I built for a nonprofit focused on trauma-informed care, designed around accessibility and clear pathways for individuals and families to request appointments and find support.",
    tags: ["Next.js", "Tailwind CSS", "Resend", "Cloudflare Turnstile", "Typescript", "ReactJS", "HTML5"],
    link: "https://wilmingtontraumacenter.org/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            Projects
          </h2>
        </div>

        <div className="flex flex-col border-t border-border/50">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-border/50 transition-colors duration-300 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xs font-mono text-accent tracking-widest shrink-0 md:w-16 md:pt-2">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-cream/90 mb-3 group-hover:text-cream transition-colors duration-300 flex items-center">
                  {project.title}
                  <svg
                    className="w-5 h-5 ml-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </h3>

                <p className="text-muted text-sm md:text-base leading-relaxed mb-4 md:w-4/5">
                  {project.description}
                </p>

                <div className="text-xs uppercase tracking-[0.2em] text-muted/50 font-medium">
                  {project.tags.join(" / ")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
