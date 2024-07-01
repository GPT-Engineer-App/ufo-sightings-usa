import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">UFO Sightings in the USA</h1>
      <h2 className="text-2xl text-muted-foreground">Explore the unexplained phenomena</h2>
      <p className="text-lg">
        Welcome to the ultimate resource for UFO sightings in the USA. Discover the latest reports, detailed analyses, and historical data on unidentified flying objects.
      </p>
      <Button variant="primary" size="lg">Learn More</Button>
    </div>
  );
};

export default Index;