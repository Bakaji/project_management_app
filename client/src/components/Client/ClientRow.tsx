import { FaTrash, FaPen } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../Mutations/clientMutations";
import { GET_CLIENTS } from "../../Queries/clientQueries";
import { GET_PROJECTS } from "../../Queries/projectQueries";
import { ClientType } from "../../types";
import { Link } from "react-router-dom";

const ClientRow = ({ client }: { client: ClientType }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  const deleteClientCallback = () => {
    deleteClient();
  };
  return (
    <tr>
      <td className="align-middle">{client.name}</td>
      <td className="align-middle">{client.email}</td>
      <td className="align-middle">{client.phone}</td>
      <td className="d-flex justify-between align-items-center gap-2">
        <Link to={`/client/edit/${client.id}`}>
          <button className="btn btn-info d-flex align-items-center">
            <span className="d-inline-block pe-2">Edit</span>
            <FaPen />
          </button>
        </Link>
        <button
          className="btn btn-danger d-flex align-items-center"
          onClick={deleteClientCallback}
        >
          <span className="d-inline-block pe-2">Delete</span>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export { ClientRow };
