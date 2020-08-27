export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f478e727ba521ae8b7fde75',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t9ewrk5u',
                  apiId: 'ecba5511-45d4-4272-ac72-7930a22d0efa'
                },
                {
                  buildHookId: '5f478e72cdd0f76cf9fb97d7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kh655fy8',
                  apiId: 'ec005bf7-70f4-49cc-9992-63026e5dcca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Panhara28/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kh655fy8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
