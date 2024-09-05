import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/images/welcome.png";
import Dropdown from "./common/Dropdown";
import DoughnutChart from "./common/DoughnutChart";
import BarChart from "./common/BarChart";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

const Dashboard = () => {
  const months = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Yesterday", "Today"];

  const doughnutData = [
    {
      percent: "92%",
      title: "Algorithms structures",
    },
    {
      percent: "83%",
      title: "Object program",
    },
    {
      percent: "78%",
      title: "Database program",
    },
    {
      percent: "97%",
      title: "Web develop",
    },
    {
      percent: "96%",
      title: "Mobile application",
    },
    {
      percent: "89%",
      title: "Machine learning",
    },
  ];

  return (
    <section className="dashboard mt-4">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8">
          <div className="row">
            <div className="col-xl-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center gap-4">
                    <div className="">
                      <h5>Hello Grace!</h5>
                      <p className="mb-0">
                        You have 3 new tasks. It is a lot of work for today! So
                        let's start
                      </p>
                      <Link to="#/!" className="text-decoration-underline">
                        review it
                      </Link>
                    </div>
                    <div className="welcome-image">
                      <img
                        className="img-fluid"
                        src={welcome}
                        alt="welcome-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 mt-3">
              <div className="d-flex justify-content-between mb-2">
                <h6 className="text-capitalize fw-semibold">performance</h6>
                <Dropdown listData={months} />
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="performance">
                    <p className="mb-0 fw-semibold">The best lessons:</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 align-items-center">
                        <h2>95.4</h2>
                        <p className="mb-0">
                          Introduction <br /> to programming
                        </p>
                      </div>
                      <button className="rounded px-2">All lessons</button>
                    </div>
                    <div className="bar-chart mt-3">
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4 mb-1">
                <h6 className="fw-semibold">Teachers</h6>
                <Link to="#">See all</Link>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="teachers mb-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHM7H8vIFKCzzGtpl4U4llxdB7tFHhPpSrJdIa_AcbEugFKhu_u7OL4gNBWgqDJJgMLPw&usqp=CAU"
                        alt="mentor-image"
                      />
                      <div>
                        <p className="mb-0 fw-semibold text-capitalize">
                          mary johnson(mentor)
                        </p>
                        <p className="mb-0 text-capitalize">science</p>
                      </div>
                    </div>

                    <div className="d-flex gap-2 align-self-end">
                      <span>
                        <IoMdMail />
                      </span>
                      <span>
                        <BiSolidPhoneCall />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="teachers mb-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src="https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121"
                        alt="mentor-image"
                      />
                      <div>
                        <p className="mb-0 fw-semibold text-capitalize">
                          mary johnson(mentor)
                        </p>
                        <p className="mb-0 text-capitalize">science</p>
                      </div>
                    </div>

                    <div className="d-flex gap-2 align-self-end">
                      <span>
                        <IoMdMail />
                      </span>
                      <span>
                        <BiSolidPhoneCall />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 mt-3">
              <div className="d-flex justify-content-between mb-2 visit">
                <h6 className="fw-semibold">My visit</h6>
                <Dropdown listData={months} />
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="row justify-content-between align-items-center">
                    {doughnutData.map((chartData) => (
                      <div key={chartData.title} className="col-xl-6">
                        <DoughnutChart chartData={chartData} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ------ */}
            </div>
          </div>
        </div>

        {/* calender */}
        <div className="col-xl-4 col-lg-4 col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="calender d-flex flex-column gap-3">
                <div className="calender-header d-flex justify-content-between">
                  <h6 className="text-capitalize fw-semibold">calender</h6>
                  <Dropdown listData={days} />
                </div>

                <div className="calender-active-box d-flex gap-4 align-items-center">
                  <p className="mb-0">10:00</p>

                  <div className="d-flex align-items-center gap-3 px-3 py-2 event-box-active w-100">
                    <div className="eventImg"></div>
                    <div>
                      <p className="mb-0 fw-semibold">Electronics lesson</p>
                      <p className="mb-0">9.45 - 10.30, 21 lesson</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-4 align-items-center">
                  <p className="mb-0">10:00</p>

                  <div className="d-flex align-items-center gap-3 px-3 py-2 event-box w-100">
                    <div className="eventImg"></div>
                    <div>
                      <p className="mb-0 fw-semibold">Electronics lesson</p>
                      <p className="mb-0">9.45 - 10.30, 21 lesson</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-4 align-items-center">
                  <p className="mb-0">10:00</p>

                  <div className="d-flex align-items-center gap-3 px-3 py-2 event-box w-100">
                    <div className="eventImg"></div>
                    <div>
                      <p className="mb-0 fw-semibold">Electronics lesson</p>
                      <p className="mb-0">9.45 - 10.30, 21 lesson</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-4 align-items-center">
                  <p className="mb-0">10:00</p>

                  <div className="d-flex align-items-center gap-3 px-3 py-2 event-box w-100">
                    <div className="eventImg"></div>
                    <div>
                      <p className="mb-0 fw-semibold">Electronics lesson</p>
                      <p className="mb-0">9.45 - 10.30, 21 lesson</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3 upcoming-events">
            <div className="d-flex justify-content-between mt-4 mb-1">
              <h6 className="fw-semibold">Upcoming events</h6>
              <Link to="#">See all</Link>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="teachers mb-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHM7H8vIFKCzzGtpl4U4llxdB7tFHhPpSrJdIa_AcbEugFKhu_u7OL4gNBWgqDJJgMLPw&usqp=CAU"
                      alt="mentor-image"
                    />
                    <div>
                      <p className="mb-0 fw-semibold">
                        The main event in your life "Robot Fest" will coming
                        soon in...
                      </p>

                      <div className="d-flex justify-content-evenly">
                        <p className="mb-0">14 December 2024</p>
                        <p className="mb-0">12:00 pm</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 align-self-end">
                    <span className="fs-1 three-dots">...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="teachers mb-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                    <img
                      src="https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121"
                      alt="mentor-image"
                    />
                    <div>
                      <p className="mb-0 fw-semibold">
                        Webinar of new tools in Minecraft
                      </p>

                      <div className="d-flex justify-content-evenly">
                        <p className="mb-0">21 December 2024</p>
                        <p className="mb-0">11:00 pm</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 align-self-end">
                    <span className="fs-1 three-dots">...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
