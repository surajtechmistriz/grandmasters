import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

export default function EventPage() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FBFBFD] pb-20">
      {/* MINIMAL HERO SECTION */}
      <header className="relative pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D0252D]">
            Curated Gatherings
          </span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Event <span className="text-gray-300">Hub.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            A minimalist directory for the next generation of tech, design, and
            startup innovators.
          </p>

          {/* REFINED SEARCH */}
          <div className="mt-10 relative max-w-lg mx-auto group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 group-focus-within:text-[#D0252D] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for your next experience..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none shadow-sm transition-all focus:ring-4 focus:ring-red-500/5 focus:border-[#D0252D]/30 placeholder:text-gray-400"
            />
          </div>
        </div>
      </header>

      {/* CONTENT GRID */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Featured</h2>
            <p className="text-sm text-slate-400 mt-1">
              Explore what's happening soon
            </p>
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-md">
            {filteredEvents.length} Results
          </span>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-medium italic">
              No events found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
