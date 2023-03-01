'use client';

export default function Error({ error }) {
  console.log(error);
  return (
    <div>
      <h2>Oops there was an error</h2>
      {/* <h3>{error.message}</h3> */}
    </div>
  );
}
