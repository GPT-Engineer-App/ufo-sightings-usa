const Sightings = () => {
  const sightings = [
    { date: "2023-10-01", description: "Bright light moving erratically in the sky over Nevada." },
    { date: "2023-09-25", description: "Disc-shaped object hovering over a field in Kansas." },
    { date: "2023-09-20", description: "Multiple lights forming a triangle pattern in Texas." },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Recent UFO Sightings</h1>
      <ul className="space-y-2">
        {sightings.map((sighting, index) => (
          <li key={index} className="border-b pb-2">
            <p className="font-semibold">{sighting.date}</p>
            <p>{sighting.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sightings;