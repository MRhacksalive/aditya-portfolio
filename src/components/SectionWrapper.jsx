export default function SectionWrapper({ id, title, note, children }) {
  return (
    <section id={id} className="sec">
      <div className="wrap sec-grid">
        <header className="sec-head">
          <h2>{title}</h2>
          {note && <p>{note}</p>}
        </header>
        <div className="sec-body">{children}</div>
      </div>
    </section>
  );
}
