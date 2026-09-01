import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";
import ContactList from "./component/ContactList";

import ContactForm from "./component/ContactForm";

function App() {
  const [allData, setAllData] = useState([]);
  const [select,setSelect]=useState({})
     const navigate = useNavigate();
  
//////////////////////////////////////////
const selectData=(id)=>{
    
    const selectedUser=allData.find((e)=>e.id==id)

     console.log(selectedUser,"singke user")
     setSelect(selectedUser)
 
      navigate("/");
  }

  console.log(select,"single user data")



  ///////////////////////////////
 
   const deleteData = (id) => {
    const filterData = allData.filter((e) => {
      return id !==e.id;
    });
    setAllData(filterData);
  };

  const getFormData = (formData) => {
    // form me jab isko call krenge to argument ppass krenge form ke data ko
    setAllData((prev) => {
      return [
        ...prev,
        formData, //  ab all data se ho jo bhi previous value hogi usme latest form data joa aya h wo array me add hoga
      ];
    });
  };

  console.log(allData, "alll data App");
  return (
    <>
      <Routes>
        <Route
          path="/contact-list"
          element={<ContactList allData={allData}  deleteData={deleteData} selectData={selectData}/>}
        />
        <Route path="/" element={<ContactForm getFormData={getFormData}  allData={allData} setAllData={setAllData}  select={select} />} />
      </Routes>
    </>
  );
}

export default App;

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vandana-Jain-123/ContactList.git
// git push -u origin main