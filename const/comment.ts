interface Comment {
  theme?: string;
  image: string;
  name: string;
  comment: string;
  date: string;
}

export const commentlist: Comment[] = [
  {
    image: "/images/js.png",
    name: "",
    comment:
      "He has a great attitude and openness that makes him easily one of the finest developers i've had the pleasure of working with. I would highly recommend her for any project.",
    date: "Febuary 22, 2023",
  },
  {
    image: "/images/js.png",
    name: "Subomi Olaifa",
    comment:
      "His attention to detail is very encouraging and his go getter attitude is very inspiring. He is always willing and ready to help out.",
    date: "January 14, 2023",
  },
  {
    image: "/images/js.png",
    name: "Anonymous",
    comment:
      "He shows a lot of initiative and is always willing to learn new things. His always meets his deadlines and is very reliable. 5 stars .",
    date: "November 25, 2022",
  },
];
