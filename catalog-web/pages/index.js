import Layout from '../layouts/general'
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

export default class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            quantity: 1,
            action: 'masuk',
            product: '',
        }
    }

    handleChangeProduct = (event) => {
        this.setState({product: event.target.value});
    }

    handleChangeQuantity = (event) => {
        this.setState({quantity: event.target.value});
    }

    handleChangeAction = (event) => {
        this.setState({action: event.target.value});
    }

    handleSubmit = async (event) => {
        if (!this.state.product) {
            alert("Silahkan pilih produk");
            event.preventDefault();
        }
        if (this.state.quantity == 0) {
            alert("Silahkan masukan quantity produk");
            event.preventDefault();
        }

        await fetch(`http://localhost:3011/api/catalog/${this.state.product}/ioproduct/${this.state.quantity}/${this.state.action}`, {
            method: 'post',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        });
    }

    static async getInitialProps() {
        const res = await fetch(process.env.CATALOG_API_URL+'catalog');
        const catalogs = await res.json();
    
        return {catalogs};
    }

    render () {
        return (
            <Layout meta_title={'Gorry'}>
                <div class="action-container">
                    Action
                    <form onSubmit={this.handleSubmit}>
                        <select value={this.state.product} onChange={this.handleChangeProduct}>
                            <option value="" disabled>Pilih Produk</option>
                            {this.props.catalogs.data.map(catalog => (
                                <option value={catalog._id} key={catalog._id}>{catalog.name}</option>
                            ))}
                        </select>
                        <input type="number" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChangeQuantity} />
                        <select value={this.state.action} onChange={this.handleChangeAction}>
                            <option value="masuk">Masuk</option>
                            <option value="keluar">Keluar</option>
                        </select>
                        <input type="submit" />
                    </form>
                </div>

                <h1 class="margin-bottom-30">Product List</h1>
                <div class="row">
                    {this.props.catalogs.data.map(catalog => (
                        <div class="col-md-2 box-padding" key={catalog._id}>
                            <a href={`/catalog/${catalog._id}`}>
                                <div class="box-catalog">
                                    {catalog.name} ({sumQuantity(catalog.ioproducts)})
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
};