"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import Navbar from "@/components/Navbar";
import Swal from "sweetalert2";

// export const metadata = {
//   title: "Edit - Coding Challenge",
//   description: "Developed by Dominic Azuka",
// };

export default function Edit() {
  const router = useRouter();
  const searchBar = window.location.search;
  // Parse the query string into an object
  const params = new URLSearchParams(searchBar);
  // Create an empty object to store the key-value pairs
  const queryParams = {};
  // Iterate over the parameters and populate the object
  for (const [key, value] of params) {
    queryParams[key] = value;
  }
  const [name, setName] = useState(queryParams.name || "");
  const [userSector, setUserSector] = useState("");
  const [sectors, setSectors] = useState([]);
  const [agree, setAgree] = useState(queryParams.terms || "true");
  const [loading, setLoading] = useState(false);
  const [loadingSectors, setLoadingSectors] = useState(false);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        setLoadingSectors(true);
        const response = await fetch("/api/sector", { method: "GET" });
        const data = await response.json();
        setSectors(data[0].sectors);
        setLoadingSectors(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error fetching sectors!",
          footer: "Please try again..",
          confirmButtonColor: "#3C4043"
        });
        console.error("Error fetching sectors:", error);
      }
    };

    fetchSectors();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSectorsChange = (e) => {
    const selectedOption = e.target.selectedOptions[0].text;
    setUserSector(selectedOption);
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your name.",
        footer: "Please try again..",
        confirmButtonColor: "#3C4043"
      });
      return setLoading(false);
    }
    if (userSector === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please choose your sector.",
        footer: "Please try again..",
        confirmButtonColor: "#3C4043"
      });
      return setLoading(false);
    }
    if (!agree) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please check the checkbox.",
        footer: "Please try again..",
        confirmButtonColor: "#3C4043"
      });
      return setLoading(false);
    }
    try {
      const response = await fetch("/api/user/new", {
        method: "PUT",
        body: JSON.stringify({
          _id: queryParams._id,
          name: name,
          sector: userSector,
          terms: true,
        }),
      });
      if (response.ok) {
        Swal.fire({
          title: "User Updated Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonColor: "#3C4043"
        });
        router.push("/");
      } else {
        alert("Error Updating user Data, Please try again...");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error Updating user Data",
          footer: "Please try again..",
          confirmButtonColor: "#3C4043"
        });
        setLoading(false);
      }
    } catch (e) {
      console.log("client error", e);
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Please edit your current selection.
            </label>

            <form onSubmit={handleSubmit}>
              <label className="block text-sm font-medium leading-6 text-gray-900 mt-3">
                Name:
                <input
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900 mt-4"
              >
                Sectors
              </label>
              {loadingSectors ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <select
                id="sector"
                name="sector"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={userSector}
                onChange={handleSectorsChange}
              >
                <option>Select an option</option>
                {sectors.map((sector) => (
                  <option key={sector._id} value={sector.name}>
                    {sector.name}
                  </option>
                ))}
              </select>
            )}
              <label className="block text-sm font-medium leading-6 text-gray-900 mt-3">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={handleAgreeChange}
                />{" "}
                Agree to terms
              </label>
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : null}
              <Button
                href="#"
                className="bg-green-800 text-white mt-5 mr-5"
                onClick={handleSubmit}
              >
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
