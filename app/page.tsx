"use client";
import Image from "next/image";
import AlukasLogo from "./components/AlukasLogo/AlukasLogo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/auth";
      const { data: res } = await axios.post(url, data);
      setCookie("token", res.data, { maxAge: 60 * 60 * 24 });
      window.location.href = "/home";
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <section className="gradient-form max-w-[1440px] mx-auto h-screen">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <div className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        <AlukasLogo />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>

                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="submit"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>
                      </div>

                      {error && (
                        <div className="text-red-500 text-center">{error}</div>
                      )}

                      <div className="flex items-center justify-between pb-6">
                        <p
                          onClick={() => router.push("/register")}
                          className="mb-0 me-2 cursor-pointer"
                        >
                          Don't have an account?
                        </p>
                        <button
                          onClick={() => router.push("/register")}
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">Alukas !</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
