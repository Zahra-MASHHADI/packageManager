import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Movielist from './components/movieList';
import LiveList from './components/liveList';
import Rectanglelist from './components/tectangleList';
import NewsizeMovie from './components/newSizeMovie';
import Stars from './components/stars';
import Footer from './components/footer';

const movieList = [
    {
      title :"نوبت لیلی ",
      image : "https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title :"خاندان اژدها ",
      image : "https://static.namava.ir/Content/Upload/Images/f2a59090-285d-45ed-a5eb-358f7b8c9141.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title : "شبکه مخفی زنان",
      image : "https://static.namava.ir/Content/Upload/Images/822441c6-7570-48a5-ac1c-225f02e1f9ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title : "جادوگر",
      image : "https://static.namava.ir/Content/Upload/Images/837613cc-16da-4148-945b-fd5459fcfa97.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title :"خیزش لاکپشتهای نینجا " ,
      image : "https://static.namava.ir/Content/Upload/Images/dac49510-c1c1-477e-b0cd-20e40f0927e9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title : "پاندای کون گ فو کار",
      image :"https://static.namava.ir/Content/Upload/Images/a4167bd5-d7ad-45e1-b4b0-425cce5b9551.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
      year :"سریال-1401" ,
      like: "89%",
    },
    {
      title : "ما صاحب این شهر هستیم",
      image :"https://static.namava.ir/Content/Upload/Images/97009dac-c9eb-4165-8f44-0729f885c8bd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
      year :"سریال-1401" ,
      like: "89%",
    },

]
const liveList = [
  {
    image :"https://static.namava.ir/Content/Upload/Images/af7407a8-8e73-4d5d-b8c6-2c7a3c9a77e8.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
    title :"سمپدوریا - یوونتوس با گزارش میثم مختاری",
    more: "فوتبال - سری آ ایتالیا",
    live:"در حال پخش",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/42fbe79c-c320-4d4d-91c2-d9c515c72853.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
    title :"منچستریونایتد - لیورپول با گزارش سجاد کاظمی",
    more: "فوتبال - لیگ برتر انگلیس",
    live:"در حال پخش",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/a7928bd2-0896-481f-90ae-a32f5c8faa2c.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
    title :"اسنوکر اوپن ایرلند شمالی",
    more: "مسابقات اوپن",
    live:"زمان شروع:سه‌شنبه ۱ شهریور - ساعت ۱۳:۲۰",
  },
  
]
const longerMovie = [
  {
    title : "شبکه مخفی زنان",
    image : "https://static.namava.ir/Content/Upload/Images/64d7d95b-e992-4fc2-86f3-dbeaca908eaa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"مهمونی",
    image : "https://static.namava.ir/Content/Upload/Images/d2a58257-5f97-452e-90c2-d87c52fed14e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "نوبت لیلی",
    image : "https://static.namava.ir/Content/Upload/Images/f5979c2f-07a0-4287-ab3c-ee3ff2ef059b.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "مترجم",
    image : "https://static.namava.ir/Content/Upload/Images/9c2b1d49-be38-4cc1-b84f-23defc26bee9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"خاتون" ,
    image : "https://static.namava.ir/Content/Upload/Images/57441ace-8a71-4744-bf38-671882d4d11f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "خسوف",
    image :"https://static.namava.ir/Content/Upload/Images/270dda56-3c7f-48f2-bd9e-e3d79d3c407e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400" ,
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "حرفه ای",
    image :"https://static.namava.ir/Content/Upload/Images/3043f20e-001d-4aab-a7f0-5c484ef09950.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400" ,
    year :"سریال-1401" ,
    like: "89%",
  },
]
const movieList2 = [
  {
    title :"جایی که چیزها ترسناک هستند",
    image : "https://static.namava.ir/Content/Upload/Images/c241d585-df2c-4fc0-84c4-e6979e1e9002.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"ببر برمیخزد",
    image : "https://static.namava.ir/Content/Upload/Images/d674ce83-6099-498c-979a-341e61e42abe.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "خانم نظافتچی",
    image : "https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "سگی بنام ایندی",
    image : "https://static.namava.ir/Content/Upload/Images/a7c3c334-fc91-4f36-8c6d-e8c493ac958c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"سر آشپز برتر" ,
    image : "https://static.namava.ir/Content/Upload/Images/1cf43875-9a25-4286-81a1-61c73c391b2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : " عروسک های بازیافتی" ,
    image :"https://static.namava.ir/Content/Upload/Images/dd1462e9-29c2-47ed-8ac7-74868a6112be.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "پارتی",
    image :"https://static.namava.ir/Content/Upload/Images/fd7b5833-da26-4727-b15b-e1a1f29c4355.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },

]
const movieList3 = [
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title :" کافه مینا مدانک",
    image : "https://static.namava.ir/Content/Upload/Images/a3e64163-a470-4aa6-a7f1-e4d006079095.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    more : "فصل 1 قسمت 15",
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title :" پژواک ها ",
    image : "https://static.namava.ir/Content/Upload/Images/1433477e-d319-4b3d-89f9-4496799ea5db.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    more : "فصل 1 قسمت 15"
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title : " دادستان نظامی دوبر من",
    image : "https://static.namava.ir/Content/Upload/Images/fd90d10d-7250-4053-a9e6-2ebebb7b14e2.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    more : "فصل 1 قسمت 15"
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title : "کیمیای روح",
    image : "https://static.namava.ir/Content/Upload/Images/8c7f2377-895c-40f9-8c97-58c9a23ba9c9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    more : "فصل 1 قسمت 15"
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title :" خانم نظافتچی",
    image : "https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    more : "فصل 1 قسمت 15"
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title : " نوبت لیلی" ,
    image :"https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    more : "فصل 1 قسمت 15"
  },
  {
    player:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jXHt4zjpOC7jVz4ZHTJKGfLyIktt2CAUaSbOtlbNNpR5wwxetU14pg5yNs66hQnewOE&usqp=CAU",
    title : " پسران باکوماستسو",
    image :"https://static.namava.ir/Content/Upload/Images/b4c9d2e2-0a1d-4c42-b7e3-3883a09c47eb.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    more : "فصل 1 قسمت 15"
  },

]
const movieList4 = [
  {
    title : "شبکه مخفی زنان",
    image : "https://static.namava.ir/Content/Upload/Images/822441c6-7570-48a5-ac1c-225f02e1f9ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"روزی روزگاری مریخ",
    image : "https://static.namava.ir/Content/Upload/Images/71360ded-609c-47bc-af91-b1ece23453ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"13شمالی",
    image : "https://static.namava.ir/Content/Upload/Images/e6f79894-64b8-420a-817e-9629acbe3599.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "جادوگر",
    image : "https://static.namava.ir/Content/Upload/Images/837613cc-16da-4148-945b-fd5459fcfa97.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "نوبت لیلی",
    image : "https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"مهمونی" ,
    image : "https://static.namava.ir/Content/Upload/Images/0f59bbac-4756-4a0b-b1bd-1203ce82a27d.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"خاتون",
    image :"https://static.namava.ir/Content/Upload/Images/af1c46f4-3a5a-43fc-8fcc-9447b4e7a957.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
  },
]
const longerMovie2 = [
  {
    title :"ببر بر میخزد",
    image : "https://static.namava.ir/Content/Upload/Images/9c437606-454b-46f3-8e04-14a3988dacc8.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"سگی بنام ایندی",
    image : "https://static.namava.ir/Content/Upload/Images/b58f7e6d-4b53-4267-8d42-b805c3b47f76.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "پراوین تمبه کیست",
    image : "https://static.namava.ir/Content/Upload/Images/987566aa-a345-46ef-be43-942a4d20dfbd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "دی شکارچی خون آشام:تشنه خون",
    image : "https://static.namava.ir/Content/Upload/Images/fa1ef895-d6e9-42c8-aa8a-8968d8125be8.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"یتییم: اولین قتل" ,
    image : "https://static.namava.ir/Content/Upload/Images/8d4ecc17-20af-4879-9cc5-63e877b5c90e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "سگ های آشغالدونی" ,
    image :"https://static.namava.ir/Content/Upload/Images/a1b4586e-bbd3-4cd7-92bc-ec55c5530e33.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "ساحره: دیگری",
    image :"https://static.namava.ir/Content/Upload/Images/0a52a96a-38bf-4811-92b4-4954399f4c44.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },

]
const stars = [
  {
    image :" https://static.namava.ir/Content/Upload/Images/a6ed33e8-7e11-4739-a988-9a90e9db8b9b.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "تام کروز ",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/ffda31f9-53f4-4901-ad37-3ddf5a18b794.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140 ",
    name: " نیکول کیدمن",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/8a708b1d-889c-43e2-af32-627f9ab1a45c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "ویل اسمیت",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/a83857a1-ae04-46e5-9e90-a5e9e4c13c5c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140 ",
    name: " کیت وینسلت",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/f89781ea-55c3-46ab-a952-d47294ac7462.png?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: " جانی دپ",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/81389a78-df35-424b-8736-4cb26fea202b.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "جسیکا چستین ",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/85bb8119-6ff9-4887-a158-f71b29094065.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "برایان کرانستون ",
  },
  
]
const movieList5 = [
  {
    title : "پارتی",
    image : "https://static.namava.ir/Content/Upload/Images/fd7b5833-da26-4727-b15b-e1a1f29c4355.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"جنگلبان",
    image : "https://static.namava.ir/Content/Upload/Images/0242dffa-8f0c-4461-b580-058119f8f724.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"مادر",
    image : "https://static.namava.ir/Content/Upload/Images/1a21b552-0991-4cbe-9dcd-68db928e4600.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "بوی کافور عطر یاس",
    image : "https://static.namava.ir/Content/Upload/Images/17107cca-b82a-458e-b353-7a72fdb843f7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "گل به خودی",
    image : "https://static.namava.ir/Content/Upload/Images/ff09bae6-ec4c-4604-bcec-33680dd107ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"جهان پهلوان تختی" ,
    image : "https://static.namava.ir/Content/Upload/Images/a6d80022-6c0b-43f9-91e0-c2529e196773.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"آبی",
    image :"https://static.namava.ir/Content/Upload/Images/e343677a-f9ba-4f96-b1de-71632049c814.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
  },
]
const liveList2 = [
  {
    image :"https://static.namava.ir/Content/Upload/Images/8737ea17-ed69-4b2a-b35d-843dcaf79432.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم های دنیای سینمایی دی سی",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/a317ef64-199d-4739-bae6-1a764eaa4278.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم های اره",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/7b54fa90-7a19-44fd-a7c7-88af764ba2d1.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های ترانسپورتر",
  },
  
]

const movieList6 = [
  {
    title :"ناظر",
    image : "https://static.namava.ir/Content/Upload/Images/a2342611-9673-4af3-a62b-59163ef2bb2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "سگی بنام ایندی",
    image : "https://static.namava.ir/Content/Upload/Images/a7c3c334-fc91-4f36-8c6d-e8c493ac958c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "خانم نظافتچی",
    image : "https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "خاندان اژدها",
    image : "https://static.namava.ir/Content/Upload/Images/f2a59090-285d-45ed-a5eb-358f7b8c9141.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"کیمیاگر تمام فلزی: انتقام اسکار" ,
    image : "https://static.namava.ir/Content/Upload/Images/7c304da3-3d8a-4459-bce8-71f0ddbeb7c7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "پراوین تمبه کیست",
    image : "https://static.namava.ir/Content/Upload/Images/640d1214-3830-4ec2-bb09-81c077205a46.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "کلئو",
    image :"https://static.namava.ir/Content/Upload/Images/45658306-dc81-44aa-a97e-9c88fe993d2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const movieList7 = [
  {
    title :"بهتره با ساول تماس بگیری",
    image : "https://static.namava.ir/Content/Upload/Images/fe6d9b8a-1dac-4156-bfd6-60111b83623c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "برکینگ بد",
    image : "https://static.namava.ir/Content/Upload/Images/ce8675e6-ab09-45e0-aee9-a23b44b7a258.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "خانواده ای از جنس جاسوس",
    image : "https://static.namava.ir/Content/Upload/Images/975ff795-3e7a-436d-8b25-fa6b9cb4c2c1.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "صورت زخمی",
    image : "https://static.namava.ir/Content/Upload/Images/10aea3e0-03da-49ca-9f9c-8b347cbf8163.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"دختر گمشده" ,
    image : "https://static.namava.ir/Content/Upload/Images/2f90d29c-05dc-400b-8dc8-fc8dfaa61ef6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "در یک شب اتفاق افتاد",
    image : "https://static.namava.ir/Content/Upload/Images/fecb970b-2ff2-4e7b-8274-2f10e5ba9f47.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "همه چیز همه جا به یکباره",
    image :"https://static.namava.ir/Content/Upload/Images/607fe910-9cc7-471f-bb0e-578b765e61bc.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const movieList8 = [
  {
    title :"بهتره با ساول تماس بگیری",
    image : "https://static.namava.ir/Content/Upload/Images/fe6d9b8a-1dac-4156-bfd6-60111b83623c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "برکینگ بد",
    image : "https://static.namava.ir/Content/Upload/Images/ce8675e6-ab09-45e0-aee9-a23b44b7a258.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "قهرمان",
    image : "https://static.namava.ir/Content/Upload/Images/1be12611-5d0e-4f60-9e51-a2b299c5d694.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "آن شب",
    image :"https://static.namava.ir/Content/Upload/Images/8c372a16-1686-41d7-906a-b690e77a5118.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
    {
      title : "همه چیز همه جا به یکباره",
      image :"https://static.namava.ir/Content/Upload/Images/607fe910-9cc7-471f-bb0e-578b765e61bc.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
      year :"سریال-1401" ,
      IMDb: "3.1 IMDb" ,
      subtitle : "زیرنویس",
    },
  {
   title : "توکیو وایس",
    image : "https://static.namava.ir/Content/Upload/Images/542c7a3b-747a-4df5-88e4-10900609a65a.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "آپولو ده و نیم: یک ماجراجویی فضایی",
    image :"https://static.namava.ir/Content/Upload/Images/2e4063bb-a8ed-4bd2-a161-81ec58e9f195.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const movieList9 = [
  {
    title :"خانه‌ های ونی",
    image : "https://static.namava.ir/Content/Upload/Images/a4e6b357-ba9b-4955-befb-53304e04db5c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "از استوری بات ها بپرس",
    image : "https://static.namava.ir/Content/Upload/Images/a9c2062e-150d-4aa1-9515-c129a2b12bb4.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "سفرهای علمی",
    image : "https://static.namava.ir/Content/Upload/Images/bf92b224-b1e8-4e20-b0e7-9aaa2e28bcb6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "پختن غیرممکن ها",
    image : "https://static.namava.ir/Content/Upload/Images/7b07e8ee-30ed-48d0-958c-97c4a5c08efd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"آموزش علم بهتر خوابیدن با متیو واکر" ,
    image : "https://static.namava.ir/Content/Upload/Images/c69997ed-194b-4aff-a5d1-ae283a8df053.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "بیدار شو، آواز بخوان",
    image : "https://static.namava.ir/Content/Upload/Images/accfb7e5-5aef-4334-bcdc-2af1b2dc111e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "آموزش عکاسی ماجراجویانه با جیمی چین",
    image :"https://static.namava.ir/Content/Upload/Images/de845f5c-f613-48f4-b67e-4bb04ea2d922.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const liveList3 = [
  {
    image :"https://static.namava.ir/Content/Upload/Images/e7b9aa10-0801-4f3d-8884-0bedbd284110.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های شبی در موزه",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/3e2351d1-aefb-44fd-9b62-92dfa9c80c60.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های هری کثیف",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/e69fa5ce-8407-45a0-a6a9-6d853959b73e.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های ایپ من",
  }
]
const movieList10 = [
  {
    title :"خاندان اژدها",
    image : "https://static.namava.ir/Content/Upload/Images/f2a59090-285d-45ed-a5eb-358f7b8c9141.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"کیمیاگر تمام فلزی: انتقام اسکار" ,
    image : "https://static.namava.ir/Content/Upload/Images/7c304da3-3d8a-4459-bce8-71f0ddbeb7c7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "پلیس آهنی",
    image : "https://static.namava.ir/Content/Upload/Images/f539668a-66ad-469f-81e7-51bdff810b7f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "دی شکارچی خون آشام:تشنه خون",
    image : "https://static.namava.ir/Content/Upload/Images/34c8fcea-b18a-4d3b-b630-1bdf85329297.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "کلئو",
    image :"https://static.namava.ir/Content/Upload/Images/45658306-dc81-44aa-a97e-9c88fe993d2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "تکن: رد خون",
    image : "https://static.namava.ir/Content/Upload/Images/e4fb8076-d9b6-4c7f-a615-bf392bf17189.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "ساحره: دیگری",
    image :"https://static.namava.ir/Content/Upload/Images/4e4900df-752a-40ce-8c8d-303f65f92012.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const movieList11 = [
  {
    title :"انتقام",
    image : "https://static.namava.ir/Content/Upload/Images/14f4f414-dc0f-46ee-a247-48f59bf40c4e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"داغان" ,
    image : "https://static.namava.ir/Content/Upload/Images/96a07c25-b207-447b-8072-8becbd19cbc4.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "گل به خودی",
    image : "https://static.namava.ir/Content/Upload/Images/ff09bae6-ec4c-4604-bcec-33680dd107ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "سگ های آشغالدونی" ,
    image :"https://static.namava.ir/Content/Upload/Images/efb8ea44-0381-476c-b1d0-5c585c35a6d2.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "شی هلک",
    image :"https://static.namava.ir/Content/Upload/Images/84f31b19-a505-4229-b4ac-cb4027a21bc9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "مقر مخفی",
    image : "https://static.namava.ir/Content/Upload/Images/2122d5eb-ec80-4ff9-8fe1-b5ad068b050e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "خوب نیستم",
    image :"https://static.namava.ir/Content/Upload/Images/e0dcba1d-8906-487f-a68b-ce9bbc4b071a.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const movieList12 = [
  {
    title :"ناظر",
    image : "https://static.namava.ir/Content/Upload/Images/a2342611-9673-4af3-a62b-59163ef2bb2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"جایی که چیزها ترسناک هستند",
    image : "https://static.namava.ir/Content/Upload/Images/c241d585-df2c-4fc0-84c4-e6979e1e9002.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title : "باشکوه"  ,
    image : "https://static.namava.ir/Content/Upload/Images/ef29705e-462b-4447-8246-b0af359bc818.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "یتیم : اولین قتل",
    image : "https://static.namava.ir/Content/Upload/Images/34c8fcea-b18a-4d3b-b630-1bdf85329297.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title :"دی شکارچی خون آشام:تشنه خون" ,
    image : "https://static.namava.ir/Content/Upload/Images/e9dc3c64-27c4-4f32-be48-78607376359e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
   title : "شیفت روز",
    image : "https://static.namava.ir/Content/Upload/Images/db39c888-faf2-446a-b9d0-76253b6cc0e6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "مدیوم",
    image :"https://static.namava.ir/Content/Upload/Images/98fb965c-cb00-4835-9bb6-b139abfa8451.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const liveList4 = [
  {
    image :"https://static.namava.ir/Content/Upload/Images/5ad51e94-5b9c-4fdd-b7cb-e5b27ad970f1.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های بشارت",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/8e84844d-ba53-4f69-9372-1326ff7d5471.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های نبرد با تایتان ها",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/39b452c0-75cc-4974-b193-26381059164b.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
    title :"مجموعه فیلم‌های آرتور",
  }
]
const movieList13 = [
  {
    title :"ساحره: دیگری",
    image : "https://static.namava.ir/Content/Upload/Images/4e4900df-752a-40ce-8c8d-303f65f92012.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401",
    IMDb: "3.1 IMDb" ,
    subtitle : "دوبله",
  },
  {
    title :"عشق دیوانه وار",
    image : "https://static.namava.ir/Content/Upload/Images/98e43bbc-c38c-4c4e-a2fe-becff02568c9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "ستاره های دنباله دار",
    image : "https://static.namava.ir/Content/Upload/Images/ee0007ab-980d-41d1-a7bf-7e4b4082987e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    year :"سریال-1401" ,
    like: "89%",
  },
  {
    title : "تصمیم جدایی" ,
    image :"https://static.namava.ir/Content/Upload/Images/60b5b427-58fe-459e-b911-4d7d9239c42e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    like: "89%",
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "کارتر",
    image :"https://static.namava.ir/Content/Upload/Images/06902e0c-d364-4252-9832-2e9aca5c2a91.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "مدیوم",
    image :"https://static.namava.ir/Content/Upload/Images/98fb965c-cb00-4835-9bb6-b139abfa8451.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
  {
    title : "سیندرلا و چهار شوالیه",
    image :"https://static.namava.ir/Content/Upload/Images/825c075f-9409-4415-9a71-51fc25dbce75.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" ,
    year :"سریال-1401" ,
    IMDb: "3.1 IMDb" ,
    subtitle : "زیرنویس",
  },
]
const stars2 = [
  {
    image :"https://static.namava.ir/Content/Upload/Images/40bb9444-8818-4af8-b0bd-e647bf49417a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "استیون اسپیلبرگ",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/443dcac3-a910-45c2-8d64-97bf8ba244af.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: " کنت برانا",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/8a708b1d-889c-43e2-af32-627f9ab1a45c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140https://static.namava.ir/Content/Upload/Images/e813ea37-9ae9-4223-8495-7356fe293a78.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "پل توماس اندرسون",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/eb3fc17a-2eff-4d24-acd2-ecf367ff1d9a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "ریدلی اسکات" ,
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/ef4b020e-11c8-4b32-8430-2ee71c22580c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: " آلفونسو کوارون",
  },
  {
    image :" https://static.namava.ir/Content/Upload/Images/fa96e3fa-5b37-417c-9786-b43a7e59a7ec.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "کوئنتین تارانتینو",
  },
  {
    image :"https://static.namava.ir/Content/Upload/Images/67ae2370-7286-4174-b538-480be7bb277a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
    name: "کلینت ایستوود",
  },
  
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Movielist title="ویژه" list={movieList}/>
    <LiveList  title="پخش زنده" item={liveList}/>
    <NewsizeMovie title="سریال های اختصاصی نماوا" list = {longerMovie}/>
    <Movielist title="تازه های نماوا" list= {movieList2}/>
    <Movielist title="سریال های به روز شده" list= {movieList3}></Movielist>
    <Movielist title="سریال های ایرانی" list= {movieList4}/>
    <NewsizeMovie title="دوبله نماوا" list = {longerMovie2}/>
    <Stars title= "ستارگان" acter = {stars}/>
    <Movielist title="ایرانی" list= {movieList5}/>
    <Rectanglelist  item={liveList2}/>
    <Movielist title="2022" list= {movieList6}/>
    <Movielist title="برترین فیلم ها و سریال های IMDB" list= {movieList7}/>
    <Movielist title="برترین فیلم ها و سریال های متاکریتیک" list= {movieList8}/>
    <Movielist title="آموزش سرگرمی" list= {movieList9}/>
    <Rectanglelist  item={liveList3}/>
    <Movielist title="اکشن" list= {movieList10}/>
    <Movielist title="کمدی" list= {movieList11}/>
    <Movielist title="خانوادگی" list= {movieList12}/>
    <Rectanglelist  item={liveList4}/>
    <Movielist title="کره ای" list= {movieList13}/>
    <Stars title= "کارگردانان" acter = {stars2}/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
