import React from "react";

const JobListing = () => {
  return (
    <div>
      <div className="job-description-section">
        <div className="header position-relative">
          <div className="jobcard-header position-relative">
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="logo-jobcard">
          <img
            src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className=""
          />
        </div>

        <div className="row mt-5 ps-2">
          <div className="col-3">
            <div className="card company-profile" style={{ width: 300 }}>
              <div className="card-body bluey text-light">
                <h2 className="card-title fw-bold mb-3">SAFARICOM</h2>
                <p className="text-left  mb-4">Date Posted: 4/12/2023</p>
                <p className="text-left  mb-4">Location: Nairobi</p>
                <p className="text-left  mb-4">Industry: Technology</p>
                <p className="text-left  mb-4">Estimated Salary:Ksh. 200,000</p>
                <p className="text-left  mb-4">
                  Application Deadline: 30/12/2023
                </p>
                <button className="text-dark py-2 px-3 mt-2 bg-light">
                  APPLY
                </button>
              </div>
            </div>
          </div>
          {/* main */}
          <div className="col-9">
            <div className="col-4">
              <div
                className="card js-card mb-4 text-left p-4"
                style={{ width: 1000 }}
              >
                <h4 className="fw-bold">Back End Developer</h4>
                <h4 className="fw-bold mt-4">About the company</h4>
                <p>
                  Safaricom is an innovative, customer-focused provider of
                  custom-built computing infrastructure platforms such as
                  network servers, storage, OEM/ODM appliances & embedded
                  systems. For more than 15 years, customer have trusted us for
                  our innovative problem solving combined with holistic design,
                  engineering, manufacturing, logistic and global support
                  services.
                </p>
                <h4 className="fw-bold mt-4">Job Description</h4>
                <p>
                  We are looking for a Back-End Engineer to design and develop
                  our SaaS platform that enables researchers to manage their
                  experiments, run machine learning models, evaluate their
                  performance, and explore the rich sets of biological data. In
                  this role, you will build maintainable and performant APIs and
                  data pipelines to enrich and interact with data from over half
                  a billion cells. You will work in an interdisciplinary team
                  composed of data scientists, bioinformaticians, biologists,
                  and software engineers to help solve hard problems that
                  improve biological research and ultimately, health outcomes,
                  across all of biology.
                </p>

                <h4 className="fw-bold mt-4">Responsibilities</h4>
                <ul>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Design and develop our SaaS platform
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Build maintainable and performant APIs and data pipelines
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Work in an interdisciplinary team composed of data
                    scientists, bioinformaticians, biologists, and software
                    engineers
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Help solve hard problems that improve biological research
                    and health outcomes
                  </li>
                </ul>
                <h4 className="fw-bold mt-4">Minimum Qualifications</h4>
                <ul>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    5+ years of experience building back-end web technologies
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Strong experience building multi-tenant SaaS applications on
                    the public cloud (AWS/GCP)
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Strong problem-solving, debugging, and analytical skills
                    with great attention to detail
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Experience working with relational databases such as
                    Postgres, MySQL
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Extensive programming experience in one or more
                    object-oriented languages
                  </li>
                  <li className="mt-2">
                    <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                    Strong experience with automated unit, integration, and
                    end-to-end testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="applicats-section-container">
        <h3>Applicants For this Job</h3>
        <div className="applicants-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Applicant</th>
              <th>View More</th>
            </tr>

            <tr>
              <td>8/15/17</td>
              <td>Courtney Kimani</td>
              <td>
                <link>View</link>
              </td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Billy Clinton</td>
              <td>
                <link>View</link>
              </td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Risper Aluoch</td>
              <td>
                <link>View</link>
              </td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Bill Simons</td>
              <td>
                <link>View</link>
              </td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Edgar Obare</td>
              <td>
                <link>View</link>
              </td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Reese Witherspoon</td>
              <td>
                <link>View</link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
