import { GraphQLClient } from 'graphql-request';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import he from 'he';
import NotANav from '../components/NotANav';
import Footer from "../components/Footer";

const graphcms = new GraphQLClient(
  process.env.BLOG_API_URL
);

export async function getStaticProps({ params }) {
  const { product } = await graphcms.request(
    `
    query ProductPageQuery($slug: String!) {
      product(where: { slug: $slug }) {
        name
        content {
          markdown
        }
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
          he.decode(product.content.markdown)
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
      <NotANav />
      <div className="flex flex-col items-center text-left my-20 mx-72 space-y-4">
        <MDXRemote {...product.mdx}/>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;