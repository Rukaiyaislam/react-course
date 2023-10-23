import MeetupList from "../meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetups() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setisLoading(true);
    fetch("https://react-again-babaf-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setisLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetups;
