import React from "react";
import Listings from "../components/Listings";
import houseData from "../data/houses.json";

export default function Rent() {
	return <Listings data={houseData}></Listings>;
}
