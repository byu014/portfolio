import { HiAcademicCap } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<HiAcademicCap size={30}/>} tooltipText={'About'} href={'/'}/>
    </div>
  )
}

const SideBarIcon = ({icon, tooltipText, href}) => {
  return (
    <a href={href} className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {tooltipText}
      </span>
    </a>
  )
}

export default SideBar;
