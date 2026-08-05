import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export function ProgramPage({
  eyebrow,
  title,
  description,
  image,
  benefits,
  idealFor,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  benefits: string[]
  idealFor: string
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} description={description}>
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <figure className="hard-shadow-lg relative aspect-[4/3] overflow-hidden border-2 border-[var(--ink)] bg-[var(--muted-paper)] lg:sticky lg:top-28 lg:col-span-6">
            <Image
              src={image}
              alt={`${title} at Plus Fitness Andheri`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
            />
            <figcaption className="font-display absolute bottom-0 left-0 bg-[var(--acid)] px-4 py-3 text-xs">
              Andheri training floor
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:pl-6">
            <p className="font-display text-xs text-[var(--signal-red)]">Who it is for / 01</p>
            <h2 className="font-display mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Training that meets you where you are
            </h2>
            <p className="mt-6 border-l-4 border-[var(--acid)] pl-5 text-lg font-medium leading-relaxed opacity-65">
              {idealFor}
            </p>

            <ol className="mt-9 border-t-2 border-[var(--ink)]">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="grid grid-cols-[42px_1fr] items-center gap-4 border-b-2 border-[var(--ink)] py-4"
                >
                  <span className="flex size-10 items-center justify-center bg-[var(--acid)]">
                    <Check className="size-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm">
                    0{index + 1} / {benefit}
                  </span>
                </li>
              ))}
            </ol>

            <Link
              href="/contact"
              className="btn-press focus-ring hard-shadow font-display mt-9 flex min-h-13 items-center justify-between border-2 border-[var(--ink)] bg-[var(--acid)] px-5 text-sm"
            >
              Book a free trial
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
