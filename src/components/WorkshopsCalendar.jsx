import React, { useMemo } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const sampleEvents = [
  { date: '2025-09-07', title: 'Composting 101', time: '10:00 AM' },
  { date: '2025-09-14', title: 'Herb Garden Basics', time: '11:00 AM' },
  { date: '2025-09-21', title: 'Seed Saving Workshop', time: '2:00 PM' },
  { date: '2025-09-28', title: 'Urban Beekeeping Intro', time: '12:00 PM' },
];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const startDay = new Date(firstDay);
  const dayOfWeek = firstDay.getDay();
  startDay.setDate(firstDay.getDate() - dayOfWeek);
  const weeks = [];
  let current = new Date(startDay);
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export default function WorkshopsCalendar() {
  const today = new Date();
  const displayYear = today.getFullYear();
  const displayMonth = today.getMonth();

  const weeks = useMemo(() => getMonthMatrix(displayYear, displayMonth), [displayYear, displayMonth]);
  const eventsByDate = useMemo(() => {
    const map = new Map();
    (sampleEvents || []).forEach((e) => map.set(e.date, e));
    return map;
  }, []);

  const monthName = today.toLocaleString(undefined, { month: 'long' });

  return (
    <section id="calendar" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Workshops & Events</h2>
              <p className="text-sm text-stone-600">{monthName} {displayYear}</p>
            </div>
          </div>
          <a
            href="#join"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-800"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-7 text-sm text-stone-600">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
            <div key={d} className="px-3 py-2 font-medium">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px rounded-lg overflow-hidden border border-stone-200 bg-stone-200">
          {weeks.flat().map((date, idx) => {
            const inMonth = date.getMonth() === displayMonth;
            const key = date.toISOString().slice(0, 10);
            const event = eventsByDate.get(key);
            const isToday = key === new Date().toISOString().slice(0, 10);

            return (
              <div key={idx} className={`min-h-[94px] bg-white p-2 ${!inMonth ? 'bg-stone-50 text-stone-400' : ''} ${isToday ? 'ring-2 ring-emerald-600' : ''}`}>
                <div className="flex items-start justify-between">
                  <span className={`text-xs ${inMonth ? 'text-stone-700' : 'text-stone-400'}`}>{date.getDate()}</span>
                  {event && (
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  )}
                </div>
                {event && (
                  <div className="mt-2 rounded-md bg-emerald-50 border border-emerald-200 p-2">
                    <div className="font-medium text-emerald-900 text-xs leading-snug">{event.title}</div>
                    <div className="flex items-center gap-1 text-emerald-800 text-[11px] mt-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-sm text-stone-600">
          Want to host or request a workshop? Email us at <a className="text-emerald-700" href="mailto:hello@urbanfarmcoop.local">hello@urbanfarmcoop.local</a>.
        </div>
      </div>
    </section>
  );
}
