import watch from '../assests/hero.png';
import laptop from '../assests/laptopimg.jpg';
import men1 from '../assests/men1.png';
import women from '../assests/women.jpg';
import dreamVision from '../assests/DreamVision.jpg'
import gamecontroller from '../assests/oubangController.jpeg'
import gamingkeyboard from '../assests/gamingkeyboard.jpg'
import tv from '../assests/gamingtv.jpg'
import iphone13 from '../assests/iphone13promax.jpeg'
import iphone15 from '../assests/iphone15.jpg'
import powerbank from '../assests/Powerbank.jpg'
import ps5 from '../assests/ps5.jpeg'
const Data = {
    productItems: [
      {
        id: 1,
        cover: laptop,
        price: 100,
        name: "Laptop",
        discount: 50,
        description: 'Laptop, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
      },
      {
        id: 2, 
        cover: watch,
        name: "Watch",
        price: 20,
        discount: 40,
        description: 'Watch, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
      },
      {
        id: 5,
        cover : men1,
        name: "Timezone Wristwatch Male",
        price: 85,
       // category: 'men',
        description: 'Men, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        id: 6,
        cover :women,
        name: "Shinning Diamond Watch",
        price: 85,
        //category: 'men',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
     id:7,
     cover:dreamVision,
     name:"Dream Vision",
     price:105,
     description:"nfbfhf",

    },
    {
id:8,
cover:gamecontroller,
name:"Game Controller",
price:50,
description:'ggame controller'

    },
    {
      id:8,
      cover:gamingkeyboard,
      name:"Game Keyboard",
      price:45,
      description:'keyboard'
    },
    {
id:9,
cover:tv,
name:"Gaming Tv",
price:150,
description:'gaming tv'
    },
    {
      id:10,
      cover:iphone13,
      name:"Iphome 13 promax",
      price:850,
      description:'Iphone 13 promax'
    },
    {

      id:11,
      cover:iphone15,
      name:"Iphone 15",
      price:795,
      description:'iphone 15'
    },
    {
      id:12,
      cover:powerbank,
      name:"Power Bank",
      price:75,
      description:'powerbank'

    },{
      id:13,
      cover:ps5,
      name:"Playstation PS5",
      price:450,
      description:"good playstation",
    }
    ],
  }
  export default Data