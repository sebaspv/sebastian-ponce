import { GraphQLClient } from 'graphql-request';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import he from 'he';
import Test from '../components/Test';

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckxjlw89l386k01xp5f5s3qem/master'
);

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
        content
        price
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
        mdx: await serialize(
          he.decode(product.content)
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
    <>
      <h1>{product.name}</h1>
      <MDXRemote {...product.mdx} components={components} />
      <p>{product.price / 100}</p>
    </>
  );
};

export default ProductPage;