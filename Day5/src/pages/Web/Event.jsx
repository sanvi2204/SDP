import { useState } from 'react';


const eventsList = [
  { id: 1, name: 'Party Hall', type: 'PArty Hall', 
    image: 'https://i.pinimg.com/736x/5f/32/db/5f32db9f7d406e327b50d7505c842256.jpg' },
  { id: 2, name: 'Disco', type: 'Disco',
     image: 'https://i.pinimg.com/564x/07/95/23/07952339032c8cf540f2070453f9f597.jpg' },
  { id: 3, name: 'Tech Conference', type: 'Conference', 
    image: 'https://ik.imagekit.io/lede6qmhu/Event/conference.jpg?updatedAt=1721972740579' },
  { id: 4, name: 'Food Festival', type: 'Festival', 
    image: 'https://ik.imagekit.io/lede6qmhu/Event/festival.jpg?updatedAt=1721974479112' },
    {
      id:5,name:'Marriage Events',type:'Marriage Events',
      image:'https://i.pinimg.com/564x/22/64/92/226492c42f3b944d7559b75e475a00f7.jpg'
    },
    {
      id:6,name:'Concert',type:'Concert',
      image:'https://i.pinimg.com/564x/6a/66/95/6a6695b059f5e0fac81dc91b1ebd8295.jpg'
    },
    {
      id:7,name:'Game Events',type:'Game Events',
      image:'https://ik.imagekit.io/lede6qmhu/Event/game.png?updatedAt=1721991468371'
    },
    {
      id:8,name:'Disco',type:'Disco',
      image:'https://ik.imagekit.io/lede6qmhu/Event/disco.jfif?updatedAt=1721991673179'
    },
    {
      id:9,name:'Dance',type:'Dance',
      image:'https://i.pinimg.com/564x/aa/8c/1b/aa8c1b1c61cf1c1dc28c4d3b31fd9a3c.jpg'
    },
    {
      id:10,name:'Birthday',type:'Birthday Party',
      image:'https://i.pinimg.com/564x/76/79/9c/76799ca2a2922f1c8c7361c66bb7b95e.jpg'
    }
  
];

const Event = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = eventsList.filter(event =>
    event.type.toLowerCase().includes(search.toLowerCase()) ||
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="event-app container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center"></h1>
     
      
      <div className="event-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card bg-white rounded-lg shadow-lg p-4">
            <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
            <h3 className="text-lg text-gray-600">{event.type}</h3>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;