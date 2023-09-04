import React from 'react'
// import style css
import "./PopularProducts.scss"
// component import
import PopularProductCart from '../../components/popularProductCart/PopularProductCart'
// import my write datas
import { PopularProductDatas } from '../../myWriteSiteDatas/Datas'

function PopularProducts() {
  return (
	<>
	  <section id='popularProducts'>
		<div className="container">
			<div className='popular-header'>
				<h3>Popular Products</h3>
				<ul className='popular-product-page'>
					<li><a href="">All</a></li>
					<li><a href="">Milks & Dairies</a></li>
					<li><a href="">Coffes & Teas</a></li>
					<li><a href="">Pet Foods</a></li>
					<li><a href="">Meats</a></li>
					<li><a href="">Vegetables</a></li>
					<li><a href="">Fruits</a></li>
				</ul>
			</div>
			<div className='popular-product-list'>
				{
					PopularProductDatas.map(item=>(
						<PopularProductCart
						key={item.id}
						trImg={item.trueImage}
						flsImg={item.falseImage}
						popName={item.popName}
						popDes={item.popDescription}
						popValue={item.startValue}
						popProType={item.popProTYPE}
						popPisPrc={item.popPiscountedPrice}
						popPrevPrc={item.popPreviousPrice}
						/>
					))
				}
          
			</div>
		</div>
	  </section>
	</>
  )
}

export default PopularProducts
