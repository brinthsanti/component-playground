import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import { debounce } from 'lodash';
import "./index.css";

// Table component

const TableContext = React.createContext();

const Table = ({
  data = [],
  columns,
  tableClassName,
  headerClassName,
  rowClassName,
  onRowClick,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [paginatedContent, setPaginatedContent] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  console.log(filteredData, paginatedContent);
  return (
    <TableContext.Provider
      value={{
        filteredData,
        setFilteredData,
        initialData: data,
      }}
    >
      <Search filteredData={filteredData} setFilteredData={setFilteredData} />
      <div className="table-container">
        <table className={tableClassName}>
            <TableHeader columns={columns} headerClassName={headerClassName} />
          <TableBody
            filteredData={paginatedContent}
            columns={columns}
            rowClassName={rowClassName}
            onRowClick={onRowClick}
          />
        </table>
      </div>
      <TableFooter>
        {filteredData.length && (
          <Pagination
            totalPages={filteredData.length}
            itemsPerPage={10}
            setPaginatedContent={setPaginatedContent}
          />
        )}
      </TableFooter>
    </TableContext.Provider>
  );
};

export default Table;

// TableCell component
const TableCell = ({ children, className }) => {
  return <td className={className}>{children}</td>;
};

// TableRow component
const TableRow = ({ rowData, columns, rowClassName, onRowClick }) => {
  return (
    <tr className={rowClassName} onClick={() => onRowClick(rowData)}>
      {columns.map((column, index) => (
        <TableCell key={index} className={column.cellClassName}>
          {column.render ? (
            <span>{column.render(rowData[column.key], rowData)}</span>
          ) : (
            rowData[column.key]
          )}
        </TableCell>
      ))}
    </tr>
  );
};

// TableBody component
const TableBody = ({ filteredData, columns, rowClassName, onRowClick }) => {
  return (
    <tbody>
      {filteredData.map((rowData, index) => (
        <TableRow
          key={index}
          rowData={rowData}
          columns={columns}
          rowClassName={rowClassName}
          onRowClick={onRowClick}
        />
      ))}
    </tbody>
  );
};

// TableHeader component
const TableHeader = ({ columns, headerClassName }) => {
  const { filteredData, setFilteredData, initialData } =
    useContext(TableContext);
  const [columnWidths, setColumnWidths] = useState({});

  const handleResize = (columnKey, newWidth) => {
    setColumnWidths((prevWidths) => ({
      ...prevWidths,
      [columnKey]: newWidth,
    }));
  };

  return (
    <thead>
      <tr className={headerClassName}>
        {columns.map((column, index) => (
          <th key={column.key}>
            <ColumnResizer
            initialWidth={200}
            onResize={(newWidth) => handleResize(column.key, newWidth)}>
                            <div className="tableHeader">
              {column.header}{" "}
              <Filter
                column={column}
                setFilteredData={setFilteredData}
                initialData={initialData}
                filteredData={filteredData}
              />
              {column.sortable && (
                <Sorter
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                  columnKey={column.key}
                />
              )}
            </div>
            </ColumnResizer>
          </th>
        ))}
      </tr>
    </thead>
  );
};

function Sorter({ filteredData, setFilteredData, columnKey }) {
  const tableData = [...filteredData];

  const type = tableData.length ? typeof tableData[0][columnKey] : undefined;
  function handleClick(action) {
    let data = [];
    if (type && type === "string") {
      if (action === "asc") {
        data = tableData.sort((a, b) =>
          a[columnKey].localeCompare(b[columnKey])
        );
      } else {
        data = tableData.sort((a, b) =>
          b[columnKey].localeCompare(a[columnKey])
        );
      }
    } else {
      if (action === "asc") {
        data = tableData.sort((a, b) => a[columnKey] - b[columnKey]);
      } else {
        data = tableData.sort((a, b) => b[columnKey] - a[columnKey]);
      }
    }

    setFilteredData(data);
  }
  return (
    <div className="sorter">
      <button onClick={() => handleClick("asc")}>&#8593;</button>
      <button onClick={() => handleClick("des")}>&#8595;</button>
    </div>
  );
}

function Search() {
  const { initialData, filteredData, setFilteredData } =
    useContext(TableContext);
  const [inputText, setInputText] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
    if (value) {
      const data = globalSearch(filteredData, value);
      setFilteredData(data);
    } else {
      setFilteredData(initialData);
    }
  }
  const globalSearch = (data, query) => {
    return data.filter((obj) =>
      Object.values(obj).some((value) => {
        const val = String(value);
        return val.toLowerCase().includes(query.toLowerCase());
      })
    );
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search here"
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
}

function Filter({ column, setFilteredData, initialData, filteredData }) {
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearchText(value);

    if (value) {
      const data = filteredData.filter((ele) =>
        String(ele[column.key]).toLocaleLowerCase().includes(value)
      );
      setFilteredData(data);
    } else {
      setFilteredData(initialData);
    }
  }
  return (
    <div className="filter">
      <button
        onClick={() => {
          setToggle((prv) => !prv);
        }}
      >
        &#9820;
      </button>
      {toggle && (
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder={column.header}
        />
      )}
    </div>
  );
}

