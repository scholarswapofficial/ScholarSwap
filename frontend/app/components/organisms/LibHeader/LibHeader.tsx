"use client";

import "./LibHeader.scss";
import { LIB_HEADER_DATA } from "@/constant/library/library";

type Props = {
  filters: any;
  setFilters: (val: any) => void;
  search: string;
  setSearch: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
};

const LibHeader = ({
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
    <div className="lib-header">
      {/* 🔷 Title */}
      <h2 className="lib-header__title">{LIB_HEADER_DATA.title}</h2>

      {/* 🔷 Filters */}
      <div className="lib-header__filters">
        {Object.entries(LIB_HEADER_DATA.filters).map(([key, values]) => (
          <select
            key={key}
            className="lib-header__select"
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
      <div className="lib-header__search-sort">
        {/* Search */}
        <div className="lib-header__search">
          <input
            type="text"
            placeholder="Search for notes, assignments, or PYQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="lib-header__sort">
          <span>Sort By:</span>

          <select
            className="lib-header__select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {LIB_HEADER_DATA.sortOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LibHeader;