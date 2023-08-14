import { useState, useEffect } from "react";
import "../AddJob.css";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedtags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    qualifications: "",
    responsibilities: "",
    cut_off: "",
    job_type: "",
    estimated_salary: "",
    application_deadline: "",
    cut_off: "",
  });
  useEffect(() => {
    const employerId = localStorage.getItem("employerId");
    setId(employerId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/tags`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setTags(data);
        });
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://rails-d0vf.onrender.com/opportunities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        tags: selectedtags,
        employer_id: parseInt(id, 10),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/company/jobs");
        // handle the response from the server or store
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });
  };

  function handleChecked(event) {
    if (event.target.checked == true) {
      setSelectedTags([...selectedtags, event.target.name]);
    } else {
      let found = selectedtags.filter((tag) => tag !== event.target.name);
      setSelectedTags(found);
    }
  }
  function handleSub(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-10/12 px-4 mx-auto mt-6 text-left">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Post a Job
                </h6>
                <button
                  className="text-white active:bg-blue-950 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 theme-blue"
                  type="submit"
                  onClick={handleSubmit}
                >
                  POST
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Job Details
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="title"
                      >
                        Title
                      </label>
                      <input
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="application_deadline"
                      >
                        Application deadline
                      </label>
                      <input
                        type="datetime-local"
                        id="application_deadline"
                        name="application_deadline"
                        value={formData.application_deadline}
                        onChange={handleChange}
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="job_type"
                      >
                        Job type
                      </label>
                      <select
                        id="job_type"
                        name="job_type"
                        value={formData.job_type}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        required
                      >
                        <option value="">Select </option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Freelance">Freelance</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="cut-off"
                      >
                        Number of Applicant required
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="cut_off"
                        name="cut_off"
                        value={formData.cut_off}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="estimagted_salary"
                      >
                        Estimated salary
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="estimated_salary"
                        name="estimated_salary"
                        value={formData.estimated_salary}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  MORE DETAILS ABOUT THE JOB
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="description"
                      >
                        Description
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="3"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="qualification"
                      >
                        Qualification
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="3"
                        id="qualifications"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="responsibilities"
                      >
                        Responsibilities
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="3"
                        id="responsibilities"
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="industry"
                      >
                        Select the industry/ industries the job belongs to
                      </label>
                      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:text-white grid grid-cols-1 md:grid-cols-3">
                        {tags === []
                          ? null
                          : tags.map((tag) => (
                              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                  <input
                                    id="react-checkbox-list"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    onChange={handleChecked}
                                    name={tag.id}
                                  />
                                  <label
                                    for="react-checkbox-list"
                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    {tag.name}
                                  </label>
                                </div>
                              </li>
                            ))}
                      </ul>
                      <p className="text-red-600 text-sm">
                        Note! It is important to select the industry under which
                        this job falls under to get the right applications
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;
