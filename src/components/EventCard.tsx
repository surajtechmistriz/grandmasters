// components/EventCard.tsx
import { EventItem } from "../data/events";

interface Props {
  event: EventItem;
}

export default function EventCard({ event }: Props) {
  return (
<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#ECECEC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D0252D]/20 hover:shadow-[0_20px_40px_rgba(208,37,45,0.08)]">

  {/* Top Accent */}
  <div className="h-1 w-full bg-[#D0252D]" />

  <div className="flex flex-1 flex-col p-5">

    {/* Header */}
    <div className="flex items-start justify-between gap-3">
      <span className="rounded-full bg-[#D0252D]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#D0252D]">
        {event.tag}
      </span>

      <span className="text-xs font-medium text-gray-400">
        {event.date}
      </span>
    </div>

    {/* Title */}
    <h2 className="mt-4 text-lg font-bold leading-snug text-[#333] transition-colors duration-200 group-hover:text-[#D0252D]">
      {event.title}
    </h2>

    {/* Divider */}
    <div className="mt-4 h-px bg-[#F0F0F0]" />

    {/* Description */}
    <p className="mt-4 flex-1 text-sm leading-6 text-gray-500 line-clamp-4">
      {event.description}
    </p>

    {/* Footer */}
    <div className="mt-5 flex items-center justify-between border-t border-[#F3F3F3] pt-4">

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <svg
          className="h-4 w-4"
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

      <a
        href={event.website}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-[#D0252D] transition-all hover:gap-2"
      >
        View
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