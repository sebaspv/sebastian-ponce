import { GraphQLClient } from 'graphql-request';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import he from 'he';

import Test from "../components/Test"

require('dotenv').config()
const graphcms = GraphQLClient(
    process.env.BLOG_API_URL
)

const components = {
    h2: (props) => <h2 style={{ color: 'red' }} {...props} />,
    Test,
};

export async function getStaticProps({ params }) {
    const { product } = await graphcms.request(
        `
      query ProductPageQuery($slug: String!) {
        product(where: { slug: $slug }) {
          name
          content {
            markdown
          }
        }
      }
    `,
        {
            slug: params.slug,
        }
    );

    return {
        props: {
            product: {
                mdx: await renderToString(
                    he.decode(product.content.markdown),
                    components
                ),
                ...product,
            },
        },
    };
}

export async function getStaticPaths() {
    const { products } = await graphcms.request(`
      {
        products {
          slug
          name
        }
      }
    `);

    return {
        paths: products.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

const ProductPage = ({ product }) => {
    return (
        <React.Fragment>
            <h1>{product.name}</h1>
            {hydrate(product.mdx, components)}
            <p>{product.price / 100}</p>
        </React.Fragment>
    );
};

export default ProductPage;