function App() {
  return (
    <div className="container">
      <ErrorExample />
    </div>
  );
}
export default App;

const ErrorExample = () => {
  let count = 0;
  const increase = () => {
    console.log(count);
    count++;
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increase}>
        increase
      </button>
    </div>
  );
};
