import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can also send this data to your backend using fetch or axios
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-4xl">Signup</h3>

              {/* Username */}
              <div className="mt-4 space-y-2">
                <span>Student Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter student name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-orange-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-orange-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Create a password</span>
                <br />
                <input
                  type="password"
                  placeholder="Create your password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-orange-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mt-4 space-y-2">
                <span>Confirm Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-orange-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Role Selection */}
              <div className="mt-4 space-y-2">
                <span>Select Role</span>
                <br />
                <select
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("role", { required: true })}
                >
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="student">Student</option>
                </select>
                {errors.role && (
                  <span className="text-sm text-orange-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Signup Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-orange-700 duration-200">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
