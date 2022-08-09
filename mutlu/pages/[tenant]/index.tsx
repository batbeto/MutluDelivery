import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(`Oi ${searchValue}`)
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>
              Seja Bem-Vindo(a) 👋
            </div>
            <div className={styles.headerSubtitle}> 
              O que deseja para hoje? 
            </div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButtom}>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
            </div>

          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput 
            mainColor='#FB9400'
            onSearch={handleSearch}
            />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem 
          data = {{ id: 1, image: '/temp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$25,50' }}
          mainColor='#FB9400'
          secondColor='#CCC'
        />
      </div>
    </div>
  )
};

export default Home;