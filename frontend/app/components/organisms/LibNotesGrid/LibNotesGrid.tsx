"use client";

import "./LibNotesGrid.scss";
import { LIB_CARDS } from "@/constant/library/library";
import LibNoteCard from "@/components/molecules/LibNoteCard/LibNoteCard";

const LibNotesGrid = () => {
  return (
    <div className="lib-grid">
      {LIB_CARDS.map((item) => (
        <LibNoteCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default LibNotesGrid;