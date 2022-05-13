import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-summary-27ea0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
