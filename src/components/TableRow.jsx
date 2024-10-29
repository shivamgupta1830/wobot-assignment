import React from "react";
import action from "../assets/action.svg";
import cloudImg from "../assets/cloud.svg";
import deviceImg from "../assets/device.svg";
import activeImg from "../assets/active.svg";
import inactiveImg from "../assets/inActive.svg";
import "../styles/Table.css";

const TableRow = ({
  id,
  currentStatus,
  name,
  location,
  cloud,
  device,
  recorder,
  status,
  tasks,
  handleDelete,
  handleStatusToggle,
}) => {
  const taskCount =
    parseInt(tasks) > 1
      ? `${tasks} Tasks`
      : parseInt(tasks) === 1
      ? `${tasks} Task`
      : "N/A";

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        {currentStatus && (
          <img
            src={currentStatus === "Online" ? activeImg : inactiveImg}
            alt="Active/Inactive"
          />
        )}
        <span style={{ marginLeft: "5px" }}>{name ? name : "N/A"}</span>
      </td>
      <td>
        <div className="health-column">
          {cloud && (
            <div className="cloud-and-device">
              <img src={cloudImg} alt="Cloud Icon" width="20px" />
              <span>{cloud}</span>
            </div>
          )}
          {device && (
            <div className="cloud-and-device">
              <img src={deviceImg} alt="Device Icon" width="20px" />
              <span>{device}</span>
            </div>
          )}
        </div>
      </td>
      <td>{location ? location : "N/A"}</td>
      <td>{recorder ? recorder : "N/A"}</td>
      <td>{taskCount}</td>
      <td
        onClick={() => handleStatusToggle(id, status)}
        style={{ textAlign: "center" }}
      >
        <span
          className={
            status === "Active"
              ? "status active-status"
              : " status inactive-status"
          }
        >
          {status ? status : "N/A"}
        </span>
      </td>
      <td style={{ textAlign: "center" }}>
        <img src={action} alt="Action Icon" />
      </td>
      <td>
        <button className="delete-button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
