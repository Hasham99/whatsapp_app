// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Card,
//   CardFooter,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import axios from "axios";

// const UsersTable = () => {
//   const [tableData, setTableData] = useState([]);
//   const [selectedCustId, setSelectedCustId] = useState(null);
//   const [sendCustId, setSendCustId] = useState(null);
//   const [additionalData, setAdditionalData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the initial API endpoint
//     fetch("https://albadwan.shop/api/tasksoftware/numbers/get")
//       .then((response) => response.json())
//       .then((data) => setTableData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   useEffect(() => {
//     // Fetch additional data based on selected cust_id
//     if (selectedCustId !== null) {
//       fetch(
//         `https://albadwan.shop/api/tasksoftware/numbers/get/${selectedCustId}`
//       )
//         .then((response) => response.json())
//         .then((data) => setAdditionalData(data))
//         .catch((error) =>
//           console.error("Error fetching additional data:", error)
//         );
//     }
//   }, [selectedCustId]);

//   useEffect(() => {
//     // Fetch additional data based on selected cust_id
//     if (sendCustId !== null) {
//       axios
//         .get(
//           `https://albadwan.shop/api/tasksoftware/numbers/send/${sendCustId}`
//         )
//         // .then((response) => response.json())
//         .then(() => setSendCustId(null))
//         .then(() => alert("data send"))
//         // .then((data) => setAdditionalData(data))
//         .catch((error) => alert(error));
//     }
//   }, [sendCustId]);

//   const TABLE_HEAD = ["ID", "Customer Number", "", ""];

//   // Function to handle row click
//   const handleRowClick = (cust_id) => {
//     setSelectedCustId(cust_id);
//   };
//   // Function to handle row click
//   // const handleRowSendClicked = (cust_id) => {
//   //   setSendCustId(cust_id);
//   // };
//   // Function to handle "Assign" button click
//   const handleRowAssignClick = (cust_id) => {
//     alert(`Assign clicked for Cust ID: ${cust_id}`);
//   };

