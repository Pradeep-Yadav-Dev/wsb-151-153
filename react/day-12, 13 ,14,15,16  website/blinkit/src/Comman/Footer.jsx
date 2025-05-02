import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPlus, FaMinus } from "react-icons/fa"
import { BsCircleFill } from "react-icons/bs"
import { useState } from "react"

const Footer = () => {
  let [footer , setFoot] = useState(false)
  let open = ()=>{
    setFoot(!footer)
  }
  return (
    <footer className="max-w-[1180px] mx-auto px-2 py-8 text-gray-700 mt-[20px]">
      <div className=" w-full block lg:hidden ">
        <img src="/images/light.png" alt="" />
      </div>
      <div className="block lg:hidden py-[20px] cursor-pointer" onClick={open}>
        <div className="flex justify-between">
          <h1 className=" capitalize text-2xl font-medium">india's last minute app</h1>
          <span> { footer ? <FaMinus /> : <FaPlus />}  </span>
          
        </div>
      </div>


      <div className="hidden lg:block">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <div className="grid grid-cols-3 gap-y-2">
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                About
              </a>
              <a  className="block hover:text-gray-900">
                Careers
              </a>
              <a  className="block hover:text-gray-900">
                Blog
              </a>
              <a  className="block hover:text-gray-900">
                Press
              </a>
              <a  className="block hover:text-gray-900">
                Lead
              </a>
              <a  className="block hover:text-gray-900">
                Value
              </a>
            </div>
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Privacy
              </a>
              <a  className="block hover:text-gray-900">
                Terms
              </a>
              <a  className="block hover:text-gray-900">
                FAQs
              </a>
              <a  className="block hover:text-gray-900">
                Security
              </a>
              <a  className="block hover:text-gray-900">
                Mobile
              </a>
              <a  className="block hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Partner
              </a>
              <a  className="block hover:text-gray-900">
                Franchise
              </a>
              <a  className="block hover:text-gray-900">
                Seller
              </a>
              <a  className="block hover:text-gray-900">
                Warehouse
              </a>
              <a  className="block hover:text-gray-900">
                Deliver
              </a>
              <a  className="block hover:text-gray-900">
                Resources
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex gap-[20px] items-center mb-4">
            <h3 className="text-xl  font-bold">Categories</h3>
            <a  className="text-green-600 hover:underline">
              see all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
            <div className="space-y-2">
              <a className="block hover:text-gray-900">
                Vegetables & Fruits
              </a>
              <a  className="block hover:text-gray-900">
                Cold Drinks & Juices
              </a>
              <a  className="block hover:text-gray-900">
                Bakery & Biscuits
              </a>
              <a  className="block hover:text-gray-900">
                Dry Fruits, Masala & Oil
              </a>
              <a  className="block hover:text-gray-900">
                Paan Corner
              </a>
              <a  className="block hover:text-gray-900">
                Pharma & Wellness
              </a>
              <a  className="block hover:text-gray-900">
                Ice Creams & Frozen Desserts
              </a>
              <a  className="block hover:text-gray-900">
                Beauty & Cosmetics
              </a>
              <a  className="block hover:text-gray-900">
                Electronics & Electricals
              </a>
              <a  className="block hover:text-gray-900">
                Toys & Games
              </a>
            </div>

            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Dairy & Breakfast
              </a>
              <a  className="block hover:text-gray-900">
                Instant & Frozen Food
              </a>
              <a className="block hover:text-gray-900">
                Sweet Tooth
              </a>
              <a  className="block hover:text-gray-900">
                Sauces & Spreads
              </a>
              <a  className="block hover:text-gray-900">
                Organic & Premium
              </a>
              <a  className="block hover:text-gray-900">
                Cleaning Essentials
              </a>
              <a  className="block hover:text-gray-900">
                Personal Care
              </a>
              <a  className="block hover:text-gray-900">
                Magazines
              </a>
              <a  className="block hover:text-gray-900">
                Stationery Needs
              </a>
              <a  className="block hover:text-gray-900">
                Print Store
              </a>
            </div>

            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Munchies
              </a>
              <a  className="block hover:text-gray-900">
                Tea, Coffee & Health Drinks
              </a>
              <a  className="block hover:text-gray-900">
                Atta, Rice & Dal
              </a>
              <a  className="block hover:text-gray-900">
                Chicken, Meat & Fish
              </a>
              <a  className="block hover:text-gray-900">
                Baby Care
              </a>
              <a  className="block hover:text-gray-900">
                Home & Office
              </a>
              <a  className="block hover:text-gray-900">
                Pet Care
              </a>
              <a  className="block hover:text-gray-900">
                Fashion & Accessories
              </a>
              <a  className="block hover:text-gray-900">
                Books
              </a>
              <a  className="block hover:text-gray-900">
                E-Gift Cards
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-evenly gap-[20px] items-center ">
          <div className="text-sm text-gray-500">© Blink Commerce Private Limited, 2016-2025</div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-700">Download App</span>
            <a  className="inline-block">
              <img
                src="/images/4.webp" 
                alt=""
                className="h-10 w-auto"
              />
            </a>
            <a  className="inline-block">
              <img
                src="/images/3.webp" 
                alt=""
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="flex gap-4">
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaFacebook size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaTwitter size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaInstagram size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaLinkedin size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <BsCircleFill size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 w-full">
          "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected
          in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone
          Consultancy Services Private Limited".
        </div>
      </div>
      </div>

      <div className={footer ? "block" : "hidden"}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <div className="grid grid-cols-3 gap-y-2">
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                About
              </a>
              <a  className="block hover:text-gray-900">
                Careers
              </a>
              <a  className="block hover:text-gray-900">
                Blog
              </a>
              <a  className="block hover:text-gray-900">
                Press
              </a>
              <a  className="block hover:text-gray-900">
                Lead
              </a>
              <a  className="block hover:text-gray-900">
                Value
              </a>
            </div>
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Privacy
              </a>
              <a  className="block hover:text-gray-900">
                Terms
              </a>
              <a  className="block hover:text-gray-900">
                FAQs
              </a>
              <a  className="block hover:text-gray-900">
                Security
              </a>
              <a  className="block hover:text-gray-900">
                Mobile
              </a>
              <a  className="block hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Partner
              </a>
              <a  className="block hover:text-gray-900">
                Franchise
              </a>
              <a  className="block hover:text-gray-900">
                Seller
              </a>
              <a  className="block hover:text-gray-900">
                Warehouse
              </a>
              <a  className="block hover:text-gray-900">
                Deliver
              </a>
              <a  className="block hover:text-gray-900">
                Resources
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex gap-[20px] items-center mb-4">
            <h3 className="text-xl  font-bold">Categories</h3>
            <a  className="text-green-600 hover:underline">
              see all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
            <div className="space-y-2">
              <a className="block hover:text-gray-900">
                Vegetables & Fruits
              </a>
              <a  className="block hover:text-gray-900">
                Cold Drinks & Juices
              </a>
              <a  className="block hover:text-gray-900">
                Bakery & Biscuits
              </a>
              <a  className="block hover:text-gray-900">
                Dry Fruits, Masala & Oil
              </a>
              <a  className="block hover:text-gray-900">
                Paan Corner
              </a>
              <a  className="block hover:text-gray-900">
                Pharma & Wellness
              </a>
              <a  className="block hover:text-gray-900">
                Ice Creams & Frozen Desserts
              </a>
              <a  className="block hover:text-gray-900">
                Beauty & Cosmetics
              </a>
              <a  className="block hover:text-gray-900">
                Electronics & Electricals
              </a>
              <a  className="block hover:text-gray-900">
                Toys & Games
              </a>
            </div>

            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Dairy & Breakfast
              </a>
              <a  className="block hover:text-gray-900">
                Instant & Frozen Food
              </a>
              <a className="block hover:text-gray-900">
                Sweet Tooth
              </a>
              <a  className="block hover:text-gray-900">
                Sauces & Spreads
              </a>
              <a  className="block hover:text-gray-900">
                Organic & Premium
              </a>
              <a  className="block hover:text-gray-900">
                Cleaning Essentials
              </a>
              <a  className="block hover:text-gray-900">
                Personal Care
              </a>
              <a  className="block hover:text-gray-900">
                Magazines
              </a>
              <a  className="block hover:text-gray-900">
                Stationery Needs
              </a>
              <a  className="block hover:text-gray-900">
                Print Store
              </a>
            </div>

            <div className="space-y-2">
              <a  className="block hover:text-gray-900">
                Munchies
              </a>
              <a  className="block hover:text-gray-900">
                Tea, Coffee & Health Drinks
              </a>
              <a  className="block hover:text-gray-900">
                Atta, Rice & Dal
              </a>
              <a  className="block hover:text-gray-900">
                Chicken, Meat & Fish
              </a>
              <a  className="block hover:text-gray-900">
                Baby Care
              </a>
              <a  className="block hover:text-gray-900">
                Home & Office
              </a>
              <a  className="block hover:text-gray-900">
                Pet Care
              </a>
              <a  className="block hover:text-gray-900">
                Fashion & Accessories
              </a>
              <a  className="block hover:text-gray-900">
                Books
              </a>
              <a  className="block hover:text-gray-900">
                E-Gift Cards
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-evenly gap-[20px] items-center ">
          <div className="text-sm text-gray-500">© Blink Commerce Private Limited, 2016-2025</div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-700">Download App</span>
            <a  className="inline-block">
              <img
                src="/images/4.webp" 
                alt=""
                className="h-10 w-auto"
              />
            </a>
            <a  className="inline-block">
              <img
                src="/images/3.webp" 
                alt=""
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="flex gap-4">
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaFacebook size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaTwitter size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaInstagram size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <FaLinkedin size={20} />
            </a>
            <a  className="bg-gray-900 text-white p-2 rounded-full">
              <BsCircleFill size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 w-full">
          "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected
          in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone
          Consultancy Services Private Limited".
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer
