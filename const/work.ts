interface Work {
  theme?: string;
  name: string;
  worktitle: string;
  date: string;
  image: string;
}

export const workhistory: Work[] = [
  {
    name: "CertiK",
    worktitle: "Full Stack Developer Associate",
    date: "2022 - Present",
    image: "/static/images/certik.jpg",
  },
  {
    name: "Cuny Tech Prep",
    worktitle: "Full Stack Developer Apprentice",
    date: "2021 - 2022",
    image: "/static/images/cunyprep.jpg",
  },
  {
    name: "Develop For Good, Climate Donor",
    worktitle: "Frontend Developer Volunteer",
    date: "2021 - 2021",
    image: "/static/images/develop.jpg",
  },
  {
    name: "NYC Blockchain Center",
    worktitle: "Software Engineer Intern",
    date: "2020 - 2020",
    image: "/static/images/blockchaincenter.jpg",
  },
];
