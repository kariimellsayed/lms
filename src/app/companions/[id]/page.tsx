const CimpinationCourse = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <div>
      <h1>Cimpination Course Page {id}</h1>
    </div>
  );
};

export default CimpinationCourse;
