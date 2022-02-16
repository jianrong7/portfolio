interface sortByDateProps {
  a: Date;
  b: Date;
}

export const sortByDate = (a: string, b: string): void => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
