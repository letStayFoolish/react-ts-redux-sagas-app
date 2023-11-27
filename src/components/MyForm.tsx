import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import { RootState } from "../store";
import { setUserSlice } from "../redux/slice/UserSlice";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";

const MyForm = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;

    dispatch(setUserSlice({ ...user, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    user.id === ""
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ type: UPDATE_USER_BY_ID, user });

    // Reset form fields:
    dispatch(
      setUserSlice({
        id: "",
        name: "",
        emil: "",
        password: "",
      })
    );
  };

  useEffect(() => {
    const { name, email, password } = user;

    if (!name || !email || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user, disabled]);

  return (
    <>
      <Container>
        <Input value={user?.id} fullWidth disabled></Input>
        <Input
          type="text"
          placeholder="EnterYour Name"
          name="name"
          value={user?.name || ""}
          fullWidth
          onChange={(event) => handleChange(event)}
        ></Input>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          name="email"
          value={user?.email || ""}
          fullWidth
          onChange={(event) => handleChange(event)}
        ></Input>
        <Input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={user?.password || ""}
          fullWidth
          onChange={(event) => handleChange(event)}
        ></Input>
        <Button
          disabled={disabled}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default MyForm;
