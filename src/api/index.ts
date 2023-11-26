import axios from "axios";
import { type UserState } from "../types";

const BASE_URL = "http://localhost:8000";

export const getUsersAPI = async () => await axios.get(`${BASE_URL}/users`);

export const getUserByIdAPI = async (id: string) =>
  await axios.get(`${BASE_URL}/users/${id}`);

export const createUserAPI = async (user: UserState) =>
  await axios.post(`${BASE_URL}/users`, user);

export const updateUserAPI = async (user: UserState) =>
  await axios.put(`${BASE_URL}/users/${user.id}`, user);

export const deleteUserByIdAPI = async (id: string) =>
  await axios.delete(`${BASE_URL}/users/${id}`);
