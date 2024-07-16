import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/1/1d/Brno_-_Veve%C5%99%C3%AD_-_Stavebn%C3%AD_fakulta_VUT.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="The is a first meetup"
    />
  );
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    prop: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1d/Brno_-_Veve%C5%99%C3%AD_-_Stavebn%C3%AD_fakulta_VUT.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
