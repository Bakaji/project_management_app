export const toReadableStatus = (status: string) => {
  let statusReadable = "";
  switch (status) {
    case "PLANNED":
      statusReadable = "Planned";
      break;
    case "IN_PROGRESS":
      statusReadable = "In Progress";
      break;
    case "COMPLETED":
      statusReadable = "Completed";
      break;
    default:
      statusReadable = "Unknown";
      break;
  }
  return statusReadable;
};
