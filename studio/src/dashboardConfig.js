export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f64435085b3732c4b90f999',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-testing-studio-59d8mnd5',
                  apiId: '240d2a8e-6ecb-4bb7-8d0e-ae4074a44623'
                },
                {
                  buildHookId: '5f644350ac9e2eff5e95013c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-testing-web',
                  apiId: '699765af-11f1-4d6a-893b-a9545d55b30c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/warrencaruana/sanity-gatsby-blog-testing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-testing-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
