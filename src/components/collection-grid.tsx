import React from "react";
import CollectionCard from "./collection-card";
import { collections } from "@/lib/data/collections";

const CollectionsGrid: React.FC = () => {
  const collectionsToRender = collections.slice(0, 3);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {collectionsToRender.map((col) => (
        <CollectionCard key={col.id} collection={col} />
      ))}
    </div>
  );
};

export default CollectionsGrid;
