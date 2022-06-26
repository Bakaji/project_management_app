import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../../Queries/projectQueries";
import { DELETE_PROJECT } from "../../Mutations/projectMutations";
export function DeleteProjectButton({
  projectId,
}: {
  projectId: string;
}) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const deleteProjectCallback = () => {
    deleteProject();
  };
  return (
    <div className="d-flex mt-4 ms-auto">
      <button className="btn btn-danger m-2 d-flex align-items-center" onClick={deleteProjectCallback}>
        <FaTrash className="icon"/>
        <span>Delete Project</span>
      </button>
    </div>
  );
}
