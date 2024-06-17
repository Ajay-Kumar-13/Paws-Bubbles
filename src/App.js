import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

	const [user, setUser] = useState(false);

	const navigate = useNavigate();


	return (
		<div className="homePage">

			<div className='Navbar pt-3'>
				<Navbar />
			</div>

			<div className='container mt-5'>
				<div className='banner'>
					<h1 className='ralewayFont'>Pet Grooming Service at Home.</h1>
					<p className='ralewayFont mt-4'>At Paws & Bubbles, we provide top-notch pet grooming services to keep your furry friends looking and feeling their best. From to nail trimming, our experienced team will give your pets the care and attention they deserve.</p>
					<button className='mt-5 fs-5' onClick={() => {navigate('/services')}}>Book a Professional Groomer</button>
				</div>
			</div>

			{/* <div className='banner pt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<img src='/assests/doggyy.png' />
						</div>
						<div className='col-6 p-5'>
							<h1 className='ralewayFont'>Pet Grooming Service at Home.</h1>
							<p className='ralewayFont fs-4'>At Paws & Bubbles, we provide top-notch pet grooming services to keep your furry friends looking and feeling their best. From to nail trimming, our experienced team will give your pets the care and attention they deserve.</p>
							<button className='mt-5'>Book a Professional Groomer</button>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div className="container caudexFont"> */}
			{/* <div>
					<div className='search'>
						<div className='Content pt-0 pb-0'>
							<div className='inputField d-flex'>
								<div className='input1 d-flex align-items-center social-icons'>
									<i class="fa-solid fa-location-dot"></i>
									<input placeholder='Visakhapatnam' />
								</div>
								<div className='input2 d-flex align-items-center social-icons'>
									<i class="fa-solid fa-magnifying-glass"></i>
									<input placeholder='Search for our grooming services' />
								</div>
							</div>
						</div>
					</div>
				</div> */}
			{/* 
				<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
					<ol className="carousel-indicators">
						<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
						<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className='Content'>
								<div className='petCard'>
									<img src='/assests/dog.jpg' className="d-block w-100" alt="Dog" />
								</div>
								<div className='cardContent ralewayFont topLeft'>
									<h1 className='fw-normal mb-4 black'>Paws & Bubbles</h1>
									At Paws & Bubbles, we provide top-notch pet grooming services to keep your furry friends looking and feeling their best. From to nail trimming, our experienced team will give your pets the care and attention they deserve.
									<button onClick={() => { navigate('/services') }}>Our Services</button>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className='Content'>
								<div className='petCard'>
									<img src='/assests/cat.jpg' className="d-block w-100" alt="Cat" />
								</div>
								<div className='cardContent ralewayFont topRight'>
									<h1 className='fw-normal mb-4 black'>Paws & Bubbles</h1>
									At Paws & Bubbles, we provide top-notch pet grooming services to keep your furry friends looking and feeling their best. From to nail trimming, our experienced team will give your pets the care and attention they deserve.
									<button onClick={() => { navigate('/services') }}>Our Services</button>
								</div>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>


				<div className='Content pt-4 pb-3'>
					<hr />
					<div className='d-flex justify-content-between'>
						<div>
							<p className='fw-light ralewayFont'>©2024 by PAWS & BUBBLES</p>
						</div>
						<div className='social-icons'>
							<i class="fa-brands fa-facebook-f"></i>
							<i class="fa-brands fa-x-twitter"></i>
							<i class="fa-brands fa-instagram"></i>
						</div>
					</div>
				</div>
			</div>
		</div> */}
		</div>
	);
}

export default App;