import products from '../products.json'
import AddToCartButton from './AddToCartButton'
export function Products() {
    return (
     <div className='sectionProducts'>
        <h2 className='product-title'>Our products</h2>
        <div className='product-cards'>  
        { 
            products.map((product) => {
                return (
                    <div className='product-card' key={ product.id } id={ product.id }>
                        <img src={product.img} className='card-img'></img>
                        <div className='card-description'>
                            <h3 className='card-title'>{ product.name }</h3>
                            <p className='card-text'>{ product.description }</p>
                            <div className='card-section-price'>
                                <p className='card-rate'>&#9734;{ product.rate }/5</p>
                                <p className='card-price'>{ product.price }$</p>
                            </div>
                        </div>
                        <AddToCartButton />
                    </div>
                )
            })
        }
        </div>
    </div>
    )
}