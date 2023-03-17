import { useParams } from "react-router-dom";

const Character = (idCharacter) => {
  const params = useParams()
  
  return (
    <>
      <h2>BIOGRAPHY</h2>
      <div className="card">
        Personaje con el id {params.id}
      </div>
    </>
  );
};
export default Character;
