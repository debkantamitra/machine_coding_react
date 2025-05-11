export function traverseAndAdd(structure, id, fileOrFolderName, isFolder) {
  if (structure.length < 1) return structure;

  return structure.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        children: [
          ...item.children,
          {
            id: new Date.now(),
            name: fileOrFolderName,
            isFolder: isFolder,
            children: [],
          },
        ],
      };
    }

    if (item.isFolder) {
      return {
        ...item,
        children: traverseAndAdd(item.children, id, fileOrFolderName, isFolder),
      };
    } else {
      return item;
    }
  });
}
