import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addBucket } from "../app/services/bucketSlice";

function Home() {
  const bucketList = useSelector((state) => state.bucketReducer.bucketlist);
  const dispatch = useDispatch();
  console.log(bucketList);

  const text = React.useRef(null);

  const addBucketList = () => {
    dispatch(addBucket({ text: text.current.value, completed: false }));
  };
  return (
    <>
      <BucketList list={bucketList} />

      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default Home;
