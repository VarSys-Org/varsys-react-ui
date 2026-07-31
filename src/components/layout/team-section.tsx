import { Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TeamMember {
  name: string
  title: string
  avatar: string
  twitter?: string
  linkedin?: string
}

const defaultTeam: TeamMember[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Martiana dialan",
    title: "Product designer",
  },
  {
    avatar:
      "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Micheal colorand",
    title: "Software engineer",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Brown Luis",
    title: "Full stack engineer",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Lysa sandiago",
    title: "Head of designers",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Daniel martin",
    title: "Product designer",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Vicky tanson",
    title: "Product manager",
  },
]

export function TeamSection({
  team = defaultTeam,
  title = "Meet our team",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  className,
}: {
  team?: TeamMember[]
  title?: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((item, idx) => (
              <li className="flex items-center gap-4" key={idx}>
                <div className="h-24 w-24 flex-none">
                  <img
                    alt={item.name}
                    className="h-full w-full rounded-full object-cover"
                    src={item.avatar}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-primary">{item.title}</p>
                  <div className="mt-3 flex gap-4 text-muted-foreground">
                    {item.twitter && (
                      <a
                        aria-label={`${item.name} on Twitter`}
                        className="duration-150 hover:text-foreground"
                        href={item.twitter}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {item.linkedin && (
                      <a
                        aria-label={`${item.name} on LinkedIn`}
                        className="duration-150 hover:text-foreground"
                        href={item.linkedin}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
