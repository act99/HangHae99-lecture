import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteBucket, updateBucket } from "../app/services/bucketSlice";

const BucketListDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const removeBucketList = () => {
    dispatch(deleteBucket(id));
  };
  const params = useParams();
  const bucketList = useSelector((state) => state.bucketReducer.bucketlist);
  console.log(params);
  return (
    <div>
      <h3>디테일</h3>
      <h3>{id}</h3>
      <button onClick={removeBucketList}>삭제하기</button>
      <button onClick={() => dispatch(updateBucket(id))}>완료하기</button>
      {bucketList.map((item, index) => (
        <div key={index}>
          <h3>{item.text}</h3>
          <h3>{item.completed.toString()}</h3>
        </div>
      ))}
    </div>
  );
};

export default BucketListDetail;
