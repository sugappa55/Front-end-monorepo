import useFetch from "@/custom-hooks/use-fetch";
import React from "react";

const FetchData = () => {
  const { data, error, loading } = useFetch<{ name: string; id: number }[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <div>Loading .....</div>;
  if (error) return <div className='red'>Error - {error.message}</div>;
  return <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
};

export default FetchData;
