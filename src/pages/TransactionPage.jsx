import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import * as XLSX from "xlsx";

const TransactionPage = () => {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [lastPage, setLastPage] = useState(3);
  const [limit, setLimit] = useState(10);
  const [disabled, setDisabled] = useState({ prev: true, next: false });
  const [save, setSave] = useState({
    label: "Save",
    spinner: "hidden",
    disabled: false,
  });

  // submit state
  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);
      setExcelData(data.slice(pageStart, limit));
    }
  }, [pageStart]);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file type!");
        setExcelFile(null);
      }
      console.log(selectedFile.type);
    } else {
      console.log("please select file");
    }
  };

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);
      const lastPage =
        data.length % limit == 0
          ? data.length / limit
          : Math.ceil(data.length / limit);
      setLastPage(lastPage);
      setExcelData(data.slice(pageStart, limit));
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-10 w-full">
          <h3>Upload & View Excel Sheets</h3>

          {/* form */}
          <form className="flex flex-col space-y-4" onSubmit={handleFileSubmit}>
            <div className="flex  space-x-5">
              <input
                type="file"
                name="input_file"
                required
                className="file-input file-input-bordered file-input-md w-full max-w-xs"
                onChange={handleFile}
              />
              <button className="btn btn-info text-base-100" type="submit">
                Upload
              </button>
            </div>
            {typeError && (
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{typeError}</span>
              </div>
            )}
          </form>

          {/* dataview */}
          <div className="">
            {excelData ? (
              <>
                <div className="flex justify-end">
                  <button
                    className="btn btn-success text-base-100 px-7"
                    onClick={() =>
                      setSave({
                        ...save,
                        ["spinner"]: "block",
                        ["label"]: "Loading",
                        ["disabled"]: true,
                      })
                    }
                    disabled={save.disabled}
                  >
                    <span
                      className={`loading loading-spinner ${save.spinner}`}
                    ></span>
                    {save.label}
                  </button>
                </div>

                <div className="mt-5 overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>No</th>
                        {Object.keys(excelData[0]).map((key) => (
                          <th key={key}>{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {excelData.map((data, index) => (
                        <tr key={index}>
                          <td key={index}>{pageStart + index + 1}</td>
                          {Object.keys(data).map((key) => (
                            <td key={key}>{data[key]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="join flex items-center justify-center mt-4">
                    <button
                      className="join-item btn"
                      onClick={() => {
                        if (page == 2) {
                          setDisabled({ ...disabled, ["prev"]: true });
                        }
                        setPage(page - 1);

                        setPageStart(pageStart - 10);
                        setLimit(limit - 10);
                      }}
                      disabled={disabled.prev}
                    >
                      «
                    </button>
                    <button className="join-item btn">Page {page}</button>
                    <button
                      className="join-item btn"
                      onClick={() => {
                        if (page == lastPage) {
                          setDisabled({ ...disabled, ["next"]: true });
                        } else {
                          setPage(page + 1);
                          setPageStart(pageStart + 10);
                          setLimit(limit + 10);
                        }
                        setDisabled({ ...disabled, ["prev"]: false });
                      }}
                      disabled={disabled.next}
                    >
                      »
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div role="alert" className="alert mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>No File Uploaded!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
