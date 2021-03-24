export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605acbb23bc4597eb60d43cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1bx82f19',
                  apiId: '08a37455-f2ae-475f-8011-35f6b246e570'
                },
                {
                  buildHookId: '605acbb25869f56bd42de62c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-97gfiybo',
                  apiId: '8af1133f-9f7f-464b-86ea-9ea3f89c704b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shyniben/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-97gfiybo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
