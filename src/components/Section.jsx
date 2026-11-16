function Section({ number, source, title, note, children }) {
  return (
    <section className="lab-section">
      <header className="section-head">
        <span className="section-number">{number}</span>
        <div>
          <p className="section-source">{source}</p>
          <h2>{title}</h2>
        </div>
      </header>
      {note && <p className="section-note">{note}</p>}
      {children}
    </section>
  );
}

export default Section;
