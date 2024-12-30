"use client";
import React, { useEffect, useState } from "react";
import { performRequest } from "@/lib/dato";
import OrgaCard from "@/components/orgaCard";
import { r1Member, otherMember } from '@/types/index';

const TEAM_QUERY = `
  query Team {
    allRing1s(filter: {}, orderBy: _createdAt_ASC)  {
      id
      name
      post
      profilePic {
        responsiveImage {
          src
        }
      }
    }
    allDirectors(filter: {}, orderBy: _createdAt_ASC)  {
      id
      name: name1
      post: post1
      division: division1
      profilePic: profilePic1 {
        responsiveImage {
          src
        }
      }
    }
    allManagers(filter: {}, orderBy: _createdAt_ASC)  {
      id
      name: name2
      post: post2
      division: division2
      profilePic: profilePic2 {
        responsiveImage {
          src
        }
      }
    }
    allStaffs(filter: {}, orderBy: _createdAt_ASC)  {
      id
      name: name3
      post: post3
      division: division3
      profilePic: profilePic3 {
        responsiveImage {
          src
        }
      }
    }
  }
`;

const TeamPage: React.FC = () => {
  const [ring1Members, setRing1Members] = useState<r1Member[]>([]);
  const [directors, setDirectors] = useState<otherMember[]>([]);
  const [managers, setManagers] = useState<otherMember[]>([]);
  const [staffs, setStaffs] = useState<otherMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const { data } = await performRequest({ query: TEAM_QUERY });
      setRing1Members(data.allRing1s);
      setDirectors(data.allDirectors);
      setManagers(data.allManagers);
      setStaffs(data.allStaffs);
      setLoading(false);
    };
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    if (typeof window !== "undefined") {
      setIsMediumScreen(window.innerWidth >= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (loading)
    return (
      <div className="bg-black text-white text-2xl w-screen h-screen flex items-center justify-center text-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  const renderMembers = (members: (r1Member | otherMember)[], isRing1: boolean = false) => {
    const rows = [];
    const itemsPerRow = isMediumScreen ? 3 : 1;

    for (let i = 0; i < members.length; i += itemsPerRow) {
      rows.push(members.slice(i, i + itemsPerRow));
    }

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center w-full gap-4">
        {row.map((member) => (
          <div key={member.id} className="flex-1 w-full md:max-w-[33%]">
            <OrgaCard
              image={member.profilePic.responsiveImage.src}
              name={member.name}
              position={member.post}
              division={isRing1 ? undefined : (member as otherMember).division}
            />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <main className="mt-[75.75px] flex flex-col justify-center items-center w-full bg-black">
      <section className="h-[30vw] w-full flex">
        <div className="bg-[url('/group.png')] bg-cover bg-center bg-no-repeat w-full h-full">
          <div className="text-white w-full h-full bg-[#051338] bg-opacity-90 flex flex-col justify-center items-center leading-[1] text-shadow-glow-light">
            <h2 className="text-[4vw] font-bold ">Kabinet Lakskarsa</h2>
            <h1 className="text-[6vw] font-bold font-['helvetica']">TEAM</h1>
          </div>
        </div>
      </section>
      <section className="w-[80%] flex flex-col mt-24">
        <div className="text-white flex rounded items-center justify-center w-full bg-[#002B6A]">
          <p className="my-2 text-3xl tracking-wider">Kabinet Lakskarsa</p>
        </div>
        <div className="flex flex-col my-4 gap-4">
          {renderMembers(ring1Members, true)}
        </div>
        <div className="text-[#5C5C5C] flex rounded items-center justify-center w-full bg-[#D9D9D9]">
          <p className="my-2 text-3xl tracking-wider">Directors</p>
        </div>
        <div className="flex flex-col my-4 gap-4">
          {renderMembers(directors)}
        </div>
        <div className="text-[#5C5C5C] flex rounded items-center justify-center w-full bg-[#D9D9D9]">
          <p className="my-2 text-3xl tracking-wider">Managers</p>
        </div>
        <div className="flex flex-col my-4 gap-4">
          {renderMembers(managers)}
        </div>
        <div className="text-[#5C5C5C] flex rounded items-center justify-center w-full bg-[#D9D9D9]">
          <p className="my-2 text-3xl tracking-wider">Staffs</p>
        </div>
        <div className="flex flex-col my-4 gap-4">
          {renderMembers(staffs)}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;