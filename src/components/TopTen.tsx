import { useState, useEffect } from "react";
import { dataBaseURL } from "../utils/dbURL";
import axios from "axios";
import { IDataTopTen } from "../utils/interfaces";
import { Table } from "react-bootstrap";
import { formatName } from "../utils/formatName";
import "../app.css";

interface ITopTenProps {
  votesRegistered: number;
}

export function TopTen({ votesRegistered }: ITopTenProps): JSX.Element {
  const [topTenBoard, setTopTenBoard] = useState<IDataTopTen[]>([]);
  useEffect(() => {
    const getTopTen = async () => {
      const res = await axios.get(`${dataBaseURL}/topTen`);
      console.log(dataBaseURL, "getting Top Ten");
      const dataTopTen: IDataTopTen[] = res.data;
      setTopTenBoard(dataTopTen);
    };

    getTopTen();
  }, [votesRegistered]);

  return (
    <div className="leaderboard">
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
          {topTenBoard.map((breed, index) => {
            return (
              <tr key={breed.breed_id}>
                <td> {index + 1} </td>
                <td> {formatName(breed.dog_breed)} </td>
                <td> {breed.votes} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
