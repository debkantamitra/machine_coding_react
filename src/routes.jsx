import TabForm from "./problems/TabForm";
import Pagination from "./problems/Pagination";
import Autocomplete from "./problems/Autocomplete";
import FileExplorer from "./problems/FileExplorer";

export const routes = [
  {
    path: "/tab-form",
    component: <TabForm />,
    label: "Tab Form",
  },
  {
    path: "/pagination",
    component: <Pagination />,
    label: "Pagination",
  },
  {
    path: "/autocomplete",
    component: <Autocomplete />,
    label: "Autocomplete",
  },
  {
    path: "/file-explorer",
    component: <FileExplorer />,
    label: "FileExplorer",
  },
];
