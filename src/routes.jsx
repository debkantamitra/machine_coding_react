import TabForm from "./problems/TabForm";
import Pagination from "./problems/Pagination";

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
];
