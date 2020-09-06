import React from "react";
import Link from "./Link";

const links = [
	{
		id: "1",
		description: "Prisma turns your database into a GraphQL API 😎",
		url: "https://www.prismagraphql.com",
	},
	{
		id: "2",
		description: "The best GraphQL client",
		url: "https://formidable.com/open-source/urql/",
	},
];

const LinkList = () => {
	return (
		<div>
			{links.map((link) => (
				<Link key={link.id} link={link} />
			))}
		</div>
	);
};

export default LinkList;
