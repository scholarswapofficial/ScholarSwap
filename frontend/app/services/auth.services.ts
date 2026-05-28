import axios from "axios";

import type {
  LoginInput,
  RegisterInput,
} from "@/schemas/auth.schema";

/* -------------------------------------------------------------------------- */
/*                                API CONFIG                                  */
/* -------------------------------------------------------------------------- */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */

export const loginUser = async (
  data: LoginInput
) => {
  const response = await axios.post(
    `${API_URL}/auth/login`,
    data,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               REGISTER USER                                */
/* -------------------------------------------------------------------------- */

export const registerUser = async (
  data: RegisterInput
) => {
  const response = await axios.post(
    `${API_URL}/auth/register`,
    data,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                LOGOUT USER                                 */
/* -------------------------------------------------------------------------- */

export const logoutUser = async () => {
  const response = await axios.post(
    `${API_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};
