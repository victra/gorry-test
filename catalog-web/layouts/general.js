import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

const Layout = (props) => (
    <html lang="id">
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <link rel="stylesheet" href="/static/css/general.css" />
            <title>{props.meta_title}</title>
        </Head>

        <div class="container-fluid">
            <div class="row">
                <Header />
            </div>
            <div class="row content-gorry">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div class="col-md-10">
                    {props.children}
                </div>
            </div>
            <div class="row">
                <Footer />
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        <script src="/static/js/main.js"></script>
    </html>
)

export default Layout;