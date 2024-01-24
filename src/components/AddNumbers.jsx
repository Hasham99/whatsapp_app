import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import axios from "axios";

const AddNumbers = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the add button click
  const addMember = async () => {
    if (inputValue) {
      const jsonData = {
        cust_number: `${inputValue}`,
      };

      await axios
        .post("https://albadwan.shop/api/tasksoftware/numbers/assign", jsonData)
        .then((response) => {
          // Handle the success response
          alert(
            `POST request successful! Response: ${JSON.stringify(
              response.data
            )}`
          );
          window.location.reload();
        })
        .catch((error) => {
          // Handle the error
          console.error("Error making POST request:", error);
        });
      // alert(JSON.stringify(jsonData));
      setInputValue("");
    } else {
      alert("input value should not be empty");
    }
  };

  return (
    <div className="flex justify-center max-h-60 ">
      {/* <Typography className="">Anunzio Earning</Typography> */}
      <Card color="" className="">
        <CardBody>
          <Typography variant="h5" className="font-bold text-gray-800">
            Add new member
          </Typography>
          <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
            <div className="mb-1 flex flex-col gap-4">
              <Input
                label="Enter Number"
                required
                size="lg"
                placeholder="923xxxxxxxxx"
                value={inputValue}
                onChange={handleInputChange}
                color="blue"
                className=""
                // onKeyDown={(e) => e.key === "Enter" && addMember}
              />
              <Button
                onClick={addMember}
                onEnter
                className="self-end px-6 bg-blue-700"
              >
                Add
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddNumbers;
