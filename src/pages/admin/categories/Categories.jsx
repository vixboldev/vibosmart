import React, { useState } from "react";
import SearchAdmin from "../../../component/admin/SearchAdmin";
import ModleCategory from "./ModleCategory";
import { addDocument } from "../../../services/FirebaseServices";

const inner = {
  name: "",
  description: "",
};
function Categories(props) {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState(inner);
  const [error, setError] = React.useState(inner);

  const handleAdd = async () => {
    if (validation()) {
      return;
    }
    await addDocument("Categories", category);
    handleClose();
  };
  const handleInput = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validation = () => {
    const newError = {};
    newError.name = category.name ? "" : "Vui lòng nhập tên";
    newError.description = category.description
      ? ""
      : "Vui lòng nhập description";
    setError(newError);
    return Object.values(newError).some((e) => e != ""); // trả về true nếu lỗi
  };

  console.log(category);

  return (
    <div>
      <SearchAdmin handleClickOpen={handleClickOpen} />
      <ModleCategory
        open={open}
        handleClose={handleClose}
        handleInput={handleInput}
        handleAdd={handleAdd}
        error={error}
      />
    </div>
  );
}

export default Categories;
