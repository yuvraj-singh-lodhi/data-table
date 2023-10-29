import { useState } from 'react';
import React from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function Datatable({ data, columns }) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  let result = data;

  if (sortColumn !== '') {
    result = result.sort((firstRow, otherRow) => {
      const comparison = firstRow[sortColumn].toString().localeCompare(otherRow[sortColumn].toString());
      return sortOrder === 'asc' ? comparison : -comparison; // Toggle the sorting order
    });
  }

  const startPoint = (currentPage - 1) * rowsPerPage;
  const endPoint = currentPage * rowsPerPage;
  const totalPages = Math.ceil(result.length / rowsPerPage);
  result = result.slice(startPoint, endPoint);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle the sorting order
  };

  return (
    <div className="Ydatatable">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={`column${column.field}`}>
                <button
                  onClick={() => {
                    setSortColumn(column.field);
                    toggleSortOrder();
                  }}
                >
                  {column.title}
                  {sortColumn === column.field ? (
                    sortOrder === 'asc' ? (
                      <BsFillArrowUpCircleFill className="up-icon" />
                    ) : (
                      <BsFillArrowDownCircleFill className="down-icon" />
                    )
                  ) : null}
                </button>
              </th>

            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.field}>
                  {column.field === 'Icon' ? row.Icon : row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <div className="pagination">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </tfoot>
      </table>
    </div>
  );
}
