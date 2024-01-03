import { TextField } from "@mui/material";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const PassInputField = ({ inputLabel, inputRef }) => {
  // Password Show/Hide Toggle
  const [eyeIcon, setEyeIcon] = useState(<AiFillEyeInvisible size="1.2em" />);

  const [passType, setPassType] = useState("password");

  const handlePasswordType = () => {
    if (passType == "password") {
      setPassType("text");
      setEyeIcon(<AiFillEye size="1.2em" />);
    }
    if (passType == "text") {
      setPassType("password");
      setEyeIcon(<AiFillEyeInvisible size="1.2em" />);
    }
  };

  return (
    <div className="position-relative">
      <TextField
        fullWidth
        type={passType}
        label={inputLabel}
        variant="filled"
        className="mb-2 position-relative"
        inputRef={inputRef}
        required
      />
      <div className={`eye_icon `} onClick={handlePasswordType}>
        {eyeIcon}
      </div>
    </div>
  );
};

const PassInputFieldFormControl = ({
  placeholderValue,
  inputRef,
  className,
  eyeIconStyle,
}) => {
  const [eyeIcon, setEyeIcon] = useState(<AiFillEyeInvisible size="1.2em" />);

  const [passType, setPassType] = useState("password");

  const handlePasswordType = () => {
    if (passType == "password") {
      setPassType("text");
      setEyeIcon(<AiFillEye size="1.2em" />);
    }
    if (passType == "text") {
      setPassType("password");
      setEyeIcon(<AiFillEyeInvisible size="1.2em" />);
    }
  };
  return (
    <div className="position-relative">
      <Form.Control
        type={passType}
        placeholder={placeholderValue}
        className={className}
        ref={inputRef}
      />
      <div
        className={`form_control_eye_icon ${eyeIconStyle}`}
        onClick={handlePasswordType}
      >
        {eyeIcon}
      </div>
    </div>
  );
};

export { PassInputField, PassInputFieldFormControl };
