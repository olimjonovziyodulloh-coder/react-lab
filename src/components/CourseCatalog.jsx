const courses = [
  { id: 1, title: 'Web Programming', instructor: 'Dr. Toshpulatov', credits: 3, required: true },
  { id: 2, title: 'Database Systems', instructor: 'Dr. Kim', credits: 3, required: true },
  { id: 3, title: 'Mobile App Dev', instructor: 'Dr. Lee', credits: 2, required: false },
];

function CourseCard({ title, instructor, credits, required }) {
  return (
    <article className="course-card">
      <div className="course-head">
        <h3 className="course-title">{title}</h3>
        <span className={required ? 'badge required' : 'badge elective'}>
          {required ? 'Required' : 'Elective'}
        </span>
      </div>
      <p className="course-meta">{instructor}</p>
      <p className="course-credits">{credits} credits</p>
    </article>
  );
}

function CourseCatalog() {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          instructor={course.instructor}
          credits={course.credits}
          required={course.required}
        />
      ))}
    </div>
  );
}

export default CourseCatalog;
