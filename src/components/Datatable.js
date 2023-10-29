import React from 'react';

export default function Datatable({ data, columns }) {
  return (
    <div className="Ydatatable">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={`column${column.field}`}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.field}>
                  {column.field === "Icon" ? row.Icon : row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
