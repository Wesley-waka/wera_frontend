import React, { useState, useEffect } from "react";
import axios from "axios";

const Education = () => {
  const [id, setId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEdit = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const [isAddingEducation, setIsAddingEducation] = useState(false);

  const toggleAddEducation = () => {
    setIsAddingEducation(!isAddingEducation);
  };

  const [educationData, setEducationData] = useState([]);
  const [formData, setFormData] = useState({
    year_of_admission: "",
    year_of_completion: "",
    institution: "",
    qualification: "",
  });

  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    // console.log(jsId);
    setId(jsId);
  }, []);

  // let applications = profileData.applications;
  useEffect(() => {
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${id}/educations`).then(
        (res) => {
          if (res.ok) {
            res.json().then((data) => {
              setEducationData(data);
              localStorage.setItem(
                "jobseekerName",
                JSON.stringify(data.full_name)
              );
            });
          }
        }
      );
    }
  }, [id]);

  async function handleAddEducation(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://rails-d0vf.onrender.com/profiles/${id}/educations/`,
        formData
      );
      setEducationData([...educationData, response.data]);
      setFormData({
        year_of_admission: "",
        year_of_completion: "",
        institution: "",
        qualification: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteEducation(id) {
    try {
      await axios.delete(
        `https://rails-d0vf.onrender.com/profiles/${id}/educations/${id}`
      );
      setEducationData(
        educationData.filter((education) => education.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateEducation(id, updatedData) {
    try {
      const formDataToUpdate = new FormData();
      formDataToUpdate.append("institution", updatedData.institution);
      formDataToUpdate.append("qualification", updatedData.qualification);
      formDataToUpdate.append(
        "year_of_admission",
        updatedData.year_of_admission
      );
      formDataToUpdate.append(
        "year_of_completion",
        updatedData.year_of_completion
      );

      const response = await axios.patch(
        `https://rails-d0vf.onrender.com/profiles/${id}/educations/${id}`,
        formDataToUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEducationData(
        educationData.map((education) =>
          education.id === id ? response.data : education
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      {isAddingEducation ? (
        <div className="flex">
          {/* Render form to add education */}

          <section className="max-w-4xl p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
            <form
              onSubmit={handleAddEducation}
              className="bg-dark text-white  rounded  mt-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.9), #0D2644)",
                padding: "70px",
              }}
            >
              <h3 className="top-1 ">New Education</h3>
              <label className="block mb-2">
                Year of admission:
                <input
                  className="border  rounded bg-black py-2 px-3"
                  type="text"
                  name="year_of_admission"
                  value={formData.year_of_admission}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Year of completion:
                <input
                  className="border rounded bg-black bg-dark py-2 px-3"
                  type="text"
                  name="year_of_completion"
                  value={formData.year_of_completion}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Institution:
                <input
                  className="border rounded bg-black py-2 px-3"
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Qualification:
                <input
                  className="border  rounded bg-black  py-2 px-3"
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                />
              </label>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Add
              </button>
              <button
                type="button"
                className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={toggleAddEducation}
              >
                Cancel
              </button>
            </form>
          </section>
        </div>
      ) : (
        <section className="justify-center items-center ">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-4xl ">Education</h1>
            <button
              type="button"
              className="text-white bg-black font-bold py-2 px-4 rounded"
              onClick={toggleAddEducation}
            >
              Add
            </button>
          </div>

          {/* Render education data */}
          <div className="grid grid-cols-3 mx-auto w-2/3 gap-3">
            {educationData.map((education) => (
              <div key={education.id} className=" rounded p-4 mb-4">
                <div className="text-white">
                  <section className="w-full sm:w-64 mx-auto bg-[#0a1f38] rounded-2xl px-8 py-6 shadow-lg h-auto sm:h-100">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 ">
                      <p>Start Year: {education.year_of_admission}</p>
                      <p>Year of completion: {education.year_of_completion}</p>
                      <p>Institution: {education.institution}</p>
                      <p>Qualification: {education.qualification}</p>
                    </div>
                    <div className="flex justify-center gap-1 p-2 mt-4">
                      <div className="mt-3 text-white text-sm">
                        {/* <button
                          className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                          onClick={toggleEdit}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                          </svg>
                          Edit
                        </button> */}
                      </div>

                      <div className="mt-3 text-white text-sm">
                        <button
                          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                          onClick={() => handleDeleteEducation(education.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                {isEditModalOpen && (
                  <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                      </div>

                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>

                      <div
                        className="inline-block align-bottom bg-[#0D2644] rounded-lg px-4 pt-2 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                      >
                        {/* Edit form content */}

                        <form className=" rounded p-3 mt-4">
                          <input
                            type="text"
                            name="year_of_admission"
                            placeholder="Year of Admission"
                            value={formData.year_of_admission}
                            onChange={handleChange}
                            className="bg-dark placeholder-white rounded p-2 mb-2"
                          />
                          <input
                            type="text"
                            name="year_of_completion"
                            placeholder="Year of Completion"
                            value={formData.year_of_completion}
                            onChange={handleChange}
                            className="bg-dark placeholder-white  rounded p-2 mb-2"
                          />
                          <input
                            type="text"
                            name="institution"
                            placeholder="Institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="bg-dark placeholder-white  rounded p-2 mb-2"
                          />
                          <input
                            type="text"
                            name="qualification"
                            placeholder="Qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            className="bg-dark placeholder-white  rounded p-2 mb-2"
                          />
                        </form>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() =>
                            handleUpdateEducation(
                              educationData.id,
                              educationData
                            )
                          }
                        >
                          Update
                        </button>

                        <button
                          type="button"
                          className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                          onClick={toggleEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Education;
