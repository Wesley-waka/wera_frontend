import React, { useState, useEffect } from "react";
import axios from "axios";

const Experience = () => {
  const [id, setId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEdit = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const [isAddingExpereinceModalOpen, setIsAddingExperienceModalOpen] =
    useState(false);

  const toggleAddExperience = () => {
    setIsAddingExperienceModalOpen(!isAddingExpereinceModalOpen);
  };

  const [experienceData, setExperienceData] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    company: "",
    job_description: "",
  });

  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    // console.log(jsId);
    setId(jsId);
  }, []);

  // let applications = profileData.applications;
  useEffect(() => {
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${id}/experiences`).then(
        (res) => {
          if (res.ok) {
            res.json().then((data) => {
              setExperienceData(data);
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

  async function handleAddExperience(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://rails-d0vf.onrender.com/profiles/${id}/experiences/`,
        formData
      );
      setExperienceData([...experienceData, response.data]);
      setFormData({
        year: "",
        company: "",
        job_description: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteExperience() {
    try {
      await axios.delete(
        `https://rails-d0vf.onrender.com/profiles/${id}/experiences/${id}`
      );
      setExperienceData(
        experienceData.filter((experience) => experience.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateExperience(updatedData) {
    try {
      const response = await axios.patch(
        `https://rails-d0vf.onrender.com/profiles/${id}/experiences/${id}`,
        updatedData
      );
      setExperienceData(
        experienceData.length > 0
          ? experienceData.map((experience) =>
              experience.id === id ? response.data : experience
            )
          : []
      );
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <>
      {isAddingExpereinceModalOpen ? (
        <section className="max-w-4xl p-6 mx-auto justify-center text-center items-center  rounded-md ">
          <form
            onSubmit={handleAddExperience}
            className="bg-[#0D2644] text-white  rounded p-8  mt-2"
          >
            <h3 className="top-1 ">New Experience</h3>
            <div className="mb-4">
              <label className="block font-bold">Year:</label>
              <input
                className="border bg-dark rounded px-2 py-1 w-full"
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Company:</label>
              <input
                className="border bg-dark rounded px-2 py-1 w-full"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Job Description:</label>
              <input
                className="border bg-dark rounded px-2 py-1 w-full"
                type="text"
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              type="submit"
            >
              Add
            </button>
            <button
              type="button"
              className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={toggleAddExperience}
            >
              Cancel
            </button>
          </form>
        </section>
      ) : (
        <div>
          <div className="flex flex-col p-2 items-center justify-center">
            <h1 className="text-4xl mb-4">Experience</h1>
            <button
              className=" text-white px-4 py-2 rounded"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,1), #0D2644)",
              }}
              onClick={toggleAddExperience}
            >
              Add
            </button>
          </div>
          <div className="space-y-4  w-2/3 mx-auto block">
            {/* Render experience data */}
            <div></div>
            {experienceData.map((experience) => (
              <div key={experience.id} className=" p-2 ">
                <div className="block rounded-xl border bg-[#0D2644] shadow-xl sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                    <p className="font-bold">Company: {experience.company}</p>
                    <p className="">Year:{experience.year}</p>
                  </h3>

                  <p className="mt-4 text-sm text-gray-300">
                    Job Description:{experience.job_description}
                  </p>
                  <div className="flex justify-center gap-2">
                    <button
                      className="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                      onClick={() => handleDeleteExperience(experience.id)}
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
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={toggleEdit}
                    >
                      Edit
                    </button> */}
                  </div>

                  {isEditModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                          className="fixed inset-0 transition-opacity"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
                        </div>

                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>

                        <div
                          className="inline-block align-bottom bg-[#0D2644] rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                          role="dialog"
                          aria-modal="true"
                          aria-labelledby="modal-headline"
                        >
                          {/* Edit form content */}
                          <form
                            onSubmit={handleUpdateExperience}
                            className=" rounded p-3 mt-4"
                          >
                            <input
                              type="text"
                              name="comapny"
                              placeholder="Company"
                              value={formData.company}
                              onChange={handleChange}
                              className="bg-dark placeholder-white rounded p-2 mb-2"
                            />
                            <input
                              type="text"
                              name="year"
                              placeholder="Year"
                              value={formData.year}
                              onChange={handleChange}
                              className="bg-dark placeholder-white  rounded p-2 mb-2"
                            />
                            <input
                              type="text"
                              name="job_description"
                              placeholder="Job Description"
                              value={formData.job_description}
                              onChange={handleChange}
                              className="bg-dark placeholder-white  rounded p-2 mb-2"
                            />
                          </form>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            type="submit"
                          >
                            Update
                          </button>
                          <button
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
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
