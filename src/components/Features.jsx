import PostCard from '../components/PostCard'
import PostList from '../components/PostList';
import iconPath from '../assets/Client-First-IMAGES/white-concrete-building-1838640.svg';


function Features() {
    const posts = [
        {
          author: 'Jane Doe',
          date: 'Aug 23, 2023',
          title: '8 Figma design systems that you can download for free today.',
        },
        {
          author: 'Jane Doe',
          date: 'Aug 23, 2023',
          title: '8 Figma design systems that you can download for free today.',
        },
        {
          author: 'Jane Doe',
          date: 'Aug 23, 2023',
          title: '8 Figma design systems that you can download for free today.',
        },
        {
          author: 'Jane Doe',
          date: 'Aug 23, 2023',
          title: '8 Figma design systems that you can download for free today.',
        },
      ];
  return (
    
    <div className="container mx-auto p-4">
    <div className="flex flex-col lg:flex-row justify-between mt-4">
      
      {/* Post Card Section */}
      <div className="bg-white p-4 flex w-full lg:w-1/2 mb-4 lg:mb-0">
        <PostCard
          imageUrl={iconPath}
          author="John Doe"
          date="May 23, 2022"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          onReadMore={() => alert('Read more clicked!')}
        />
      </div>
  
      {/* Post List Section */}
      <div className="bg-white p-4 flex w-full lg:w-1/2">
        <PostList posts={posts} />
      </div>
  
    </div>
  </div>
  
  )
}

export default Features