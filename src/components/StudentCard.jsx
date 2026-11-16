function StudentCard({ name, id, major }) {
  return (
    <div className="student-card">
      <h2 className="student-name">{name}</h2>
      <p className="student-meta">ID: {id}</p>
      <p className="student-meta">Major: {major}</p>
    </div>
  );
}

export default StudentCard;
