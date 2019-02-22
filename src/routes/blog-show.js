import { h } from 'preact'
import ago from 's-ago'
import Layout from '../components/layout'
import blog from '../blog'
import hero from '../_data/hero'
import Meta from '../components/meta'
import Async from '../components/async'
import { DisqusThread } from '../components/disqus-thread'
import { getBaseUrl } from '../util'

const BlogShow = ({ id }) => (
  <Async
    getComponent={() =>
      blog
        .get(id)()
        .then(({ id, date, title, description, author, body }) => (
          <Layout>
            <Meta
              title={`${title} - ${hero.title}`}
              description={description}
              author={author}
            />
            <h1>{title}</h1>
            <p class="text-muted">
              {ago(date)} by {author}
            </p>
            <hr />
            <div
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            <DisqusThread
              shortname="runelite"
              config={{
                url: getBaseUrl() + '/blog/show/' + id,
                identifier: id,
                title
              }}
            />
          </Layout>
        ))
    }
  />
)

export default BlogShow
