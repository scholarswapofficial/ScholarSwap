"use client";

import "./LibraryHeader.scss";
import { LIBRARY_HEADER } from "@/constant/library/library";

type Props = {
  filters: any;
  setFilters: (val: any) => void;
  search: string;
  setSearch: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
};

const LibraryHeader = ({
  filters,
  setFilters,
  search,
  setSearch,
  sort,
  setSort,
}: Props) => {
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="library-header">
      {/* 🔷 Title */}
      <div className="library-header__top">
        <h2>{LIBRARY_HEADER.title}</h2>
        <p>{LIBRARY_HEADER.subtitle}</p>
      </div>

      {/* 🔷 Filters */}
      <div className="library-header__filters">
        {Object.entries(LIBRARY_HEADER.filters).map(([key, values]) => (
          <select
            key={key}
            className="library-header__select"
            value={filters[key]}
            onChange={(e) => handleFilterChange(key, e.target.value)}
          >
            {values.map((item: string) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        ))}
      </div>

      {/* 🔷 Search + Sort */}
      <div className="library-header__search-sort">
        <div className="library-header__search">
          <input
            type="text"
            placeholder="Search books by title, author, subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="library-header__sort">
          <span>Sort By:</span>
          <select
            className="library-header__select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {LIBRARY_HEADER.sortOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeader;