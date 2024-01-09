import React, { useState, useEffect } from 'react';
import getDocumentsData from './fetchData';
import './App.css';
import { FaSort, FaPlus, FaMinus } from 'react-icons/fa';
import sortDataUtil from './utils/sortData';

export default function App() {
  const [expandedFolders, setExpandedFolders] = useState([]);
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterInput, setFilterInput] = useState();

  useEffect(() => {
    getDocumentsData().then(documentsData => setData(documentsData));
  }, []);

  const toggleFolder = (folderName) => {
    setExpandedFolders((prevExpanded) =>
      prevExpanded.includes(folderName)
        ? prevExpanded.filter((folder) => folder !== folderName)
        : [...prevExpanded, folderName]
    );
  };

  function sortData(sortBy) {
    const sortedData = sortDataUtil(data, sortBy, sortDirection)
    setData(sortedData);
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  }

  function getFilteredDocuments() {
    if (!filterInput) return data;

    return data.filter(document => document.name.toLowerCase().includes(filterInput.toLowerCase()));
  }

  const filteredDocuments = getFilteredDocuments();

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Type<FaSort onClick={() => sortData("type")} /></th>
            <th>
              File Name<FaSort onClick={() => sortData("name")} />
              <input placeholder="Filter..." onChange={(e) => setFilterInput(e.target.value)} />
            </th>
            <th>Added<FaSort onClick={() => sortData("added")} /></th>
            <th>Expand</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((document, index) => (
            <React.Fragment key={document.name}>
              <tr>
                <td>{document.type}</td>
                <td>{document.name}</td>
                <td>{document.added}</td>
                <td>
                  {document.type === 'folder' && (
                    <button
                      className="expand-button"
                      onClick={() => toggleFolder(document.name)}
                    >
                      {expandedFolders.includes(document.name) ? <FaMinus /> : <FaPlus />}
                    </button>
                  )}
                </td>
              </tr>
              {document.type === 'folder' && expandedFolders.includes(document.name) && (
                <>
                  {document.files.map((file) => (
                    <tr key={file.name}>
                      <td className="indented-cell">{file.type}</td>
                      <td className="indented-cell">{file.name}</td>
                      <td className="indented-cell">{file.added}</td>
                    </tr>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}