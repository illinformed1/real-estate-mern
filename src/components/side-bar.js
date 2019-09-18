import React, { useState } from "react";
import styled from "styled-components";

import { Button, Icon } from "semantic-ui-react";
import { animated, useSpring } from "react-spring";

export default function SideBar() {
  const [toggle, setToggle] = useState(false);

  const sideBarOpen = useSpring({
    transform: toggle ? "translateX(0rem)" : "translateX(-11rem)"
  });
  return (
    <div>
      <SideBarStyle style={sideBarOpen}>
        <div className="side-bar-btn">
          <Icon name="bars" onClick={() => setToggle(!toggle)} />
        </div>
        <div className="side-bar-items">
          <ul>
            <li>Add</li>
            <li>Edit</li>
            <li>Update</li>
            <li>Create</li>
          </ul>
        </div>
      </SideBarStyle>
    </div>
  );
}

const SideBarStyle = styled(animated.div)`
  width: 15rem;
  height: 100vh;
  border-right: 2px solid #098a9e;
  position: absolute;
  left: 0;
  background: #f5f5f5;

  .side-bar-btn {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 3rem;
    color: #098a9e;
    cursor: pointer;
  }

  .side-bar-items {
    margin-top: 4rem;

    ul > li {
      margin: 1rem 0;
      list-style: none;
      border-bottom: 1px solid #f5f5f5;
      cursor: pointer;
      font-size: 2rem;

      &:hover {
        border-bottom: 1px solid #098a9e;
      }
    }
  }
`;
