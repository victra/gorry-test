import Layout from '../layouts/general'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const sumQuantity = (io) => {
    let sum = 0;
    io.forEach(e => {
        if(e.action == 'masuk') {
            sum += e.quantity;
        } else {
            sum -= e.quantity;
        }
    });
    return sum;
};

const Index = (props) => (
    <Layout meta_title={'Gorry'}>
        <div class="action-container">
            Action
        </div>

        <h1 class="margin-bottom-30">Product List</h1>
        <div class="row">
            {props.catalogs.data.map(catalog => (
                <div class="col-md-2 box-padding">
                    <a href={`/catalog/${catalog._id}`} key={catalog._id}>
                        <div class="box-catalog">
                            {catalog.name} ({sumQuantity(catalog.ioproducts)})
                        </div>
                    </a>
                </div>
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