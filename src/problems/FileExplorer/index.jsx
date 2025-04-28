import React, { useState } from "react";
import styles from "./styles.module.css";
import structure from "./structure.json";

const Folder = ({ structure, openFolderIds, handleFolderToggle }) => {
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
            </div>

            {/* recurse */}
            {item.isFolder && openFolderIds.includes(item.id) && (
              <Folder
                structure={item.children}
                openFolderIds={openFolderIds}
                handleFolderToggle={handleFolderToggle}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const index = () => {
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

  return (
    <div className={styles.container}>
      <h1>File Explorer</h1>

      {/* Root Folder */}
      <Folder
        structure={structure}
        openFolderIds={openFolderIds}
        handleFolderToggle={handleFolderToggle}
      />
    </div>
  );
};

export default index;
