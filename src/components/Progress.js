import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucketReducer.bucketlist);
  console.log(bucket_list);
  let count = 0;
  bucket_list.map((item, index) => {
    if (item.completed) {
      count++;
    }
  });
  console.log(count);
  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"} />
    </ProgressBar>
  );
};

const ProgressAnimation = keyframes`
    0% {
        width: 0%;
    }

`;

const ProgressBar = styled.div`
  width: 100%;
  height: 40px;
  background: #eee;
`;

const HighLight = styled.div`
  background: orange;
  // 넓이에다가 transition을 줄래, 1초로
  transition: 1s width;
  width: ${(props) => props.width};
  height: 40px;
`;

export default Progress;
