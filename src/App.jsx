import StudentCard from './components/StudentCard';
import ProfileCard from './components/ProfileCard';
import NotificationList from './components/NotificationList';
import Card from './components/Card';
import CourseCatalog from './components/CourseCatalog';
import ProductGrid from './components/ProductGrid';
import Section from './components/Section';

const me = {
  name: 'Olimjonov Ziyodulloh',
  id: '202537557',
  major: 'Computer Engineering',
};

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <p className="eyebrow">Week 11 · React Components &amp; Props</p>
        <h1>React Lab</h1>
        <p className="subtitle">
          The class tasks from every Week 11 source — visual lecture, study guide,
          video lecture and slides — rebuilt as working components.
        </p>
        <p className="student-line">
          {me.name} · <span className="student-id">ID {me.id}</span>
        </p>
      </header>

      <Section
        number="01"
        source="Visual lecture"
        title="Lab challenge — StudentCard"
        note="Fill in the blanks so the card renders name, ID and major."
      >
        <div className="demo-grid">
          <StudentCard name={me.name} id={me.id} major={me.major} />
        </div>
      </Section>

      <Section
        number="02"
        source="Study guide"
        title="ProfileCard, NotificationList, Card"
        note="Three practice exercises: default props, conditional icons and props.children."
      >
        <div className="demo-grid">
          <ProfileCard
            name="Dr. Toshpulatov"
            role="Professor"
            email="muhiddin@gachon.ac.kr"
          />
          <div className="demo-block">
            <h3 className="demo-title">Notifications</h3>
            <NotificationList />
          </div>
          <div className="demo-block">
            <Card title="Lecture topics">
              <ul className="plain-list">
                <li>Components</li>
                <li>Props</li>
                <li>Lists &amp; conditional rendering</li>
              </ul>
            </Card>
            <Card title="Homework">
              <p>Build a student portfolio component.</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        number="03"
        source="Video lecture"
        title="Practice challenge — Course catalog"
        note="CourseCard takes title, instructor, credits and required; the badge is conditional."
      >
        <CourseCatalog />
      </Section>

      <Section
        number="04"
        source="Friday slides"
        title="Code challenge — ProductCard"
        note="Name, price in KRW, a star rating out of 5, and an out-of-stock label when the product is unavailable."
      >
        <ProductGrid />
      </Section>

      <footer className="page-footer">
        <p>
          {me.name} · Student ID {me.id} · Web Programming K0126_002
        </p>
      </footer>
    </div>
  );
}

export default App;
