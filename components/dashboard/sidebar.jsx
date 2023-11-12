import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { CLOSE } from "../../redux/actions/action";

// React Icon

import { MdSpaceDashboard } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdCandlestickChart } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

// Icon Style
const Iconstyle = {
    fontSize: "1.5em",
    color: "#373131",
  };
  
  // Logo Icon Settings
  const LogoIconSettings = {
    fontSize: "2.5em",
    color: "#373131",
  };


  const Sidebar = () => {
    const router = useRouter();
  
    return (
      <>
        <div className={!true ? "dashboard_sideBar" : "dashboard_sideBar active"}>
          <div className="dashboard_sidebar_height">
            <div className="dashboard_logo">
              <Link href="/" className="dashboard_logo_flex_container">
                <h2 style={{ color: "white" }}>Trustnet </h2>
              </Link>
            </div>
          </div>
  
          <div className="dashboard_sidebar_navigation ">
            <ul className="text-gray-300">
              <div className="sidebar_top_part">
                {/* Add the Overview link */}
                <Link href="/app/Overview" onClick={() => {}}>
                  <div className="dashboard_flex_item">
                    <MdSpaceDashboard />
                    <li>Overview</li>
                  </div>
                </Link>
  
                {/* Add the Pools link */}
                <Link href="/app/Pools" onClick={() => {}}>
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <MdSpaceDashboard /> {/* You may want to replace this with an appropriate icon */}
                    </div>
                    <li>Pools</li>
                  </div>
                </Link>
  
                {/* Add the Premium link */}
                <Link href="/app/Premium" onClick={() => {}}>
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <MdSpaceDashboard /> {/* Replace with appropriate icon */}
                    </div>
                    <li>Premium</li>
                  </div>
                </Link>
  
                {/* Add the ClaimsVoting link */}
                <Link href="/app/ClaimsVoting" onClick={() => {}}>
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <MdSpaceDashboard /> {/* Replace with appropriate icon */}
                    </div>
                    <li>ClaimsVoting</li>
                  </div>
                </Link>
  
                {/* Your existing links */}
                {/* ... */}
  
              </div>
  
              <div className="sidebar_bottom_part">
                {/* Your existing links */}
                {/* ... */}
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Sidebar;