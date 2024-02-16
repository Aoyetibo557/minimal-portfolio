interface Work {
  theme?: string;
  name: string;
  worktitle: string;
  date: string;
  image: string;
  href?: string;
}

export const workhistory: Work[] = [
  // {
  //   name: "FlxLease",
  //   worktitle: "Full Stack Developer",
  //   date: "Jan 2024 - present",
  //   image: "/static/images/flxlease.png",
  //   href: "https://flxlease.com/",
  // },
  {
    name: "GoLinks",
    worktitle: "Frontend Developer Intern",
    date: "June 2023 - Sept 2023",
    image: "/static/images/golinksLogo.jpg",
    href: "https://golinks.io/",
  },
  {
    name: "CertiK",
    worktitle: "Full Stack Developer Associate",
    date: "Nov 2022 - Feb 2023",
    image: "/static/images/certik.jpg",
    href: "https://www.certik.com/",
  },
  {
    name: "Develop For Good, Climate Donor",
    worktitle: "Frontend Developer Volunteer",
    date: "Apr 2021 - Jul 2021",
    image: "/static/images/develop.jpg",
    href: "https://www.developforgood.org/",
  },
  {
    name: "NYC Blockchain Center",
    worktitle: "Software Engineer Intern",
    date: "Jul 2020 - Sept 2020",
    image: "/static/images/blockchaincenter.jpg",
    href: "https://gbbcouncil.org/initiatives/nyc-blockchain-center/",
  },
];
