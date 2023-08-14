import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [id, setId] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedtags, setSelectedTags] = useState([]);
  // const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    date_of_birth: "",
    biography: "",
    skills: "",
    profile_pic: "",
    resume: "",
  });

  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    // console.log(jsId);
    setId(jsId);
  }, []);

  useEffect(() => {
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${id}`).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setProfileData(data);

            localStorage.setItem(
              "jobseekerName",
              JSON.stringify(data.full_name)
            );
          });
        }
      });
    }
  }, [id]);

  async function handleUpdateProfile(event) {
    event.preventDefault();
    // const formDataToUpdate = new FormData();
    //   formDataToUpdate.append("phone_number", formData.phone_number);
    //   formDataToUpdate.append("email_address", formData.email_address);
    //   formDataToUpdate.append("date_of_birth", formData.date_of_birth);
    //   formDataToUpdate.append("biography", formData.biography);
    //   formDataToUpdate.append("skills", formData.skills);
    //   formDataToUpdate.append("tags", selectedtags);
    // console.log(formDataToUpdate);
    // console.log({...formData, tags:selectedtags})
    fetch(`https://rails-d0vf.onrender.com/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, tags: selectedtags }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/jobseeker");
        // handle the response from the server or store
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });

    // try {
    //   const formDataToUpdate = new FormData();
    //   formDataToUpdate.append("phone_number", formData.phone_number);
    //   formDataToUpdate.append("email_address", formData.email_address);
    //   formDataToUpdate.append("date_of_birth", formData.date_of_birth);
    //   formDataToUpdate.append("biography", formData.biography);
    //   formDataToUpdate.append("skills", formData.skills);
    //   formDataToUpdate.append("tags", selectedtags);
    //   if (formData.profile_pic !== "") {
    //     formDataToUpdate.append("profile_pic", formData.profile_pic);
    //   }
    //   if (formData.resume !== "") {
    //     formDataToUpdate.append("resume", formData.resume);
    //   }

    //   const response = await axios.patch(

    //     `https://rails-d0vf.onrender.com/profiles/${id}`,
    //     formDataToUpdate,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(response.data)
    //   setProfileData(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/tags`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setTags(data);
        });
      }
    });
  }, []);
  function handleChecked(event) {
    if (event.target.checked == true) {
      setSelectedTags([...selectedtags, event.target.name]);
    } else {
      let found = selectedtags.filter((tag) => tag !== event.target.name);
      setSelectedTags(found);
    }
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  console.log(selectedtags);
  return (
    <>
      {isEditing ? (
        <div>
          <section className="max-w-4xl p-6 mx-auto  rounded-md   mt-20">
            <h2 className="text-lg font-semibold text-black capitalize dark:text-white">
              Edit Profile
            </h2>

            <form
              onSubmit={handleUpdateProfile}
              encType="multipart/form-data"
              className="bg-dark text-white rounded p-4 mt-4"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.9), #0D2644)",
              }}
            >
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-white dark:text-gray-200" for="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    id="phone"
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="text"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-white dark:text-gray-200" for="date">
                    Date of Birth
                  </label>
                  <input
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    id="date"
                    type="date"
                    className="block w-full px-4 py-2 mt-2 text-white  bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-white dark:text-gray-200" for="skill">
                    Skills
                  </label>
                  <input
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    id="skill"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    for="biography"
                  >
                    Biography
                  </label>
                  <textarea
                    name="biography"
                    value={formData.biography}
                    onChange={handleChange}
                    id="biography"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    for="profile_pic"
                  >
                    Profile Pic
                  </label>
                  <input
                    name="profile_pic"
                    value={formData.profile_pic}
                    onChange={handleChange}
                    id="profile_pic"
                    type="file"
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* <div>
                  <label className="text-white dark:text-gray-200">
                    Tagsss
                  </label>
                  <div className="flex flex-wrap mt-2">
                    {profileData.tags &&
                      profileData.tags.map((tag, index) => (
                        <div key={index} className="mr-4">
                          <input
                            type="text"
                            name="tags"
                            value={formData.tags.name}
                            onChange={(event) => handleChange(event, tag)}
                            id={`tag-${tag.id}`}
                          />
                        </div>
                      ))}
                  </div>
                </div> */}
                <div>
                  <label className="text-white w-full dark:text-gray-200">
                    Choose Industry
                  </label>
                  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:text-white grid grid-cols-1 md:grid-cols-2">
                    {tags &&
                      tags.map((tag, index) => (
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <input
                              id="react-checkbox-list"
                              type="checkbox"
                              value=""
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
                </div>

                {/* <div>
                  <label className="text-white dark:text-gray-200" for="resume">
                    Resume
                  </label>
                  <input
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    id="resume"
                    type="file"
                    className="block w-full px-4 py-2 mt-2 text-white bg-dark border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div> */}
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Update Profile
                </button>
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={toggleEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <div>
          <div>
            <section className=" relative block h-500-px">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.8)),  url('https://cdni.iconscout.com/illustration/premium/thumb/jobs-2061801-1737083.png?f=webp')",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                ></svg>
              </div>
            </section>
            <section className="relative py-16 ">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-[#0D2644] w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                          <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=2000"
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                    </div>
                    <div className="text-center mt-12 ">
                      <h3 className="text-4xl font-semibold leading-normal text-white mb-2 ">
                        <p className="font-bold">{profileData.full_name}</p>
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-transparent text-white rounded-lg p-4">
                          <div className="text-sm leading-normal mb-2 font-bold lowercase">
                            <i className="fas fa-mail-bulk mr-2 text-lg text-white"></i>
                            <p>Email: {profileData.email_address}</p>
                          </div>
                          <div className="mb-2 text-sm leading-normal font-bold lowercase">
                            <i className="fas fa-phone mr-2 text-lg text-white"></i>
                            <p>Phone number: {profileData.phone_number}</p>
                          </div>
                          <div className="mb-2 text-sm leading-normal font-bold lowercase">
                            <i className="fas fa-calendar-alt mr-2 text-lg text-white"></i>
                            <p>Date of birth: {profileData.date_of_birth}</p>
                          </div>

                          <div className="mb-2 text-sm leading-normal font-bold lowercase">
                            <p>
                              Industry
                              <ul>
                                {profileData.tags &&
                                  profileData.tags.map((tag, index) => (
                                    <li key={index}>{tag.name}</li>
                                  ))}
                              </ul>
                            </p>
                          </div>
                        </div>
                        <div className="bg-transparent rounded-lg font-bold text-white p-4">
                          <div className="text-sm leading-normal mb-2  lowercase">
                            <i className="fas fa-tasks mr-2 text-lg text-white"></i>
                            <p>Skills: {profileData.skills}</p>
                          </div>
                          <div className="mb-2 text-sm leading-normal text-white lowercase">
                            <i className="fas fa-info-circle mr-2 text-lg text-white"></i>
                            <p>Biography: {profileData.biography}</p>
                          </div>
                          <div className="mb-2 text-sm leading-normal text-white  lowercase">
                            <i className="fas fa-file-pdf mr-2 text-lg text-white"></i>
                            <p>Resume: {profileData.resume}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-3 justify-center items-center">
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={toggleEdit}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
