
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div
        className="h-screen bg-gray-500"
      >
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-4 mt-24 text-white text-center">Welcome to Our Website</h1>
          <p className="text-lg text-white mb-4 text-center">This is a sample website built with React.</p>
          <div className="flex justify-center">
          <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
