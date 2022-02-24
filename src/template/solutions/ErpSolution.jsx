import React from 'react';
import { Helmet } from "react-helmet";

import LoramLipsum from '../../masterLayout/LoramLipsum';

const ErpSolution = () => {
  return (
    <React.Fragment>
      <Helmet> <title>Solutions | School ERP</title> </Helmet>
      <div className='templateDescription'>
        <div className='page_title'><h4>Enterprise Resource Planning (ERP) Solutions <small>Map your business process with ERP Solution.</small></h4></div>
        <div className='content'>
          <div className='block_content'>
            <h6>School ERP</h6>
            <p>We understand that school management softwares is available in abundance but what we take pride in is empowering our users by training and supporting them to use the software in the most efficient manner. We make sure the software is seamlessly incorporated into the school’s operations making processes simpler, quicker and streamlined.</p>
            <div className='features'>
              <ul>
                <li>Manage Pre-Admission Enquiries and Admissions</li>
                <li>Browse & Manage Student Data</li>
                <li>Manage Student Attendance</li>
                <li>Manage Examination, Result Generation and Report Cards</li>
                <li>Manage School Fee and Collect Fee Online</li>
                <li>Manage & Print Custom Documents & Certificates</li>
                <li>Manage School Transport</li>
                <li>Manage School Library</li>
                <li>Parent-Teacher Communication</li>
                <li>Homework & Assignments</li>
                <li>HR & Salary Generation</li>
                <li>Online Assessment Platform</li>
              </ul>
            </div>
          </div>
          <div className='block_content'>
            <h6>College ERP</h6>
            <p>A college management system is a cloud based educational ERP software that enables higher education institutions & colleges to manage online admission, student enrollment, students’ attendance, online fees, grades, assignments, library books, etc. It can also generate online results, marksheet, students’ performance reports, etc & simplify the hassles of faculty.</p>
            <div className='features'>
              <ul>
                <li>College Admission & Fees</li>
                <li>Student Administration</li>
                <li>Attendance Management</li>
                <li>College Examination</li>
                <li>Outcome Based Education</li>
                <li>Integration</li>
                <li>E- Learning</li>
                <li>Website</li>
                <li>Purchase & Stores</li>
                <li>Hostel</li>
                <li>HRMS</li>
                <li>Finance</li>
                <li>Library</li>
                <li>Training & Placement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ErpSolution;