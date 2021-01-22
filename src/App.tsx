import logo from './logo.svg';
import styles from './App.module.css';
import { Button } from '@chakra-ui/react';

function TitleDisplay({ title }: { title: string }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

function App({ title }: { title: string }) {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        <Button colorScheme="blue">Hello my app</Button>

        <TitleDisplay title={title} />
      </header>
    </div>
  );
}

export default App;
