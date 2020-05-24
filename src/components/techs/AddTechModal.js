import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techAction";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      addTech({ firstName, lastName });

      M.toast({ html: "Please enter the first and last name" });
      // clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <h4>New Technician</h4>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            nname="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="active">
            First Name
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <input
            type="text"
            nname="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastName" className="active">
            Last Name
          </label>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
