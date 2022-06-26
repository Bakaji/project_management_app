import {
  Projects,
  ClientList,
  AddClientModal,
  AddProjectModal,
} from "../components";

export default function Project() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr className=" mt-4 mb-4" />
      <ClientList />
    </>
  );
}
