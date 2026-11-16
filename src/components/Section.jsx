function Section({ number, title, note, children }) {
  return (
    <section className="lab-section">
      <header className="section-head">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </header>
      {note && <p className="section-note">{note}</p>}
      {children}
    </section>
  );
}

export default Section;
