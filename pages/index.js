import MeetupList from "../components/meetups/MeetUpList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Brno_-_Veve%C5%99%C3%AD_-_Stavebn%C3%AD_fakulta_VUT.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Brno_-_Veve%C5%99%C3%AD_-_Stavebn%C3%AD_fakulta_VUT.jpg",
    address: "Some address 15, 12345 Some City",
    description: "This is a first meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
