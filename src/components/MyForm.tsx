import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import { RootState } from "../store";
import { addUserSlice, edithUserSlice } from "../redux/slice/UsersSlice";
import { setUserSlice } from "../redux/slice/UserSlice";
import { type UserState } from "../types";

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

    user.id === "0"
      ? dispatch(addUserSlice({ ...user, id: nanoid(8) }))
      : dispatch(edithUserSlice(user));

    // Reset form fields:
    dispatch(
      setUserSlice({
        id: "0",
        name: "",
        emil: "",
        password: "",
      })
    );

    console.log("user:  submitting", user);
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
          placeholder="EnterYour Name"
          name="name"
          value={user?.name || ""}
          fullWidth
          onChange={(event) => handleChange(event)}
        ></Input>
        <Input
          placeholder="Enter Your Email Address"
          name="email"
          value={user?.email || ""}
          fullWidth
          onChange={(event) => handleChange(event)}
        ></Input>
        <Input
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
