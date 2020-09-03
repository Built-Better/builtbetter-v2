/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

var slugify = require("slugify")

exports.createPages = async function ({ actions, graphql }) {
  // Blog Post Pages
  const posts_data = await graphql(`
    query PostsQuery {
      bbschema {
        contents(id: "5f3812eb177bd45bc4448bde") {
          content
          id
        }
      }
    }
  `)
  posts_data.data.bbschema.contents.forEach(post => {
    if (post.content.published === "true") {
      const slug = `blog_post/${slugify(post.content.title)}`
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/views/templates/blog_post.jsx`),
        context: { id: post.id, category: post.content.category },
      })
    }
  })

  // Case Study Pages
  const cases_data = await graphql(`
    query CaseStudiesQuery {
      bbschema {
        contents(id: "5f39d6d3c9e4a93ead5627c7") {
          content
          id
        }
      }
    }
  `)

  cases_data.data.bbschema.contents.forEach(project => {
    const slug = `case_study/${slugify(project.content.title)}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/views/templates/case_study.jsx`),
      context: { id: project.id },
    })
  })

  // Project Pages
  const projects_data = await graphql(`
    query ProjectsQuery {
      bbschema {
        contents(id: "5f4ea46ac9e4a93ead5627db") {
          content
          id
        }
      }
    }
  `)

  projects_data.data.bbschema.contents.forEach(project => {
    const slug = `projects/${slugify(project.content.title)}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/views/templates/project.jsx`),
      context: { id: project.id },
    })
  })
}
