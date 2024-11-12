import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-900 text-white min-h-screen">
        <div className="max-w-full md:max-w-1/2 text-center md:text-left">
          <h1 className="text-3xl text-teal-400 mb-4">Hello, I&lsquo;m Sikandar Ali</h1>
          <p className="text-lg text-gray-300 mb-4">
            Hello! I&lsquo;m a passionate web developer and IT student currently pursuing a course in Cloud Applied Generative AI Engineering. With a solid foundation in HTML, CSS, JavaScript/TypeScript, and frameworks like Next.js and React, I enjoy creating engaging and visually appealing user interfaces. I have successfully completed multiple projects focusing on modern design principles, responsiveness, and user experience.
          </p>
          <p className="text-gray-300 mb-4">
            I am also diving into data science and artificial intelligence to expand my skill set further. My goal is to develop innovative solutions that leverage the power of AI and cloud technology. As I grow in this field, I&lsquo;m excited to work on projects that challenge me and help me learn new technologies.
          </p>
        </div>
        
        <div className="w-full md:max-w-sm mb-8 md:mb-0 md:ml-8 flex justify-center">
          <Image src="/nasir portfolio.jpg" alt="Profile Image" width={500} height={500} className="rounded-lg shadow-lg"/>
        </div>
      </section>
    </div>
  );
};

export default Home;
