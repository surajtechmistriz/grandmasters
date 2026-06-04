// App.tsx or EventPage.tsx
import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
// import { events } from "./data/events";
// import EventCard from "./components/EventCard";

export default function EventPage() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.tag.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D0252D08,transparent_60%)]" />

        <div className="relative max-w-6xl   border-b border-[#EFEFEF] mx-auto px-6 pt-16 pb-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-[#D0252D]/15 bg-[#D0252D]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D0252D]">
              Legal • Compliance • Leadership
            </span>

            <h1 className="mt-8 text-3xl md:text-[43px] font-bold tracking-tight text-[#D0252D]">
              Premier Legal Events
            </h1>

            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-500 leading-relaxed">
              Explore flagship summits bringing together General Counsel,
              Compliance Officers, Risk Leaders and Industry Experts.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search summits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#E9E9E9] bg-white px-4 py-3 text-sm outline-none shadow-sm transition-all focus:border-[#D0252D] focus:ring-4 focus:ring-[#D0252D]/10"
              />

              <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#D0252D]/10 px-2.5 py-1 text-xs font-semibold text-[#D0252D]">
                {filteredEvents.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#333]">Upcoming Summits</h2>

            <p className="mt-1 text-sm text-gray-500">
              Industry conferences and networking opportunities.
            </p>
          </div>

          <div className="inline-flex items-center rounded-lg bg-[#D0252D] px-4 py-2 text-sm font-semibold text-white">
            {filteredEvents.length} Events
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#E5E5E5] py-14 text-center">
            <p className="text-gray-500">
              No events found matching your search.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-3 text-sm font-medium text-[#D0252D]"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
