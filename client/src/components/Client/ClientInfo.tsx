import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";
import { ClientType } from "../../types";
export function ClientInfo({ client }: { client: ClientType }) {
  return (
    <>
      <h5 className="mt-3 mb-3">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          {client.phone}
        </li>
      </ul>
    </>
  );
}
