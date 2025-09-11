import { useState, useEffect } from "react";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([
      { timestamp: "2025-09-11 10:00:00", endpoint: "/ghl/api", status: 200, message: "Request OK" },
      { timestamp: "2025-09-11 10:05:32", endpoint: "/ghl/api", status: 500, message: "Internal Server Error" },
      { timestamp: "2025-09-11 10:07:45", endpoint: "/ghl/auth", status: 401, message: "Unauthorized" },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sala 8 – Logs estructurados</h1>
      <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Endpoint</th>
            <th>Status</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.timestamp}</td>
              <td>{log.endpoint}</td>
              <td style={{ color: log.status >= 400 ? "red" : "green", fontWeight: "bold" }}>
                {log.status}
              </td>
              <td>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
