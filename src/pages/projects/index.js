import React from 'react';
import MainLayout from 'src/components/templates/MainLayout/MainLayout';
import { portfolio, proj } from 'src/styles/portfolio.module.scss';
import { graphql, Link } from 'gatsby';

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <MainLayout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={proj}>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      html
      id
    }
  }
}
`;
