import React from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/images/welcome.png";
import Dropdown from "./common/Dropdown";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail, IoMdTime } from "react-icons/io";
import { GiDwarfFace } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { Bar, CircleChart } from "react-charts-sm";

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

  const barChartData = [
    {
      percent: "92",
      title: "Algorithms structures",
    },
    {
      percent: "83",
      title: "Object program",
    },
    {
      percent: "78",
      title: "Database program",
    },
    {
      percent: "97",
      title: "Web develop",
    },
  ];

  const doughnutData = [
    {
      percent: "92",
      title: "Algorithms structures",
    },
    {
      percent: "83",
      title: "Object program",
    },
    {
      percent: "78",
      title: "Database program",
    },
    {
      percent: "97",
      title: "Web develop",
    },
    {
      percent: "96",
      title: "Mobile application",
    },
    {
      percent: "89",
      title: "Machine learning",
    },
  ];

  return (
    <section className="dashboard mt-4">
      <div className="row">
        <div className="col-xl-8 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12 mt-3">
              <div className="card card-2">
                <div className="card-body p-4">
                  <div className="row justify-content-between welome-card">
                    <div className="col-lg-5 col-md-5 col-sm-9">
                      <div className="d-flex flex-column row-gap-3">
                        <h5 className="mb-0 fw-bold">Hello Grace!</h5>
                        <p className="mb-0 fs-15 fw-500 ws-1">
                          You have 3 new tasks. It is a lot of work for today!
                          So let's start!
                        </p>
                        <Link
                          to="#/!"
                          className="text-decoration-underline fs-14 a-color"
                        >
                          review it
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-9  position-relative">
                      <div className="welcome-image position-absolute">
                        <img className="" src={welcome} alt="welcome-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-12 mt-3">
              <div className="d-flex justify-content-between mb-2 mx-3">
                <h6 className="text-capitalize fw-semibold">performance</h6>
                <Dropdown listData={months} />
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="performance d-flex flex-column gap-2">
                    <p className="mb-0 fw-semibold">The best lessons:</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 align-items-center my-2">
                        <h2 className="fw-bold mb-0">95.4</h2>
                        <p className="mb-0 fs-13 lh-1">
                          Introduction <br /> to programming
                        </p>
                      </div>
                      <button className="rounded-pill px-3 border fs-14 border-secondary border-1">
                        All lessons
                      </button>
                    </div>
                    <div className="bar-chart mt-3 d-flex">
                      {barChartData.map((barData) => (
                        <Bar
                          key={barData.title}
                          value={barData.percent}
                          label={barData.title}
                          barColor={"#5a77df"}
                          barFillColor={"#3e53a0"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4 mb-1 mx-3">
                <h6 className="fw-bold">Linked Teachers</h6>
                <Link to="#" className="a-color fs-14">
                  See all
                </Link>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="teachers d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHM7H8vIFKCzzGtpl4U4llxdB7tFHhPpSrJdIa_AcbEugFKhu_u7OL4gNBWgqDJJgMLPw&usqp=CAU"
                        alt="mentor-image"
                      />
                      <div>
                        <p className="mb-0 fs-15 fw-bold text-capitalize">
                          mary johnson(mentor)
                        </p>
                        <p className="mb-0 text-capitalize fs-12">science</p>
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
                  <div className="teachers d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src="https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121"
                        alt="mentor-image"
                      />
                      <div>
                        <p className="mb-0 fs-15 fw-bold text-capitalize">
                          james brown
                        </p>
                        <p className="mb-0 text-capitalize fs-12">
                          foreign language (Chinese)
                        </p>
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

            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mt-3">
              <div className="d-flex justify-content-between mb-2 visit mx-3">
                <h6 className="fw-bold">My visit</h6>
                <Dropdown listData={months} />
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center row-gap-4 flex-wrap">
                    {doughnutData.map((chartData) => (
                      <div
                        key={chartData.title}
                        className="w-50 d-flex flex-column justify-content-center align-items-center"
                      >
                        <CircleChart
                          radius={50}
                          strokeWidth={20}
                          percentage={chartData.percent}
                          // label={chartData.title}
                          progressColor="#5a77df"
                        />
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
        <div className="col-xl-4 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="calender d-flex flex-column gap-3">
                    <div className="calender-header d-flex justify-content-between">
                      <h6 className="text-capitalize fw-semibold">calender</h6>
                      <Dropdown listData={days} />
                    </div>

                    <div className="calender-active-box d-flex gap-4 align-items-center mb-4">
                      <div className="d-flex flex-column gap-3">
                        <p className="mb-0 fs-13">10:00</p>
                        {/* <p className="mb-0 fs-13">10:30</p> */}
                      </div>

                      <div className="d-flex align-items-center gap-3 p-3 event-box-active w-100">
                        <div className="eventImg d-flex justify-content-center align-items-center">
                          <GiDwarfFace />
                        </div>
                        <div className="d-flex flex-column gap-1">
                          <p className="mb-0 fw-semibold fs-15 text-nowrap">
                            Electronics lesson
                          </p>
                          <p className="mb-0 fs-12 align-items-center d-flex gap-1 ws-1">
                            <IoMdTime />
                            9.45 - 10.30, 21 lesson
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="event-top-border"></div>

                    <div className="d-flex gap-4 align-items-center">
                      <div className="d-flex flex-column gap-3">
                        <p className="mb-0 fs-13">11:00</p>
                        <p className="mb-0 fs-13">11:30</p>
                      </div>

                      <div className="d-flex align-items-center gap-3 p-3 event-box w-100 ">
                        <div className="eventImg d-flex justify-content-center align-items-center"></div>
                        <div className="d-flex flex-column gap-1">
                          <p className="mb-0 fw-semibold fs-15 text-nowrap">
                            Electronics lesson
                          </p>
                          <p className="mb-0 fs-12 align-items-center d-flex gap-1 ws-1">
                            <IoMdTime />
                            11.00 - 11.30, 23 lesson
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-4 align-items-center">
                      <div className="d-flex flex-column gap-3">
                        <p className="mb-0 fs-13">12:00</p>
                        <p className="mb-0 fs-13">12:30</p>
                      </div>

                      <div className="d-flex align-items-center gap-3 p-3 event-box w-100">
                        <div className="eventImg d-flex justify-content-center align-items-center"></div>
                        <div className="d-flex flex-column gap-1">
                          <p className="mb-0 fw-semibold fs-15 text-nowrap">
                            Robotic lesson
                          </p>
                          <p className="mb-0 fs-12 align-items-center d-flex gap-1 ws-1">
                            <IoMdTime />
                            12.00 - 12.45, 23 lesson
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-4 align-items-center">
                      <div className="d-flex flex-column gap-3">
                        <p className="mb-0 fs-13">13:00</p>
                        <p className="mb-0 fs-13">13:30</p>
                      </div>

                      <div className="d-flex align-items-center gap-3 p-3 event-box w-100">
                        <div className="eventImg d-flex justify-content-center align-items-center"></div>
                        <div className="d-flex flex-column gap-1">
                          <p className="mb-0 fw-semibold fs-15 text-nowrap">
                            C++ lesson
                          </p>
                          <p className="mb-0 fs-12 align-items-center d-flex gap-1 ws-1">
                            <IoMdTime />
                            13.45 - 14.30, 21 lesson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="my-3 upcoming-events">
                <div className="d-flex justify-content-between mt-4 mb-1 mx-3">
                  <h6 className="fw-bold">Upcoming events</h6>
                  <Link to="#" className="a-color fs-14">
                    See all
                  </Link>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="teachers events mb-2 d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHM7H8vIFKCzzGtpl4U4llxdB7tFHhPpSrJdIa_AcbEugFKhu_u7OL4gNBWgqDJJgMLPw&usqp=CAU"
                          alt="mentor-image"
                        />
                        <div className="d-flex flex-column gap-2">
                          <p className="mb-0 fw-bold fs-14 lh-1">
                            The main event in your life "Robot Fest" will coming
                            soon in...
                          </p>

                          <div className="d-flex gap-3 ws-1">
                            <p className="mb-0 fs-12">14 December 2024</p>
                            <p className="mb-0 fs-12">12:00 pm</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-2 align-self-end">
                        <HiDotsVertical />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="teachers events mb-2 d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          src="https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121"
                          alt="mentor-image"
                        />
                        <div className="d-flex flex-column gap-2">
                          <p className="mb-0 fw-bold fs-14 lh-1">
                            Webinar of new tools in Minecraft
                          </p>

                          <div className="d-flex gap-3 ws-1">
                            <p className="mb-0 fs-12">21 December 2024</p>
                            <p className="mb-0 fs-12">11:00 pm</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-2 align-self-end">
                        <HiDotsVertical />
                      </div>
                    </div>
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
