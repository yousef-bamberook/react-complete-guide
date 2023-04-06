import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const resDate = await response.json();
    return resDate.events;
  }
}

//loader of the page will be called right when we start navigating to
//the page , NOT after the page component has been rendered
export function loader() {
  /*
    defer feature can speed up pages
    and make sure that we're already showing some content
    while waiting for other content.
    It especially good if we have pages with
    multiple HTTP requests with different speeds
  */
  return defer({
    events: loadEvents(),
  });
}
