import { useEffect, useState } from "react";
import "./contactForm.css";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ getFormData, allData, select, setAllData }) => {
  const navigate = useNavigate();

  // const [allData,setAllData]=useState([])
  const [userInputDetails, setUserInputDetails] = useState({
    id: Math.random(),
    name: "",
    mobile: "",
    address: "",
    category: "",
    isFavorite: false,
    image: null,
  });

  useEffect(() => {
    if (select && select.id) {
      setUserInputDetails(select);
      console.log(userInputDetails, "pppppppppppppppppppppppppppppp");
    }
  }, [select]);

  const handleUpdate = () => {
    const editData = allData.map((e) =>
      e.id == userInputDetails.id ? userInputDetails : e,
    );
    setAllData(editData);
    navigate("/contact-list");
  };

  // handle Input function

  const handleInput = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log(name, value);
    setUserInputDetails({
      ...userInputDetails,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  //function of ssubmit inout data

  const submitContact = (e) => {
    e.preventDefault();
    // setAllData([...allData,userInputDetails])
    console.log(userInputDetails, "oooooooooooooooooooo");
    getFormData(userInputDetails);
    navigate("/contact-list");
  };

  return (
    <>
      <div className="container1">
        <div className="bodyform">
          <div className="designeImg">
            {userInputDetails.image && (
              <img
                src={URL.createObjectURL(userInputDetails.image)}
                alt={userInputDetails.name}
                width="200"
                height="250"
              />
            )}
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInput}
            />
            <p>Click to upload image</p>
            <span>JPG, PNG (Max 2MB)</span>
          </div>
          <div className="designeForm">
            <div className="formGroup">
              <label>Name</label>
              <input
                type="text"
                onChange={handleInput}
                name="name"
                value={userInputDetails.name}
              />
            </div>
            <div className="formGroup">
              <label>mobile</label>
              <input
                type="text"
                onChange={handleInput}
                name="mobile"
                value={userInputDetails.mobile}
              />
            </div>
            <div className="formGroup">
              <label>address</label>
              <input
                type="text"
                onChange={handleInput}
                name="address"
                value={userInputDetails.address}
              />
            </div>
            <div className="formGroup">
              <label>category</label>

              <select
                name="category"
                onChange={handleInput}
                value={userInputDetails.category}
              >
                <option value="">Select Category</option>
                <option value="Family">Family</option>
                <option value="Office">Office</option>
                <option value="Friends">Friends</option>
              </select>
            </div>

            <div className="formGroup favorite">
              <label>Favorite</label>
              <input
                type="checkbox"
                name="isFavorite"
                checked={userInputDetails.isFavorite}
                onChange={handleInput}
              />
            </div>

            <div className="formbuttons">
              <button onClick={submitContact}>Save contact</button>
              <button onClick={handleUpdate}>update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;

// subbmit krne ke bad table me display krnane ke teen tarike se kr sakte h
// 1=by props
// isme hoga kya app.jsx ak parent comman component h ye componet formData component ko ak function bhejega us  function formData me call krenge
// to wo data App.jsx  me recive hoga ab is contactlist me send kr sakte h

//2. localstorage me save kro or get krke set kro

// const oldData = JSON.parse(localStorage.getItem("contacts")) || [];
//  localStorage.setItem("contacts", JSON.stringify(updatedData));  jha chhaiye wha get krlo or ak state me store kraa lo phir use map kro

// 3.context API ke dwara
