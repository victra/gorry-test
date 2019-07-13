import { useRouter } from 'next/router';
import Layout from '../../layouts/general'
import fetch from 'isomorphic-unfetch';

const ShowCatalog = (props) => {
    return (
        <Layout meta_title={'Gorry Catalog'}>
            <h3 class="margin-bottom-30">List Keluar Masuk {props.catalog.data.name}</h3>
            <div class="row">
                <div class="container">
                    <table>
                        <tbody>
                            {props.catalog.data.ioproducts.length > 0 ? (
                                props.catalog.data.ioproducts.map(product => (                            
                                <tr key={product._id}>
                                    <td>{product.action}</td>
                                    <td>:</td>
                                    <td>{product.quantity}</td>
                                </tr>
                                ))
                            ) : ('Data tidak ditemukan')}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

ShowCatalog.getInitialProps = async (router) => {
    const { id } = router.query;

    const res = await fetch(process.env.CATALOG_API_URL+'catalog/'+id);
    const catalog = await res.json();
  
    return {catalog};
};

export default ShowCatalog;