const TableFooter = ({ children }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan="100%">{children}</td>
      </tr>
    </tfoot>
  );
};

function Pagination({ totalPages, itemsPerPage = 10, setPaginatedContent }) {
  const [page, setPage] = useState(1);
  const { filteredData } = useContext(TableContext);

  useEffect(() => {
    if (filteredData.length) {
      const data = filteredData.slice(
        page * itemsPerPage - itemsPerPage,
        page * itemsPerPage
      );
      setPaginatedContent(data);
    }
  }, [page]);

  useEffect(() => {
    // needs cleanup
    if (filteredData.length) {
      const data = filteredData.slice(
        page * itemsPerPage - itemsPerPage,
        page * itemsPerPage
      );
      setPaginatedContent(data);
      setPage(1);
    }
  }, [filteredData]);

  function handleClick(page) {
    setPage(page);
  }

  function handlePrevNext(action) {
    if (action === "prev") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else {
      console.log(page, totalPages);
      if (page !== Math.floor(totalPages / itemsPerPage)) {
        setPage(page + 1);
      }
    }
  }

  console.log("totalPages", totalPages);
  return (
    <div className="pagination">
      <button onClick={() => handlePrevNext("prev")}>prev</button>
      {Array(Math.floor(totalPages / itemsPerPage))
        .fill("_")
        .map((ele, index) => (
          <button
            className={page === index + 1 ? "active" : ""}
            key={index}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button onClick={() => handlePrevNext("next")}>next</button>
    </div>
  );
}

function ColumnResizer({ className, onResize, children, initialWidth = 200 }) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isResizing, setIsResizing] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  const [width, setWidth] = useState(initialWidth);

  const handleMouseDown = (event) => {
    const computedWidth = window.getComputedStyle(event.target.parentNode).width;
    setCurrentWidth(parseInt(computedWidth, 10));
    setCurrentPosition(event.clientX);
    setIsResizing(true);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(()=>{
    document.addEventListener('mousemove', handleMouseMove);
    return ()=>{
        document.removeEventListener('mousemove', handleMouseMove);
    }
  },[isResizing]);

  useEffect(()=>{
    function handleChange(e){
     console.log(e);
    }
    document.addEventListener('selectstart', handleChange);
    return ()=>{
        document.removeEventListener('selectstart', handleChange);
    }
  },[])

  const handleMouseMove = (event) => {
    if(!isResizing) return
     const resizerPos = event.clientX - currentPosition;
     setWidth(Math.max(currentWidth + resizerPos, initialWidth));
  };

  const handleMouseUp = () => {
    console.log('ends');
    setIsResizing(false);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const classes = ["columnResizer", className].filter(Boolean).join(" ");
  return (
    <div
    className="columnResizerContainer"
      style={{ width }}
    >
      {children}
      <div className={classes}       onMouseDown={handleMouseDown} 
      />
    </div>
  );
}
