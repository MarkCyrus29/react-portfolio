import { Mail, ArrowRight } from 'lucide-react';

const contacts = [
  {
    id: 'github-link',
    label: 'GitHub',
    displayText: 'MarkCyrus29',
    href: 'https://github.com/MarkCyrus29',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'linkedin-link',
    label: 'LinkedIn',
    displayText: 'Mark Cyrus Serrano',
    href: 'https://www.linkedin.com/in/markcyrus-serrano/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email-link',
    label: 'Email',
    displayText: 'hi@markcyruss.com',
    href: 'mailto:hi@markcyruss.com',
    icon: (
      <Mail className="w-5 h-5" />
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-40 bg-black h-screen w-full overflow-hidden">
      <img
        src="/change.jpg"
        alt="DJO — change single cover art"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
        draggable="false"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-end px-8 md:px-16 lg:px-24">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-widest uppercase text-red! mb-3 ">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Contact Me
            </h2>
          </div>

          <div className="flex flex-col border-t border-border/30">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                id={contact.id}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between py-6 border-b border-border/30  transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="text-muted group-hover:text-cream transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-1">
                      {contact.label}
                    </span>
                    <span className="text-base font-medium text-cream/90 group-hover:text-cream transition-colors duration-300">
                      {contact.displayText}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-red! opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
