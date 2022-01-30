import React, {useState} from "react";
import AppNavbar from "../commons/appNavbar";
import Main from "../containers/main";

const ScrollAndFix = () => {

  const [scrollDown, setScrollDown] = useState(false)

  // Function to handle user scroll & check if user is scrolling down or up.
  const onWheelHandler = () => {
    const lastScrollTop = 0;
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > lastScrollTop) {
      setScrollDown(true)
      console.log(window.screenY)
    } else {
      setScrollDown(false)
    }
  }

  return (
    <div onWheel={onWheelHandler}>
      <AppNavbar />
      <Main scrollDown={scrollDown} />
    </div>
  )
}

export default ScrollAndFix