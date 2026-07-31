import type React from "react"
import { cn } from "@/lib/utils"

export interface IntegrationItem {
  title: string
  desc: string
  icon: React.ReactNode
  connected?: boolean
}

const defaultIntegrations: IntegrationItem[] = [
  {
    title: "Figma",
    desc: "Design handoff and collaboration",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1693 48C18.08 48 21.254 44.4159 21.254 39.9999V31.9999H14.1693C10.2586 31.9999 7.08459 35.5839 7.08459 39.9999C7.08459 44.4159 10.2586 48 14.1693 48Z" fill="#0ACF83" />
        <path d="M7.08459 23.9999C7.08459 19.5839 10.2586 15.9999 14.1693 15.9999H21.254V31.9998H14.1693C10.2586 32 7.08459 28.4159 7.08459 23.9999Z" fill="#A259FF" />
        <path d="M7.08459 8.00006C7.08459 3.58406 10.2586 0 14.1693 0H21.254V15.9999H14.1693C10.2586 15.9999 7.08459 12.4161 7.08459 8.00006Z" fill="#F24E1E" />
        <path d="M21.2535 0H28.3382C32.2489 0 35.4229 3.58406 35.4229 8.00006C35.4229 12.4161 32.2489 15.9999 28.3382 15.9999H21.2535V0Z" fill="#FF7262" />
        <path d="M35.4229 23.9999C35.4229 28.4159 32.2489 32 28.3382 32C24.4275 32 21.2535 28.4159 21.2535 23.9999C21.2535 19.5839 24.4275 15.9999 28.3382 15.9999C32.2489 15.9999 35.4229 19.5839 35.4229 23.9999Z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    desc: "Version control and CI/CD",
    icon: (
      <svg className="h-10 w-10 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 1C10.7 1 0 11.7 0 25c0 10.6 6.9 19.6 16.4 22.8 1.2.2 1.6-.5 1.6-1.1 0-.6 0-2.1 0-4.1-6.7 1.5-8.1-3.2-8.1-3.2-1.1-2.8-2.7-3.5-2.7-3.5-2.2-1.5.2-1.5.2-1.5 2.4.2 3.7 2.5 3.7 2.5 2.1 3.7 5.6 2.6 7 2 .2-1.6.8-2.6 1.5-3.2-5.3-.6-10.9-2.7-10.9-11.9 0-2.6.9-4.8 2.5-6.5-.3-.6-1.1-3.1.2-6.5 0 0 2-.7 6.7 2.5 2-.6 4.1-.9 6.2-.9s4.2.3 6.2.9c4.7-3.2 6.7-2.5 6.7-2.5 1.3 3.4.5 5.9.2 6.5 1.6 1.7 2.5 3.9 2.5 6.5 0 9.3-5.6 11.3-11 11.9.9.8 1.6 2.3 1.6 4.7 0 3.4 0 6.1 0 6.9 0 .7.4 1.4 1.7 1.1C41.1 44.6 48 35.6 48 25 48 11.7 37.3 1 24 1z" />
      </svg>
    ),
  },
  {
    title: "Discord",
    desc: "Community and support",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.634 8.31115C37.5747 6.90738 34.294 5.87315 30.8638 5.28081C30.8013 5.26937 30.7389 5.29794 30.7067 5.35508C30.2848 6.10551 29.8175 7.08451 29.4902 7.854C25.8008 7.30166 22.1304 7.30166 18.5166 7.854C18.1893 7.06741 17.705 6.10551 17.2811 5.35508C17.249 5.29985 17.1866 5.27128 17.1241 5.28081C13.6958 5.87126 10.4151 6.90549 7.35387 8.31115C7.32737 8.32257 7.30465 8.34164 7.28958 8.36638C1.06678 17.6631 -0.6379 26.7313 0.19836 35.6871C0.202144 35.7309 0.22674 35.7728 0.260796 35.7995C4.36642 38.8145 8.34341 40.645 12.2466 41.8582C12.309 41.8773 12.3752 41.8544 12.415 41.803C13.3383 40.5421 14.1613 39.2127 14.867 37.8146C14.9086 37.7327 14.8688 37.6356 14.7837 37.6032C13.4783 37.108 12.2352 36.5042 11.0395 35.8185C10.9449 35.7633 10.9373 35.628 11.0243 35.5632C11.2759 35.3747 11.5276 35.1785 11.7679 34.9804C11.8114 34.9443 11.872 34.9366 11.9231 34.9595C19.7786 38.546 28.2831 38.546 36.0459 34.9595C36.097 34.9347 36.1576 34.9424 36.203 34.9785C36.4433 35.1766 36.6949 35.3747 36.9484 35.5632C37.0354 35.628 37.0298 35.7633 36.9352 35.8185C35.7394 36.5175 34.4964 37.108 33.189 37.6013C33.1039 37.6337 33.0661 37.7327 33.1077 37.8146C33.8285 39.2107 34.6515 40.5402 35.5578 41.8011C35.5957 41.8544 35.6637 41.8773 35.7262 41.8582C39.6483 40.645 43.6252 38.8145 47.7309 35.7995C47.7668 35.7728 47.7895 35.7328 47.7933 35.689C48.7942 25.3351 46.117 16.3413 40.6964 8.36827C40.6832 8.34164 40.6605 8.32257 40.634 8.31115ZM16.04 30.234C13.675 30.234 11.7263 28.0627 11.7263 25.3961C11.7263 22.7295 13.6372 20.5582 16.04 20.5582C18.4617 20.5582 20.3916 22.7486 20.3538 25.3961C20.3538 28.0627 18.4428 30.234 16.04 30.234ZM31.9895 30.234C29.6245 30.234 27.6758 28.0627 27.6758 25.3961C27.6758 22.7295 29.5867 20.5582 31.9895 20.5582C34.4113 20.5582 36.3411 22.7486 36.3033 25.3961C36.3033 28.0627 34.4113 30.234 31.9895 30.234Z" fill="#5865F2" />
      </svg>
    ),
  },
]

export function IntegrationsCard({
  integrations = defaultIntegrations,
  title = "Integrations",
  description = "Extend and automate your workflow by using integrations for your favorite tools.",
  className,
}: {
  integrations?: IntegrationItem[]
  title?: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, idx) => (
            <li
              className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
              key={idx}
            >
              <div className="flex items-start justify-between gap-4 p-4">
                <div className="space-y-2">
                  {item.icon}
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <button
                  className="shrink-0 rounded-lg border px-3 py-2 text-sm text-foreground transition-colors duration-150 hover:bg-muted"
                  type="button"
                >
                  {item.connected ? "Connected" : "Connect"}
                </button>
              </div>
              <div className="border-t px-4 py-5 text-right">
                <a
                  className="text-sm font-medium text-primary hover:text-primary/80"
                  href="#integrations"
                >
                  View integration
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
