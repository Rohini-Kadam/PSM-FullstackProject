import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function loginUser(data) {
    axios
      .post("http://localhost:4000/auth/login", null, {
        params: {
          username: data.username,
          password: data.password,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("auth", "true");
          navigate("/addproduct");
        }
      })
      .catch(() => alert("Invalid credentials"));
  }

  return (
    <div className="container w-25 p-5">
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={handleSubmit(loginUser)} className="border p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
