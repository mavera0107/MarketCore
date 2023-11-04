import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import GameAccountsLists from '../../models/gameAccountsLists';
import GameAccountsTitles from '../../models/gameAccountsTitles';
import GameCurrencyLists from '../../models/gameCurrencyLists';
import GameCurrencyTitles from '../../models/gameCurrencyTitles';
import GameItemLists from '../../models/gameItemLists';
import GameItemTitles from '../../models/gameItemTitles';

interface GameAccount {
  title: string;
  gameId: string;
  link: string;
}
interface GameCurrency {
  title: string;
  gameId: string;
  link: string;
}
interface GameItem {
  title: string;
  gameId: string;
  link: string;
}

interface ShopItemPageProps {
  gameAccountsLists: GameAccount[];
  gameAccountsTitles: GameAccount[];
  gameCurrencyLists: GameCurrency[];
  gameCurrencyTitles: GameCurrency[];
  gameItemLists: GameItem[];
  gameItemTitles: GameItem[];
}

const ShopItemPage: React.FC<ShopItemPageProps> = ({
  gameAccountsLists,
  gameAccountsTitles,
  gameCurrencyLists,
  gameCurrencyTitles,
  gameItemLists,
  gameItemTitles,
}) => {
  const router = useRouter();
  const { id } = router.query;

  // Use your data as needed within your component
  // e.g.
  // const itemToShow = gameItemLists.find(item => item.id === id);

  return <div></div>;
};

export async function getServerSideProps() {
  return {
    props: {
      gameAccountsLists: GameAccountsLists,
      gameAccountsTitles: GameAccountsTitles,
      gameCurrencyLists: GameCurrencyLists,
      gameCurrencyTitles: GameCurrencyTitles,
      gameItemLists: GameItemLists,
      gameItemTitles: GameItemTitles,
    },
  };
}

export default ShopItemPage;
