import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { ListItemIcon, ListItemText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Twitter from "../public/icons/twitter.svg";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

const SelectInput = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  //   const items = [
  //     { id: 1, name: "hossam" },
  //     { id: 2, name: "hatem" },
  //   ];
  const items = ["hossam", "hatem"];

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <Select
          sx={{
            // height: "50px",
            borderRadius: "8px",
            fontSize: "16px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderBottomRadius: "0px",
            borderColor: "yellow",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "purple",
            },
            "& .MuiOutlinedInput-notchedOutline.Mui-focused": {
              borderColor: "orange",
            },
          }}
          className="test"
          value={age}
          onChange={handleChange}
          displayEmpty
          renderValue={age !== "" ? undefined : () => "Select an option...."}
        >
          {items.map((item, i) => (
            <MenuItem key={i} value={item}>
              <ListItemIcon>
                <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
