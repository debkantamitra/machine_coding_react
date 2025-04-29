import React, { useState } from "react";
import styles from "./styles.module.css";
import structurePermanent from "./structure.json";

const Folder = ({
  structure,
  openFolderIds,
  handleFolderToggle,
  handleDelete,
}) => {
  const [isCreateNewFile, setIsCreateNewFile] = useState(false);
  const [isCreateNewFolder, setIsCreateNewFolder] = useState(false);

  return (
    <div className={styles.folder}>
      {structure.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div
              className={styles.folder__item}
              onClick={() => {
                handleFolderToggle(item.id);
              }}
            >
              {item.isFolder ? (
                openFolderIds.includes(item.id) ? (
                  <img
                    src="https://www.iconpacks.net/icons/2/free-folder-icon-1439-thumb.png"
                    alt="folder"
                    width={"20px"}
                    height={"20px"}
                  />
                ) : (
                  <img
                    src="https://static-00.iconduck.com/assets.00/folder-closed-icon-2048x1775-pd29sgq2.png"
                    alt="folder"
                    width={"20px"}
                    height={"20px"}
                  />
                )
              ) : (
                <img
                  src="https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"
                  alt="file"
                  width={"20px"}
                  height={"20px"}
                />
              )}
              <span>{item.name}</span>

              <span className={styles.action__container}>
                <button title="add" onClick={() => setIsCreateNewFile(true)}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    alt="add"
                    width={"16px"}
                    height={"16px"}
                  />
                </button>

                <button title="delete" onClick={() => handleDelete(item.id)}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
                    alt="delete"
                    width={"16px"}
                    height={"16px"}
                  />
                </button>
              </span>
            </div>

            {/* recurse */}
            {item.isFolder && openFolderIds.includes(item.id) && (
              <Folder
                structure={item.children}
                openFolderIds={openFolderIds}
                handleFolderToggle={handleFolderToggle}
                handleDelete={handleDelete}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

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

  return (
    <div className={styles.container}>
      <h1>File Explorer</h1>

      {/* Root Folder */}
      <Folder
        structure={structure}
        openFolderIds={openFolderIds}
        handleFolderToggle={handleFolderToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default index;
