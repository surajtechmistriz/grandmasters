import { EventItem } from "../data/events";

interface Props {
  event: EventItem;
}

export default function EventCard({ event }: Props) {
  return (
   <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#ECECEC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D0252D]/20 hover:shadow-[0_20px_40px_rgba(208,37,45,0.08)]">

  {/* Status Badge */}
  <div className="absolute top-4 right-4 z-10">
    {event.status === "Live" ? (
      <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700">
        ● Live
      </span>
    ) : (
      <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
        Upcoming
      </span>
    )}
  </div>

  {/* Accent Line */}
  <div className="h-1 w-full bg-[#D0252D]" />

  <div className="flex flex-1 flex-col p-5">

    {/* Tag */}
    <div>
      <span className="rounded-full bg-[#D0252D]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#D0252D]">
        {event.tag}
      </span>
    </div>

    {/* Title */}
    <h2 className="mt-4 text-lg font-bold leading-snug text-[#333] transition-colors duration-200 group-hover:text-[#D0252D]">
      {event.title}
    </h2>

    {/* Description */}
    <p className="mt-3 flex-1 text-sm leading-6 text-gray-500 line-clamp-4">
      {event.description}
    </p>

    {/* Location */}
    <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <span>{event.location}</span>
    </div>

    {/* Date */}
    <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      <span>{event.date}</span>
    </div>

    {/* CTA */}
    <div className="mt-5 border-t border-[#F3F3F3] pt-4">
      <a
        href={event.website}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D0252D] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b71f27]"
      >
        Explore Summit

        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
  );
}