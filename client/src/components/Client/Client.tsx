import { useQuery } from "@apollo/client";
import { ClientRow, ErrorAlert, Spinner } from "..";
import { GET_CLIENTS } from "../../Queries/clientQueries";
import { ClientType } from "../../types";

const ClientList = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <ErrorAlert />;

  const { allClients }: { allClients: Array<ClientType> } = data;

  if (!allClients?.length)
    return (
      <p className="h-100 w-100 text-danger p-5 text-center h2">
        No clients found
      </p>
    );
  return (
    <>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allClients.map((client: ClientType, index: number) => (
            <ClientRow key={index} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export { ClientList };
