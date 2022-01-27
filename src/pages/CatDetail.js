import { useParams } from "react-router-dom";

const CatDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>고양이 디테일 화면</h3>
      <h3>{id} 번째 페이지</h3>
    </div>
  );
};

export default CatDetail;
