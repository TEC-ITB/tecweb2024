import React from "react";

type Props = {
  image: string;
  name: string;
  position: string;
  division?: string;
};

const OrgaCard = ({ image, name, position, division }: Props) => {
  return (
    <div className="card bg-white shadow-md overflow-hidden relative">
      <div
        className="card-content h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
          <h2 className="card-name text-xl font-bold">{name}</h2>
          <p className="">{position}</p>
          {division && <p className="">{division}</p>}
        </div>
      </div>
    </div>
  );
};

export default OrgaCard;