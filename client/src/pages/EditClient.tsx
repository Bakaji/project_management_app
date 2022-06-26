import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ErrorAlert, Spinner } from "../components";
import { EDIT_CLIENT } from "../Mutations/clientMutations";
import { GET_CLIENTS, GET_CLIENT_BY_ID } from "../Queries/clientQueries";

export default function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { error, loading }: any = useQuery(GET_CLIENT_BY_ID, {
    variables: { id },
    onCompleted: ({ client }) => {
      setInput({
        name: client.name,
        email: client.email,
        phone: client.phone,
      });
    },
  });
  const [saveChangesMutation] = useMutation(EDIT_CLIENT, {
    variables: {
      input: {
        ...input,
        id,
      },
    },
    refetchQueries: [{ query: GET_CLIENTS }],
    onCompleted: () => navigate("/"),
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error.message} />;
  if (!id) {
    navigate("/");
  }
  const saveChangesCallback = () => {
    console.log("saving");
    saveChangesMutation();
  };
  return (
    <div>
      <h1>Edit Client</h1>
      <div className="card p-4 mt-4">
        <div className="row">
          <div className="form-group mb-3">
            <label htmlFor="name" className=" mb-1">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className=" mb-1">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone" className=" mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={input.phone}
              onChange={(e) => setInput({ ...input, phone: e.target.value })}
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-end align-items-center">
              <Link to="/" className="btn btn-danger m-2">
                Return to home page
              </Link>
              <button className="btn btn-primary" onClick={saveChangesCallback}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
