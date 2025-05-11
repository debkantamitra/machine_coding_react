// IMPORTANT SUGGESTIONS:
// 1. Improve the quality of the code - immutability specially
// 2. unique id can be messed up
// 3. Try improving on re rendering the whole list every time

import React, { useState } from "react";
import styles from "./styles.module.css";
import structurePermanent from "./structure.json";
import Folder from "./components/Folder";
import { traverseAndAdd } from "./utils";

const traverseAndDelete = (structure, id) => {
  if (structure.length < 1) return structure;

  // TODO: check for immutability
  return structure.filter((item) => {
    if (item.isFolder && item.id !== id) {
      const returned = traverseAndDelete(item.children, id);

      item.children = returned;
    }

    return item.id !== id;
  });
};

const index = () => {
  const [structure, setStructure] = useState(structurePermanent);
  const [openFolderIds, setOpenFolderIds] = useState([]);

  const handleFolderToggle = (folderId) => {
    let updatedOpenFolderIds;

    if (openFolderIds.includes(folderId)) {
      updatedOpenFolderIds = openFolderIds.filter((item) => item !== folderId);
    } else {
      updatedOpenFolderIds = [...openFolderIds, folderId];
    }

    setOpenFolderIds(updatedOpenFolderIds);
  };

  const handleDelete = (id) => {
    const updatedStructure = traverseAndDelete(structure, id);

    setStructure(updatedStructure);
  };

  const handleCreateNewFile = (id, fileName) => {
    const updatedStructure = traverseAndAdd(structure, id, fileName, false);

    setStructure(updatedStructure);
  };

  const handleCreateNewFolder = (id, folderName) => {
    const updatedStructure = traverseAndAdd(structure, id, folderName, true);

    setStructure(updatedStructure);
  };

  return (
    <div className={styles.container}>
      <h1>File Explorer</h1>

      {/* Root Folder */}
      <Folder
        structure={structure}
        openFolderIds={openFolderIds}
        handleFolderToggle={handleFolderToggle}
        handleDelete={handleDelete}
        handleCreateNewFile={handleCreateNewFile}
        handleCreateNewFolder={handleCreateNewFolder}
      />
    </div>
  );
};

export default index;
