import React from "react";
import course_learn from "../assets/img/course_learn.png";
import course_learn_bg from "../assets/img/course_learn_bg.png";
import { FaInstagram } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchoolCircleExclamation } from "react-icons/fa6";
const CourseLearn = () => {
  return (
    <div className="w-screen lg:my-16 my-8  text-white relative">
      <div
        className="flex justify-center relative lg:py-12 py-6 w-full gap-6 mx-auto flex-col h-screen"
        style={{
          backgroundImage: `url(${course_learn_bg})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold text-center absolute top-20 left-1/2 -translate-x-1/2">
          What will you learn?
        </h1>
        <div className="flex w-full justify-center items-center gap-12 p-4 rounded-2xl">
          <div className="flex gap-10">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center -left-4 top-4 relative before:absolute before:top-1  before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative top-8 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center -left-4 top-4 relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative top-8 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center translate-y-5">
            <img src={course_learn} alt="" className="rounded-full" />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-8">
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center -right-4 top-4 relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative top-8 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative -right-4 top-4 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
              <div className="rounded-lg p-6 flex gap-4 bg-[#1d1d1d] justify-center items-center relative top-8 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-primary before:-z-[1]  before:content-[''] before:rounded-lg ">
                <FaInstagram className="size-10" />
                <p className="">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaSchoolCircleExclamation />}
  />
</VerticalTimeline>
      </div>
    </div>
  );
};

export default CourseLearn;
