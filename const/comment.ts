interface Comment {
  theme?: string;
  image: string;
  name: string;
  comment: string;
  date: string;
}

export const commentlist: Comment[] = [
  {
    image: "/static/images/js.png",
    name: "Jacob Taylor",
    comment:
      "He is a valuable team player, consistently collaborating effectively with team members. He actively participates in team discussions, shares valuable insights, and is always willing to assist others. His positive attitude and strong interpersonal skills enhance the overall team dynamics.",
    date: "September 12, 2023",
  },
  {
    image: "/static/images/js.png",
    name: "Anonymous",
    comment:
      "Anu consistently demonstrates exceptional problem-solving skills. In the past few months, faced with a complex issue in chrome extension development, he adeptly analyzed the situation, created a plan of action and implemented a robust solution. This ability to troubleshoot and resolve issues efficiently significantly contributed to the success of the project",
    date: "Spetember 01, 2023",
  },
  {
    image: "/static/images/js.png",
    name: "Ethan Prince",
    comment:
      "Anu has shown remarkable adaptability in learning new technologies and frameworks. In the recent integration of TypeScript and NextJs, he quickly acquired the necessary skills and successfully implemented several features within the project timeline. His eagerness to stay updated on industry trends is commendable.",
    date: "Febuary 14, 2023",
  },
  {
    image: "/static/images/js.png",
    name: "Temuulen Erdenekhuu",
    comment:
      "He shows a lot of initiative and is always willing to learn new things. He always meets his deadlines and communicates changes to schedule if there is a need.",
    date: "Febuary 11, 2022",
  },
];
