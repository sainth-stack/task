import { Hidden } from "@material-ui/core";
import React from "react";
import './pages.css'
import Rating from "react-rating";
class Home extends React.Component{
    render(){
        return(
        
<div class="container">


	
		<main>
        <div className="container"style={{height:500}}>
        <div className="row">
        <div className=" col-sm-6">
            <img className="img1" src='assets/img/simple-house-01.jpg' style={{width:380,height:450,scroll:true,"border-radius":50}}/>
        </div>
<div className=" col-sm-6">
			<header class="row tm-welcome-section mt-5">
				<h1 class="col-12 text-left tm-section-title">Welcome to Simple House</h1>
				<p class="col-12 text-left">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
   
   

 
			<br/><br/><p style={{"font-size":25,"font-style":'normal',color:'black'}}>Price:$12</p>
			<Rating className="rating"
                                initialRating={5}
  emptySymbol="fa fa-star-o fa-1x"
  fullSymbol="fa fa-star fa-1x"
  
  readonly={true}
  
/>
            </header>
			
			<div class="tm-paging-links">
				<nav>
					<ul className="text-left item2">
						<li class="tm-paging-item"><a href="#" class="tm-paging-link active">Add to Cart</a></li>
						<li class="tm-paging-item"><a href="#" class="tm-paging-link">Buy Now</a></li>
					</ul>
				</nav>
                </div>
			</div>
            <hr/>
            </div>
            </div>

			<div class="row tm-gallery">
				<div id="tm-gallery-page-pizza" class="tm-gallery-page">
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/01.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Fusce dictum finibus</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$45 / $55</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/02.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Aliquam sagittis</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$65 / $70</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/03.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Sed varius turpis</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$30.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/04.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Aliquam sagittis</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$25.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/05.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Maecenas eget justo</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$80.25</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/06.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Quisque et felis eros</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$20 / $40 / $60</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/07.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Sed ultricies dui</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$94</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/08.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Donec porta consequat</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$15</p>
							</figcaption>
						</figure>
					</article>
				</div> 
				
				<div id="tm-gallery-page-salad" class="tm-gallery-page hidden">
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/04.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Salad Menu One</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$25</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/03.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Second Title Salad</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$30</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/05.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Third Salad Item</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$45</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="assets/img/gallery/01.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Superior Salad</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/08.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Sed ultricies dui</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$55 / $60</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/07.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Maecenas eget justo</h4>
								<p class="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p class="tm-gallery-price">$75</p>
							</figcaption>
						</figure>
					</article>
				</div> 
				
				<div id="tm-gallery-page-noodle" class="tm-gallery-page hidden">
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/08.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Noodle One</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$12.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/07.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Noodle Second</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$15.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/06.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Third Soft Noodle</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$20.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/05.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Aliquam sagittis</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$30.25</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/04.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Maecenas eget justo</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$35.50</p>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="img/gallery/03.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Quisque et felis eros</h4>
								<p class="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p class="tm-gallery-price">$40.50</p>
							</figcaption>
						</figure>
					</article>

				</div> 
			</div>
		
		</main>
 

	
	</div>



        
        )
    }
}
export default Home