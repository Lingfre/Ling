import React from "react"
import MainLayout from "@/components/layouts/MainLayout"




const contact:React.FC = () => {
    return (
      <MainLayout>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <div className="prose lg:prose-xl">
          <p>
            We&apos;d love to hear from you! Whether you have a question, a comment, or just want to say hello, please don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-wrap justify-center mb-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <h2 className="text-lg font-bold mb-2">Address</h2>
              <p>123 Bulatok</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <h2 className="text-lg font-bold mb-2">Phone</h2>
              <p>09123456789</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <h2 className="text-lg font-bold mb-2">Email</h2>
              <p><a href="mailto:info@companyname.com">info@wews.com</a></p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <h2 className="text-lg font-bold mb-2">Social Media</h2>
              <p>
                <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="name">Name:</label>
              <input type="text"  id="name" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="email">Email:</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="message">Message:</label>
              <textarea id="message" className="w-full p-2 border border-black-400 rounded" ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text- font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </MainLayout>
    )
  }
   
  export default contact