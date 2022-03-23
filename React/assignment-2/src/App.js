import styles from'./App.module.css';
import Bisakka from './components/Bisakka';
import Bruno from './components/Bruno';
import Cavani from './components/Cavani';
import Degea from './components/Degea';
import Greenwood from './components/Greenwood';
import Lindelof from './components/Lindelof';
import Maguire from './components/Maguire';
import Pogba from './components/Pogba';
import Rashford from './components/Rashford';
import Ronaldo from './components/Ronaldo';
import Sancho from './components/Sancho';
import Telles from './components/Telles';

function App() {
  return (
    <>
      <div className={styles.row}>
        <Bisakka />
        <Bruno />
        <Cavani />
        <Degea />
      </div>
      <div className={styles.row}>
        <Greenwood />
        <Lindelof />
        <Maguire />
        <Pogba />
      </div>
      <div className={styles.row}>
        <Rashford />
        <Ronaldo />
        <Sancho />
        <Telles />
      </div>
    </>
  );
}

export default App;
