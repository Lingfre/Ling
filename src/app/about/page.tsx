import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'
 
 
const page:React.FC = () => {
  return (
    <MainLayout>
  <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <div className="prose lg:prose-xl">
      <p>
        Welcome to our website! We are a team of dedicated professionals who are passionate about providing high-quality services to our clients. Our mission is to deliver exceptional results that exceed our clients&apos; expectations.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Story</h2>
      <p>
        Our company was founded in [300000] by [Mikeyy], who had a vision to create a company that would provide innovative solutions to complex problems. Since then, we have grown to become a leading provider of [services/products] in [industry/region].
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Values</h2>
      <ul>
        <li>
          <strong>Integrity</strong>: We believe in doing business with integrity and transparency.
        </li>
        <li>
          <strong>Excellence</strong>: We strive for excellence in everything we do.
        </li>
        <li>
          <strong>Teamwork</strong>: We believe that teamwork is essential to achieving our goals.
        </li>
      </ul>

      
    </div>
  </div>
</MainLayout>
  )
}
 
export default page