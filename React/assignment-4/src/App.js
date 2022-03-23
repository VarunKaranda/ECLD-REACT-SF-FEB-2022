import styles from './App.module.css';
import Counter from './components/Counter'

function App() {
  return (
    <div class={styles.card}>
      <h1 className={styles.heading}>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
