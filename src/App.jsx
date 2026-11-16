import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import ProfileCard from './components/ProfileCard';
import NotificationList from './components/NotificationList';
import Card from './components/Card';
import ProductGrid from './components/ProductGrid';
import StudentList from './components/StudentList';
import ConditionalDemo from './components/ConditionalDemo';
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
          Eight class exercises, each one a small component in its own file. Every
          card below receives its data through props.
        </p>
        <p className="student-line">
          {me.name} · <span className="student-id">ID {me.id}</span>
        </p>
      </header>

      <Section
        number="01"
        title="Your first component"
        note="One function used three times — each use is an independent copy."
      >
        <div className="greeting-row">
          <Greeting />
          <Greeting />
          <Greeting />
        </div>
      </Section>

      <Section
        number="02"
        title="StudentCard"
        note="Props: name, id, major. The card shows my own student ID."
      >
        <div className="demo-grid">
          <StudentCard name={me.name} id={me.id} major={me.major} />
        </div>
      </Section>

      <Section
        number="03"
        title="ProfileCard with a default prop"
        note="avatarUrl is optional — when it is not passed, the default avatar is used."
      >
        <div className="demo-grid">
          <ProfileCard
            name="Dr. Toshpulatov"
            role="Professor"
            email="muhiddin@gachon.ac.kr"
          />
        </div>
      </Section>

      <Section
        number="04"
        title="List of notifications"
        note="Rendered with .map() and a key from each id; the icon comes from conditional rendering."
      >
        <NotificationList />
      </Section>

      <Section
        number="05"
        title="Layout with props.children"
        note="The same Card component wraps two completely different pieces of content."
      >
        <div className="demo-block">
          <Card title="Lecture topics">
            <ul className="plain-list">
              <li>Components</li>
              <li>Props</li>
            </ul>
          </Card>
          <Card title="Homework">
            <p>Build a student portfolio component.</p>
          </Card>
        </div>
      </Section>

      <Section
        number="06"
        title="ProductCard"
        note="Props: name, price in KRW, rating out of 5, inStock. Both bonuses are done."
      >
        <ProductGrid />
      </Section>

      <Section
        number="07"
        title="Rendering a list with keys"
        note="Every item has a unique, stable key — its id, not its position in the array."
      >
        <StudentList />
      </Section>

      <Section
        number="08"
        title="Conditional rendering"
        note="A component can return null, && shows a part only when its condition is true, and a ternary picks between two labels."
      >
        <ConditionalDemo />
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
