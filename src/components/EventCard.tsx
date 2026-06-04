import { EventItem } from "../data/events";

interface Props {
  event: EventItem;
}

export default function EventCard({ event }: Props) {
  return (
    <div
      className="group rounded-2xl border bg-white p-5 transition hover:shadow-2xl hover:-translate-y-1 duration-300"
      style={{ borderColor: "#E9E9E9" }}
    >
      {/* TAG */}
      <div className="flex justify-between items-center">
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{
            backgroundColor: "#E9E9E9",
            color: "oklch(0.446 0.03 256.802)",
          }}
        >
          {event.tag}
        </span>

        <span className="text-xs text-gray-400">{event.date}</span>
      </div>

      {/* TITLE */}
      <h2
        className="mt-3 text-lg font-bold group-hover:opacity-80 transition"
        style={{ color: "oklch(0.446 0.03 256.802)" }}
      >
        {event.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {event.description}
      </p>

      {/* LOCATION */}
      <div className="mt-3 text-xs text-gray-500">
        📍 {event.location}
      </div>

      {/* CTA */}
      <a
        href={event.website}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center w-full rounded-xl py-2 text-white font-medium transition hover:opacity-90"
        style={{ backgroundColor: "#D0252D" }}
      >
        View Event →
      </a>
    </div>
  );
}