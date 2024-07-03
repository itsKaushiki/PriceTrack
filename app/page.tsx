import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceTrack</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="about-us-section bg-red-200 px-6 md:px-20 py-24 text-black rounded-xl">
  <h2 className="section-heading text-5xl text-center text-red-800 mb-6 font-bold">Welcome to <span className="text-black">Price</span><span className="text-primary">Track</span></h2>

  <div className="about-us-content max-w-3xl mx-auto text-lg">
    <p>
      Your go-to <span className="text-red-800 font-bold">ecommerce</span> tool for monitoring price changes on your favorite products. PriceTrack allows users to effortlessly <span className="text-red-800 font-bold">track</span> price variations by simply inputting the product link. Stay updated with real-time price alerts via <span className="text-red-800 font-bold">email</span> whenever there's a change on the tracked sites.
    </p>
  </div>

  <div className="more-info text-center mt-8">
    <p className="text-2xl font-bold text-red-800">Discover More with <span className="text-black">Price</span><span className="text-primary">Track</span></p>
    <p className="text-lg mt-4">
      Explore the power of real-time price tracking and start saving on your purchases today.
    </p>
  </div>
</section>





      <section className="trending-section">
        <h2 className="section-text">WHAT'S ON TRENDING?</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500">
        &copy; 2024 PriceTrack. All rights reserved.
      </footer>
    </>
  )
}

export default Home;
