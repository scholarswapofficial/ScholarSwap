"use client";

import React, { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

import "@/styles/sections/admin/admin-event-table.scss";

const mockEvents = [
  {
    id: 1,
    title: "CodeFest 2025",
    category: "CODING",
    mode: "ONLINE",
    status: "APPROVED",
    views: 12450,
    clicks: 3180,
    date: "May 10, 2025",
    poster:
      "https://placehold.co/80x80",
  },

  {
    id: 2,
    title: "AI & ML Workshop",
    category: "WORKSHOP",
    mode: "HYBRID",
    status: "PENDING",
    views: 9420,
    clicks: 2114,
    date: "Jun 05, 2025",
    poster:
      "https://placehold.co/80x80",
  },

  {
    id: 3,
    title: "Web Dev Hackathon",
    category: "HACKATHON",
    mode: "ONLINE",
    status: "DRAFT",
    views: 5610,
    clicks: 1092,
    date: "Jul 15, 2025",
    poster:
      "https://placehold.co/80x80",
  },

  {
    id: 4,
    title: "Cyber Security Webinar",
    category: "WEBINAR",
    mode: "ONLINE",
    status: "APPROVED",
    views: 13820,
    clicks: 4510,
    date: "Aug 21, 2025",
    poster:
      "https://placehold.co/80x80",
  },
];

const AdminEventTable = () => {
  const [search, setSearch] =
    useState("");

  const filteredEvents =
    mockEvents.filter((event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const getStatusClass = (
    status: string
  ) => {
    switch (status) {
      case "APPROVED":
        return "approved";

      case "PENDING":
        return "pending";

      case "REJECTED":
        return "rejected";

      default:
        return "draft";
    }
  };

  return (
    <div className="admin-event-table">
      {/* ---------------------------------------------------------- */}
      {/*                         TABLE HEADER                       */}
      {/* ---------------------------------------------------------- */}

      <div className="admin-event-table__header">
        <div className="admin-event-table__title">
          <h2>All Events</h2>

          <p>
            Manage platform events
          </p>
        </div>

        <div className="admin-event-table__search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*                           TABLE                            */}
      {/* ---------------------------------------------------------- */}

      <div className="admin-event-table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Event</th>

              <th>Category</th>

              <th>Mode</th>

              <th>Status</th>

              <th>Views</th>

              <th>Clicks</th>

              <th>Date</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map(
              (event) => (
                <tr key={event.id}>
                  <td>
                    <div className="admin-event-table__event">
                      <img
                        src={
                          event.poster
                        }
                        alt={
                          event.title
                        }
                      />

                      <div>
                        <h4>
                          {
                            event.title
                          }
                        </h4>

                        <span>
                          {
                            event.category
                          }
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    {event.category}
                  </td>

                  <td>
                    {event.mode}
                  </td>

                  <td>
                    <span
                      className={`status ${getStatusClass(
                        event.status
                      )}`}
                    >
                      {
                        event.status
                      }
                    </span>
                  </td>

                  <td>
                    {event.views.toLocaleString()}
                  </td>

                  <td>
                    {event.clicks.toLocaleString()}
                  </td>

                  <td>
                    {event.date}
                  </td>

                  <td>
                    <div className="admin-event-table__actions">
                      <button>
                        <Eye
                          size={
                            18
                          }
                        />
                      </button>

                      <button>
                        <Pencil
                          size={
                            18
                          }
                        />
                      </button>

                      <button className="delete">
                        <Trash2
                          size={
                            18
                          }
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEventTable;