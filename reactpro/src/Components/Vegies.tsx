export default function Vegies({ vegiesData }) {
  return (
    <div>
      <ul>
        {vegiesData.map((vegetables, index) => (
          <li key={index}>
            {index}-{vegetables}
          </li>
        ))}
      </ul>
    </div>
  );
}
