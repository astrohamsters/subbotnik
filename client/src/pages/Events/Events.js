import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Col, Spinner } from 'react-bootstrap';
import gql from "graphql-tag";

import './Events.css';

const GET_TOP_SONGS = gql`
	query {
		getTopSongs{
			id
			title
			artist
		}
	}
`;

const Explore = () => {
	const [songs, setSongs] = useState([])

	const { loading, error, data } = useQuery(GET_TOP_SONGS);

  useEffect(() => {
    if (data) {
			setSongs(data.getTopSongs);
    }
  }, [data]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  const MainContent =
    loading || error ? (
			<Spinner animation="border" />
    ) : (songs.map(({ title, artist }, i) => (
		''
		))
		)

  return (
    <div className="Page">
			<div className="Explore">
				<Col xs={12} sm={{ span: 10, offset: 1 }} className="header">
					<Col>
						<div className="text">Субботники</div>
					</Col>
				</Col>
				{MainContent}
			</div>
    </div>
  );
};

export default Explore
