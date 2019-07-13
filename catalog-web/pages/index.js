import Layout from '../layouts/general'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout meta_title={'Gorry'}>
        <div class="action-container">
            Action
        </div>

        <h1 class="margin-bottom-30">Product List</h1>
        <div class="row">
            {props.catalogs.data.map(catalog => (
                <Link href="/catalog/[id]" as={`/catalog/${catalog._id}`}>
                    <div key={catalog._id} class="col-md-2 box-padding">
                        <div class="box-catalog">
                            {catalog.name}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch(process.env.CATALOG_API_URL+'catalog');
    const catalogs = await res.json();
  
    return {catalogs};
};

export default Index;