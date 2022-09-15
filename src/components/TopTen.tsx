import { useState, useEffect } from "react";
import { dataBaseURL } from "../utils/dbURL";
import axios from "axios";
import { IDataTopTen } from "../utils/interfaces";
import { Row, Table } from "react-bootstrap";
import { formatName } from "../utils/formatName";
import "../app.css";
import io from "socket.io-client";

const socket = io(dataBaseURL);

export function TopTen(): JSX.Element {
  const [topTenBoard, setTopTenBoard] = useState<IDataTopTen[]>([]);

  useEffect(() => {
    const getTopTen = async () => {
      const res = await axios.get(`${dataBaseURL}/topTen`);
      const dataTopTen: IDataTopTen[] = res.data;
      setTopTenBoard(dataTopTen);
    };
    getTopTen();

    socket.on("Update top ten", (socketData) => {
      const topTenViaSocket: IDataTopTen[] = socketData;
      setTopTenBoard(topTenViaSocket);
    });
    return () => {
      socket.off("Update top ten");
    };
  }, []);

  return (
    <Row className="leaderboard">
      <h1>Leaderboard</h1>
      <Table striped bordered hover className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Breed</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topTenBoard.map((dog, index) => {
            return (
              <tr key={dog.breed_id}>
                <td> {index + 1} </td>
                <td> {formatName(dog.dog_breed)} </td>
                <td> {dog.votes} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Row>
  );
}
