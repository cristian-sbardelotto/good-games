import vrGlass from '../assets/vr-glass.svg';
import keyboard from '../assets/keyboard.svg';
import soundBox from '../assets/sound-box.svg';
import monitor from '../assets/monitor.svg';
import pc from '../assets/pc.svg';

interface ProductsProps {
  title: string;
  name: string;
  price: number;
  image: string;
}

export const productsMock: ProductsProps[] = [
  {
    title: 'Óculos Virtual',
    name: 'VR Glasses',
    price: 32,
    image: vrGlass,
  },
  {
    title: 'Teclado Mecânico',
    name: 'Mechanic Keyboard',
    price: 200,
    image: keyboard,
  },
  {
    title: 'Monitor 25 polegadas',
    name: 'Monitor',
    price: 400,
    image: monitor,
  },
  {
    title: 'Caixa de Som JBL',
    name: 'JBL Sound Box',
    price: 900,
    image: soundBox,
  },
  {
    title: 'Computador Gamer',
    name: 'Gamer Computer',
    price: 3000,
    image: pc,
  },
];