//   // Function to handle "Send" button click
//   const handleRowSendClick = (cust_id) => {
//     // alert(`Send clicked for Cust ID: ${cust_id}`);
//     setSendCustId(cust_id);
//   };
//   return (
//     <div className="py-5">
//       <Card className="h-1/2 w-full overflow-scroll my-auto">
//         <table className="max-h-32   w-full min-w-max table-auto text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head, index) => (
//                 <th
//                   key={head}
//                   className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-70"
//                   >
//                     {head}
//                   </Typography>
//                   {/* Add buttons after the first two headers */}
//                   {index === 2 && (
//                     <>
//                       {/* <button
//                         // onClick={() => console.log("Assign clicked")}
//                         onClick={() => handleRowAssignClick(selectedCustId)}
//                         className="text-blue-800 font-medium"
//                       >
//                         Assign All
//                       </button> */}
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal leading-none opacity-70"
//                       >
//                         Assign
//                       </Typography>
//                     </>
//                   )}
//                   {index === 3 && (
//                     <>
//                       {/* <button
//                         // onClick={() => console.log("Send clicked")}
//                         onClick={() => handleRowSendClick(selectedCustId)}
//                         className="text-green-800 font-medium "
//                       >
//                         Send All
//                       </button> */}
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal leading-none opacity-70"
//                       >
//                         Send
//                       </Typography>
//                     </>
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map(({ cust_id, cust_number }) => (
//               <tr
//                 key={cust_id}
//                 className="even:bg-blue-gray-50/50 cursor-pointer"
//                 onClick={() => handleRowClick(cust_id)}
//               >
//                 <td className="pl-4 py-2">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal"
//                   >
//                     {cust_id}
//                   </Typography>
//                 </td>
//                 <td className="pl-4 py-2">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal"
//                   >
//                     {cust_number}
//                   </Typography>
//                 </td>
//                 <td className="pl-4 py-2">
//                   <button
//                     // onClick={() =>
//                     //   console.log("Send clicked for Cust ID:", cust_id)
//                     // }
//                     onClick={() => handleRowAssignClick(cust_id)}
//                     className="text-blue-400 font-medium"
//                   >
//                     Assign
//                   </button>
//                 </td>
//                 <td className="pl-4 py-2">
//                   <button
//                     // onClick={() =>
//                     //   console.log("Send clicked for Cust ID:", cust_id)
//                     // }
//                     onClick={() => handleRowSendClick(cust_id)}
//                     className="text-green-400 font-medium"
//                   >
//                     Send
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
//           <Button variant="outlined" size="sm">
//             Previous
//           </Button>
//           <div className="flex items-center gap-2">
//             <IconButton variant="outlined" size="sm">
//               1
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               2
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               3
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               ...
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               8
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               9
//             </IconButton>
//             <IconButton variant="text" size="sm">
//               10
//             </IconButton>
//           </div>
//           <Button variant="outlined" size="sm">
//             Next
//           </Button>
//         </CardFooter>
//       </Card>

//       {/* Display selected row data */}
//       {/* {selectedCustId !== null && (
//         <div className="mt-3">
//           <Typography variant="h6">Selected Row Data:</Typography>
//           <pre>{JSON.stringify({ cust_id: selectedCustId }, null, 2)}</pre>
//         </div>
//       )} */}

//       {/* Display additional data */}
//       {additionalData && (
//         <div className="mt-3">
//           <Typography variant="h6">Additional Data:</Typography>
//           <pre>{JSON.stringify(additionalData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UsersTable;

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

const UsersTable = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedCustId, setSelectedCustId] = useState(null);
  const [sendCustId, setSendCustId] = useState(null);
  const [resolveCustId, setResolveCustId] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch data from the initial API endpoint
    fetch("https://albadwan.shop/api/tasksoftware/numbers/get")
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Fetch additional data based on selected cust_id
    if (selectedCustId !== null) {
      fetch(
        `https://albadwan.shop/api/tasksoftware/numbers/get/${selectedCustId}`
      )
        .then((response) => response.json())
        .then((data) => setAdditionalData(data))
        .catch((error) =>
          console.error("Error fetching additional data:", error)
        );
    }
  }, [selectedCustId]);

  useEffect(() => {
    // Fetch additional data based on selected cust_id
    if (sendCustId !== null) {
      axios
        .get(
          `https://albadwan.shop/api/tasksoftware/numbers/send/${sendCustId}`
        )
        .then(() => {
          setSendCustId(null);
          alert("data send");
          window.location.reload();
        })
        .catch((error) => alert(error));
    }
  }, [sendCustId]);
  -useEffect(() => {
    // Fetch additional data based on selected cust_id
    if (resolveCustId !== null) {
      axios
        .get(
          `https://albadwan.shop/api/tasksoftware/numbers/resolve/${resolveCustId}`
        )
        .then(() => {
          setResolveCustId(null);
          alert("data resolved");
          window.location.reload();
        })
        // .then(() => alert("data resolved"))
        .catch((error) => alert(error));
    }
  }, [resolveCustId]);

  const TABLE_HEAD = ["ID", "Customer Number", "", "", ""];

  // Function to handle row click
  const handleRowClick = (cust_id) => {
    setSelectedCustId(cust_id);
  };

  // Function to handle "Assign" button click
  const handleRowAssignClick = (cust_id) => {
    alert(`Assign clicked for Cust ID: ${cust_id}`);
  };

  // Function to handle "Send" button click
  const handleRowSendClick = (cust_id) => {
    setSendCustId(cust_id);
  };
  // Function to handle "Send" button click
  const handleRowResolveClick = (cust_id) => {
    setResolveCustId(cust_id);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTableData = tableData.slice(startIndex, endIndex);

    return currentTableData.map(
      ({
        cust_id,
        cust_number,
        sent_status,
        resolve_status,
        assign_status,
      }) => (
        <tr
          key={cust_id}
          className="even:bg-blue-gray-50/50 cursor-pointer"
          onClick={() => handleRowClick(cust_id)}
        >
          <td className="p-2">
            <Typography variant="small" className="font-normal text-gray-500">
              {cust_id}
            </Typography>
          </td>
          <td className="p-2">
            <Typography variant="small" className="font-normal text-gray-800">
              {cust_number}
              {/* {sent_status} */}
            </Typography>
          </td>
          <td className="p-2">
            <button
              onClick={() => handleRowAssignClick(cust_id)}
              className={`text-blue-400 text-sm font-medium ${
                assign_status === "assigned" ? "cursor-not-allowed" : ""
              }`}
              disabled={assign_status === "assigned"}
            >
              Assign
            </button>
          </td>
          <td className="p-2">
            <button
              onClick={() => handleRowSendClick(cust_id)}
              className={`text-green-400 text-sm font-medium ${
                sent_status === "sent" ? "cursor-not-allowed" : ""
              }`}
              disabled={sent_status === "sent"}
            >
              Send
            </button>
          </td>
          <td className="p-2">
            <button
              onClick={() => handleRowResolveClick(cust_id)}
              // className={`text-amber-900 font-medium text-sm ${
              //   resolve_status === "resolved" ? "cursor-not-allowed" : ""
              // }`}
              // disabled={resolve_status === "resolved"}
              className={`text-amber-900 font-medium text-sm ${
                assign_status === "not-assigned" ? "cursor-not-allowed" : ""
              }`}
              disabled={assign_status === "not-assigned"}
            >
              Resolve
            </button>
          </td>
        </tr>
      )
    );
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <IconButton
          key={page}
          onClick={() => setCurrentPage(page)}
          variant={currentPage === page ? "outlined" : "text"}
          size="sm"
          // className="rounded-full"
        >
          {page}
        </IconButton>
      )
    );
  };

  return (
    <div className="py-5">
      <Card className="h-1/2 w-full overflow-scroll my-auto">
        <table className="max-h-32   w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 px-2 py-3"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                  {index === 2 && (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Assign
                    </Typography>
                  )}
                  {index === 3 && (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Send
                    </Typography>
                  )}
                  {index === 4 && (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Resolve
                    </Typography>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            className="p-2"
          >
            Previous
          </Button>
          <div className="flex items-center gap-2 p-0">
            {renderPageNumbers()}
          </div>
          <Button
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < Math.ceil(tableData.length / itemsPerPage)
                  ? prevPage + 1
                  : prevPage
              )
            }
            variant="outlined"
            size="sm"
            disabled={
              currentPage === Math.ceil(tableData.length / itemsPerPage)
            }
            className="p-2"
          >
            Next
          </Button>
        </CardFooter>
      </Card>

      {additionalData && (
        <div className="mt-3">
          <Typography variant="h6">Additional Data:</Typography>
          <pre>{JSON.stringify(additionalData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
