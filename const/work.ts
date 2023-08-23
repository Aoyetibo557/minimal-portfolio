interface Work {
  theme?: string;
  name: string;
  worktitle: string;
  date: string;
  image: string;
  href?: string;
}

export const workhistory: Work[] = [
  {
    name: "GoLinks",
    worktitle: "Frontend Developer",
    date: "June 2022 - Present",
    image: "/static/images/golinksLogo.jpg",
    href: "https://golinks.io/",
  },
  {
    name: "CertiK",
    worktitle: "Full Stack Developer Associate",
    date: "Nov 2021 - Feb 2022",
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
