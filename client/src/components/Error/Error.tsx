import React from "react";

export function ErrorAlert(props: Partial<{ message: string | null }>) {
  return <div className="alert alert-danger text-danger fw-bold">{props.message ?? "Error!"}</div>;
}
