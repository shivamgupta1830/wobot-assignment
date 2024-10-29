import React from "react";
import TableRow from "./TableRow";
import FilterSection from "./FilterSection";
import "../styles/Table.css";

const Table = ({
  cameraData,
  locationOptions,
  statusOptions,
  handleDelete,
  setSearchText,
  setLocationFilter,
  setStatusFilter,
  handleStatusToggle,
  statusFilter,
  locationFilter,
}) => {
  return (
    <>
      <FilterSection
        locationOptions={locationOptions}
        statusOptions={statusOptions}
        statusFilter={statusFilter}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        setStatusFilter={setStatusFilter}
      />
      <div className="table-container">
        <table className="camera-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Health</th>
              <th>Location</th>
              <th>Recorder</th>
              <th>Task</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cameraData.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  style={{ textAlign: "center", padding: "30px" }}
                >
                  Loading...
                </td>
              </tr>
            ) : (
              cameraData.map((camera) => (
                <TableRow
                  key={camera._id}
                  id={camera._id}
                  name={camera.name}
                  device={camera.health.device}
                  cloud={camera.health.cloud}
                  location={camera.location}
                  recorder={camera.recorder}
                  status={camera.status}
                  tasks={camera.tasks}
                  currentStatus={camera.current_status}
                  handleDelete={handleDelete}
                  handleStatusToggle={handleStatusToggle}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
